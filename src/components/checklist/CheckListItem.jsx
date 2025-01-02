import { useDeleteChecklistItemMutation } from '../../redux/slices/checklistsSliceApi';

import RedTrash from '../icons/RedTrash';

const CheckListItem = ({ id, content, isCompleted, handleUpdateCheckList }) => {
  const [deleteChecklistItem] = useDeleteChecklistItemMutation();

  const handleDeleteChecklistItem = async (id) => {
    try {
      let res = await deleteChecklistItem(id);

      console.log(res);
    } catch (error) {
      console.log('delete Checklist item error ->>', error);
    }
  };
  return (
    <article className="flex items-center gap-3 mt-4 ">
      <input
        onChange={() => handleUpdateCheckList(id)}
        className="w-3 h-3 bg-signUpWhite rounded border-textMenuGray border-[1px] cursor-pointer"
        type="checkbox"
        checked={isCompleted === true ? true : false}
      />
      <p className="font-medium text-base shrink-0">{content}</p>
      <div className="flex w-full justify-end opacity-0 hover:opacity-100">
        <button onClick={() => handleDeleteChecklistItem(id)}>
          <RedTrash />
        </button>
      </div>
    </article>
  );
};

export default CheckListItem;
