import WorkFooter from '../components/WorkFooter';
import QuickItem from '../components/shared/QuickItem';
import RedTrash from '../components/icons/RedTrash';
import CheckListData from '../components/shared/CheckListData';

import { useDeleteNoteMutation, useFetchUserNotesQuery } from '../redux/ToDoApi';

const QuickPage = () => {
  const { data, isLoading } = useFetchUserNotesQuery(localStorage.getItem('user_id'));
  let [deleteNote] = useDeleteNoteMutation();

  const handleDeleteNote = async (item) => {
    try {
      let res = deleteNote(item.id);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-4 h-full flex flex-col bg-backColorMenu">
      <header className="w-full h-20 flex items-end justify-center pb-3 mb-8 italic font-thin text-xl bg-signUpWhite">
        Quick Notes
      </header>
      <main className="w-full h-screen mb-10 px-4 flex flex-col grow-1 gap-4 ">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.data.map((item) => (
            <QuickItem key={item.id} color={item.color}>
              <p className="italic overflow-hidden">{item.description}</p>
              <div className="cursor-pointer" onClick={() => handleDeleteNote(item)}>
                <RedTrash />
              </div>
            </QuickItem>
          ))
        )}
        <CheckListData />
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default QuickPage;
