import { useProjectSearchQuery } from '../../redux/slices/projectsSliceApi';
import ProjectSearchItem from './ProjectSearchItem';

const ProjectSearchList = ({
  projectTitle,
  setProjectTitle,
  setIsOpenProjectList,
  setProjectId,
}) => {
  const { data, isSuccess } = useProjectSearchQuery(projectTitle);

  const handleSelectProject = (item) => {
    setProjectTitle(item.title);
    setProjectId(item.id);
    setIsOpenProjectList(false);
  };

  return (
    <section className="w-full h-full bg-lightGray mt-[24px] p-4 absolute z-10">
      {isSuccess ? (
        data.data
          .filter((item) => item.owner_id === localStorage.getItem('user_id'))
          .map((item) => (
            <ProjectSearchItem
              onClick={() => handleSelectProject(item)}
              key={item.id}
              title={item.title}
              color={item.color}
            />
          ))
      ) : (
        <>
          <h2>The minimum request length is 3 characters!</h2>
          <h2>Example - Per</h2>
        </>
      )}
    </section>
  );
};

export default ProjectSearchList;
