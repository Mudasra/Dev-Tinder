import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import useAppStore from '../store/useAppStore';
import BoardColumn from '../components/BoardColumn';
import TaskModal from '../components/TaskModal';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

function BoardPage() {

    const reorderTasks = useAppStore(s => s.reorderTasks);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const [taskId, overId] = [active.id, over.id];
    if (taskId === overId) return;

    // ⚠️ Note: For cross-column, also pass column info
    reorderTasks({ taskId, toColumn: over.data.current.column, toIndex: over.data.current.index });
  };

  const { projectId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);

  const project = useAppStore(s =>
    s.projects.find(p => p.id === projectId)
  );

  const addTask = useAppStore(s => s.addTask);
  const allTasks = useAppStore(s => s.tasks);

  // Memoize tasks for this project to prevent infinite rerender
  const projectTasks = useMemo(
    () => allTasks.filter(t => t.projectId === projectId),
    [allTasks, projectId]
  );

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  if (!project) return <p className="p-4">Project not found</p>;

  const assignees = ['Alice', 'Bob', 'Charlie']; // placeholder

  return (

    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <div>
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold">{project.name} Board</h2>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
          + New Task
        </button>
      </div>

      {/* Kanban Columns */}
      <div className="overflow-x-auto">
        <DndContext sensors={sensors} collisionDetection={closestCenter}>
          <SortableContext items={project.columns} strategy={horizontalListSortingStrategy}>
            <div className="flex gap-4 p-4 min-h-[70vh]">
              {project.columns.map(col => (
                <BoardColumn
                  key={col}
                  column={col}
                  projectId={projectId}
                  tasks={projectTasks.filter(t => t.column === col)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      {/* Task Modal */}
      <TaskModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={task => addTask({ ...task, projectId })}
        columns={project.columns}
        assignees={assignees}
      />
    </div>
    </DndContext>


  );
}

export default BoardPage;
