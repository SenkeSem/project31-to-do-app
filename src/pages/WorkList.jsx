import WorkHeader from '../components/WorkHeader';
import WorkFooter from '../components/WorkFooter';

const WorkList = () => {
  return (
    <div className="flex flex-col">
      <header>
        <WorkHeader />
      </header>
      <main className="w-full">
        <h1 className=" text-5xl">CONTENT!!!</h1>
      </main>
      <footer className="w-full absolute bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default WorkList;
