import { useState } from 'react';
import useAppStore from '../store/useAppStore';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

function ProjectListPage() {
  const projects = useAppStore((s) => s.projects);
  const addProject = useAppStore((s) => s.addProject);
  const deleteProject = useAppStore((s) => s.deleteProject);
  const updateProjectName = useAppStore((s) => s.updateProjectName);

  const [modalOpen, setModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={() => {
              setEditProject(project);
              setModalOpen(true);
            }}
            onDelete={() => deleteProject(project.id)}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditProject(null);
        }}
        defaultName={editProject?.name || ''}
        onSubmit={(name) => {
          if (editProject) {
            updateProjectName(editProject.id, name);
          } else {
            addProject(name);
          }
        }}
      />
    </div>
  );
}

export default ProjectListPage;
