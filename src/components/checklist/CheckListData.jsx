import { useFetchAllUserChecklistsQuery } from '../../redux/slices/checklistsSliceApi.js';

import CheckList from './CheckList.jsx';

const CheckListData = () => {
  const { data, isSuccess } = useFetchAllUserChecklistsQuery(localStorage.getItem('user_id'));

  return (
    <div>
      {isSuccess &&
        data.data.map((item) => (
          <CheckList
            key={item.id}
            oneChecklist={item}
            title={item.title}
            color={item.color}></CheckList>
        ))}
    </div>
  );
};

export default CheckListData;
