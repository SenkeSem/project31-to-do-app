import WorkFooter from '../components/WorkFooter';
import QuickItem from '../components/shared/QuickItem';

const QuickPage = () => {
  return (
    <div className="flex flex-col bg-backColorMenu">
      <header className="w-full h-20 flex items-end justify-center pb-3 mb-8 italic font-thin text-xl bg-signUpWhite">
        Quick Notes
      </header>
      <main className="w-full h-screen px-4 flex flex-col gap-4">
        <QuickItem color={'red'}>
          <p>
            Meeting with Jessica in Central Park at 10:30PM Meeting with Jessica in Central Park at
            10:30PM Meeting with Jessica in Central Park at 10:30PM Meeting with Jessica in Central
            Park at 10:30PM
          </p>
        </QuickItem>
        <QuickItem color={'blue'}>
          <p>Replace dashboard icon with more colorfull ones</p>
        </QuickItem>
        <QuickItem color={'purple'}>
          <p>
            Replace dashboard icon with more colorfull ones/ Replace dashboard icon with more
            colorfull ones / Replace dashboard icon with more colorfull ones
          </p>
        </QuickItem>
        <QuickItem color={'green'}>
          <p>Home work today</p>
        </QuickItem>
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default QuickPage;
