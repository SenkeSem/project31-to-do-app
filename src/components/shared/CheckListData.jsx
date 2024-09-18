import QuickItem from './QuickItem';

import { useFetchAllUserChecklistsQuery } from '../../redux/ToDoApi';

const CheckListData = () => {
  const { data, isSuccess } = useFetchAllUserChecklistsQuery(localStorage.getItem('user_id'));

  console.log(data);

  return (
    <div>
      {isSuccess &&
        data.data.map((item, id) => (
          <QuickItem key={item.id} color={item.color}>
            <p className="italic">Home work today</p>
            {item.items.map((item) => (
              <article key={item} className="flex items-center gap-3 mt-4 cursor-pointer">
                <input
                  className="w-3 h-3 bg-signUpWhite rounded border-textMenuGray border-[1px]"
                  type="checkbox"
                />
                <p className="font-medium text-base">{item.content}</p>
              </article>
            ))}
          </QuickItem>
        ))}
    </div>
  );
};

export default CheckListData;
