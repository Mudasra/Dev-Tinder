import { Link } from 'react-router-dom';

function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <div className="card bg-base-200 shadow hover:shadow-lg transition p-4">
      <div className="flex justify-between items-center">
        <Link
          to={`/projects/${project.id}/board`}
          className="font-semibold text-lg hover:underline"
        >
          {project.name}
        </Link>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-outline" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-sm btn-error" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
