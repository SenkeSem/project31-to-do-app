import CheckListItem from './CheckListItem';
import RedTrash from '../icons/RedTrash';

import { useDeleteChecklistMutation, useFetchAllUserChecklistsQuery } from '../../redux/ToDoApi';

const CheckListData = () => {
  const { data, isSuccess } = useFetchAllUserChecklistsQuery(localStorage.getItem('user_id'));
  const [deleteChecklist] = useDeleteChecklistMutation();

  const handleDeleteChecklist = async (checklist_id) => {
    try {
      let res = await deleteChecklist(checklist_id);

      console.log(res);
    } catch (error) {
      console.log('delete Checklist error ->>', error);
    }
  };

  return (
    <div>
      {isSuccess &&
        data.data.map((item) => (
          <CheckListItem key={item.id} color={item.color}>
            <p className="italic flex justify-between">
              {item.title}
              <RedTrash isActive={() => handleDeleteChecklist(item.id)} />
            </p>
            {item.items.map((item) => (
              <article key={item.id} className="flex items-center gap-3 mt-4 ">
                <input
                  className="w-3 h-3 bg-signUpWhite rounded border-textMenuGray border-[1px] cursor-pointer"
                  type="checkbox"
                />
                <p className="font-medium text-base shrink-0">{item.content}</p>
                <div className="flex w-full justify-end opacity-0 hover:opacity-100">
                  <RedTrash />
                </div>
              </article>
            ))}
          </CheckListItem>
        ))}
    </div>
  );
};

export default CheckListData;
