import { useParams } from 'react-router-dom';
import useAppStore from '../store/useAppStore';
import BoardColumn from '../components/BoardColumn';
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

function BoardPage() {
  const { projectId } = useParams();
  const project = useAppStore((s) =>
    s.projects.find((p) => p.id === projectId)
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 }
    })
  );

  if (!project) return <p>Project not found</p>;

  return (
    <div className="overflow-x-auto">
      <DndContext sensors={sensors} collisionDetection={closestCenter}>
        <SortableContext
          items={project.columns}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex gap-4 p-4 min-h-[70vh]">
            {project.columns.map((col) => (
              <BoardColumn key={col} column={col} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default BoardPage;
