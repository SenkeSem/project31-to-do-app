import { useDeleteProjectMutation } from '../../redux/ToDoApi';
import RedTrash from '../icons/RedTrash';

// TODO: don't use kebab case
const ProjectItem = ({ title, tasks, color, project_id }) => {
  // TODO: provide onClick prop with this fn handleDeleteProject
  const [deleteProject] = useDeleteProjectMutation();

  const handleDeleteProject = async (project_id) => {
    try {
      let res = await deleteProject(project_id);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative w-full h-44 p-6 rounded-md shadow-md shadow-shadowGray ">
      <div className="relative w-6 h-6">
        <div
          style={{ backgroundColor: `${color}`, opacity: '.4' }}
          className={'w-6 h-6 rounded-full'}></div>
        <div
          style={{ backgroundColor: `${color}` }}
          className={'w-3 h-3 rounded-full absolute top-[25%] left-[25%]'}></div>
      </div>
      <h5 className="mt-11 italic font-thin text-lg">{title}</h5>
      <p className="mt-3 font-medium text-base text-textGray">{tasks} Tasks</p>
      <div
        {/*onClick={() => onClick(projectId)}*/}
        onClick={() => handleDeleteProject(project_id)}
        className="absolute top-5 right-5 opacity-0 hover:opacity-100">
        <RedTrash />
      </div>
    </div>
  );
};

export default ProjectItem;
