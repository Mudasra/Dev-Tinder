import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import useAppStore from '../store/useAppStore';
import BoardColumn from '../components/BoardColumn';
import TaskModal from '../components/TaskModal';
import TaskDetailsPanel from '../components/TaskDetailsPanel';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

function BoardPage() {
  const { projectId } = useParams();
  const project = useAppStore(s => s.projects.find(p => p.id === projectId));
  const allTasks = useAppStore(s => s.tasks);
  const addTask = useAppStore(s => s.addTask);
  const reorderTasks = useAppStore(s => s.reorderTasks);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const projectTasks = useMemo(
    () => (project ? allTasks.filter(t => t.projectId === projectId && t.column) : []),
    [allTasks, projectId, project]
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over) return;
    const taskId = active.id;
    const overTask = projectTasks.find(t => t.id === over.id);
    if (!overTask) return;

    reorderTasks({
      taskId,
      toColumn: overTask.column,
      toIndex: projectTasks.filter(t => t.column === overTask.column).findIndex(t => t.id === over.id)
    });
  };

  const assignees = ['Alice', 'Bob', 'Charlie'];

  if (!project) return <p className="p-4">Project not found</p>;

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{project.name} Board</h2>
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>+ New Task</button>
        </div>

        {/* Kanban Columns */}
        <div className="overflow-x-auto">
          <SortableContext items={project.columns} strategy={horizontalListSortingStrategy}>
            <div className="flex gap-4 min-h-[70vh]">
              {project.columns.map(col => (
                <BoardColumn
                  key={col}
                  column={col}
                  projectId={projectId}
                  tasks={projectTasks.filter(t => t.column === col)}
                  onTaskClick={setSelectedTaskId}
                />
              ))}
            </div>
          </SortableContext>
        </div>

        <TaskModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={task => addTask({ ...task, projectId })}
          columns={project.columns}
          assignees={assignees}
        />

        {selectedTaskId && (
          <TaskDetailsPanel taskId={selectedTaskId} onClose={() => setSelectedTaskId(null)} />
        )}
      </div>
    </DndContext>
  );
}

export default BoardPage;
