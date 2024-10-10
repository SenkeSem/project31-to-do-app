import { useTaskMembersSearchQuery } from '../../redux/slices/tasksSliceApi';

const MembersSearchList = ({ searchParam, members, setMembers }) => {
  const { data, isSuccess } = useTaskMembersSearchQuery(searchParam);

  console.log(data);
  console.log(members);

  return (
    <div className="flex flex-col gap-1">
      {isSuccess &&
        data.data.map((item) => (
          <div
            onClick={() => setMembers([...members, item.id])}
            key={item.id}
            className="border rounded p-2 cursor-pointer hover:bg-shadowGray">
            <h3>
              <b>username: </b>
              {item.username}
            </h3>
            <span>
              <b>email: </b>
              {item.email}
            </span>
          </div>
        ))}
    </div>
  );
};

export default MembersSearchList;
