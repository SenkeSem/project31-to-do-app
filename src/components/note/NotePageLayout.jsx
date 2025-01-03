import { useNavigate } from 'react-router-dom';
import ArrowLeft from '../icons/ArrowLeft';
import WorkFooter from '../layout/WorkFooter';

const NotePageLayout = ({ children }) => {
  const navigation = useNavigate();

  return (
    <div className="flex flex-col">
      <header>
        <div className="w-full h-28 bg-btnRed flex justify-between pt-4 pr-4">
          <button onClick={() => navigation(-1)} className="absolute mt-2 ml-5">
            <ArrowLeft fill={'#FFFFFF'} />
          </button>
          <section className="w-full flex flex-col justify-between items-center">
            <h1 className="italic font-thin text-xl text-signUpWhite">Add Note</h1>
          </section>
        </div>
      </header>
      {children}
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default NotePageLayout;
