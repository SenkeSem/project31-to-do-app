import {
  useDeleteChecklistItemMutation,
  useDeleteChecklistItemsMutation,
  useDeleteChecklistMutation,
  useFetchAllUserChecklistsQuery,
} from '../../redux/slices/checklistsSliceApi.js';

import CheckListItem from './CheckListItem';
import RedTrash from '../icons/RedTrash';
import Clean from '../icons/Clean';

const CheckListData = () => {
  // TODO: it's not a shared component
  const { data, isSuccess } = useFetchAllUserChecklistsQuery(localStorage.getItem('user_id'));
  const [deleteChecklist] = useDeleteChecklistMutation();
  const [deleteChecklistItem] = useDeleteChecklistItemMutation();
  const [deleteChecklistItems] = useDeleteChecklistItemsMutation();

  const handleDeleteChecklist = async (checklist_id) => {
    try {
      let res = await deleteChecklist(checklist_id);

      console.log(res);
    } catch (error) {
      console.log('delete Checklist error ->>', error);
    }
  };

  const handleDeleteChecklistItem = async (checklist_item_id) => {
    try {
      let res = await deleteChecklistItem(checklist_item_id);

      console.log(res);
    } catch (error) {
      console.log('delete Checklist item error ->>', error);
    }
  };

  const handleDeleteChecklistItems = async (items) => {
    let resultArray = [];
    items.map((item) => resultArray.push(item.id));

    try {
      let res = await deleteChecklistItems({
        items: resultArray,
      });

      console.log(res);
    } catch (error) {
      console.log('delete Checklist items error ->>', error);
    }
  };

  return (
    <div>
      {isSuccess &&
        data.data.map((item) => (
          <CheckListItem key={item.id} color={item.color}>
            <p className="italic flex justify-between">
              {item.title}
              <div className="flex gap-3">
                <button onClick={() => handleDeleteChecklistItems(item.items)}>
                  <Clean />
                </button>
                <button onClick={() => handleDeleteChecklist(item.id)}>
                  <RedTrash />
                </button>
              </div>
            </p>

            {item.items.length === 0 ? (
              <p className="mt-2 font-semibold">the checklist items have not been added</p>
            ) : (
              item.items.map((item) => (
                <article key={item.id} className="flex items-center gap-3 mt-4 ">
                  <input
                    className="w-3 h-3 bg-signUpWhite rounded border-textMenuGray border-[1px] cursor-pointer"
                    type="checkbox"

                    // {item.is_cois_completed && checked}
                  />
                  <p className="font-medium text-base shrink-0">{item.content}</p>
                  <div className="flex w-full justify-end opacity-0 hover:opacity-100">
                    <button onClick={() => handleDeleteChecklistItem(item.id)}>
                      <RedTrash />
                    </button>
                  </div>
                </article>
              ))
            )}
          </CheckListItem>
        ))}
    </div>
  );
};

export default CheckListData;
