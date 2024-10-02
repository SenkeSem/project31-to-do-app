import { useState } from 'react';
import {
  useDeleteChecklistItemsMutation,
  useDeleteChecklistMutation,
  useUpdateChecklistMutation,
} from '../../redux/slices/checklistsSliceApi';

import RedTrash from '../icons/RedTrash';
import Clean from '../icons/Clean';
import CheckListItem from './CheckListItem';

const CheckList = ({ title, color, oneChecklist }) => {
  const [checklist, setChecklist] = useState(oneChecklist);

  const [deleteChecklist] = useDeleteChecklistMutation();
  const [deleteChecklistItems] = useDeleteChecklistItemsMutation();
  const [updateCheckList] = useUpdateChecklistMutation();

  const handleDeleteChecklist = async (checklistId) => {
    try {
      let res = await deleteChecklist(checklistId);

      console.log(res);
    } catch (error) {
      console.log('delete Checklist error ->>', error);
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

  const handleUpdateCheckList = async (id) => {
    try {
      setChecklist({
        ...checklist,
        items: checklist.items.map((item) =>
          item.id === id ? { ...item, is_completed: !item.is_completed } : item,
        ),
      });

      console.log(checklist);

      let res = await updateCheckList({
        id: checklist.id,
        title: checklist.title,
        color: checklist.color,
        owner_id: localStorage.getItem('user_id'),
        items: checklist.items,
        created_at: checklist.created_at,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-4 pl-8 pr-5 pb-5 rounded-md shadow-xl shadow-shadowGray relative font-thin text-base flex flex-col mb-4 ">
      <div
        style={{ backgroundColor: `${color}` }}
        className={'w-32 h-1 absolute top-0 left-8'}></div>
      <p className="italic flex justify-between">
        {title}
        <div className="flex gap-3">
          <button onClick={() => handleDeleteChecklistItems(oneChecklist.items)}>
            <Clean />
          </button>
          <button onClick={() => handleDeleteChecklist(oneChecklist.id)}>
            <RedTrash />
          </button>
        </div>
      </p>

      {checklist.length === 0 ? (
        <p className="mt-2 font-semibold">the checklist items have not been added</p>
      ) : (
        checklist.items.map((item) => (
          <CheckListItem
            key={item.id}
            id={item.id}
            isCompleted={item.is_completed}
            content={item.content}
            handleUpdateCheckList={handleUpdateCheckList}
          />
        ))
      )}
    </div>
  );
};

export default CheckList;
