import { useFetchUserQuery } from '../../redux/slices/userSliceApi';

const AssignedToBlock = ({ userId }) => {
  const { data, isSuccess } = useFetchUserQuery(userId);

  console.log(data);

  return (
    <div>
      <h5 className="text-textGray font-medium text-base">Assigned to</h5>
      <p className="italic font-thin text-homeLineBlack text-base">
        {isSuccess && data?.data.username}
      </p>
    </div>
  );
};

export default AssignedToBlock;
