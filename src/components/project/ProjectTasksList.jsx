import { useFetchProjectTasksQuery } from '../../redux/slices/tasksSliceApi';
import ToDo from '../ToDo';

const ProjectTasksList = ({ projectId }) => {
  const { data, isLoading } = useFetchProjectTasksQuery(projectId);

  return (
    <div>
      {!isLoading ? (
        data.data.map((item) => (
          <ToDo key={item.id} taskId={item.id} completed={item.is_completed} title={item.title} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProjectTasksList;
