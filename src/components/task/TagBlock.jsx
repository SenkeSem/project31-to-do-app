import { useFetchOneProjectQuery } from '../../redux/slices/projectsSliceApi';
import { Link } from 'react-router-dom';

const TagBlock = ({ projectId }) => {
  const { data } = useFetchOneProjectQuery(projectId);

  console.log(data);

  return (
    <Link to={`/projects/${projectId}`}>
      <div
        style={{ color: `${data?.data.color}` }}
        className="px-4 h-[40px] rounded-lg border-[1px] border-[#E8E8E8] flex items-center justify-center font-thin italic text-base cursor-pointer">
        {data?.data.title}
      </div>
    </Link>
  );
};

export default TagBlock;
