import ArrowLeft from '../components/icons/ArrowLeft';
import WorkFooter from '../components/WorkFooter';
import Button from '../components/shared/Button';

const CreateCheckList = () => {
  return (
    <div className="flex flex-col">
      <header>
        <div className="w-full h-28 bg-btnRed flex justify-between pt-4 pr-4">
          <button className="absolute mt-2 ml-5">
            <ArrowLeft fill={'#FFFFFF'} />
          </button>
          <section className="w-full flex flex-col justify-between items-center">
            <h1 className="italic font-thin text-xl text-signUpWhite">Add Check List</h1>
          </section>
        </div>
      </header>
      <main className="w-full h-screen px-4">
        <div className="h-auto relative -top-10 bg-signUpWhite shadow-2xl pt-6 pl-6 pr-6 rounded-lg pb-12">
          <section>
            <h4 className="text-lg italic font-thin">Title</h4>
            <textarea
              className="w-full h-12 font-medium text-base text-homeLineBlack mt-3"
              name="newNote"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              id="newNote"></textarea>
            <article className="flex gap-3 mt-4">
              <div className="w-5 h-5 bg-veryLightGray rounded border-textMenuGray border-2"></div>
              <p className="font-medium text-base">List Item 1</p>
            </article>
            <article className="flex gap-3 mt-4">
              <div className="w-5 h-5 bg-veryLightGray rounded border-textMenuGray border-2"></div>
              <p className="font-medium text-base">List Item 2</p>
            </article>
            <article className="flex gap-3 mt-4">
              <div className="w-5 h-5 bg-veryLightGray rounded border-textMenuGray border-2"></div>
              <p className="font-medium text-base">List Item 3</p>
            </article>
            <Button type={'addedItem'}>+ Add new item</Button>
          </section>
          <section className="mt-8">
            <h4 className="text-lg italic font-thin">Choose Color</h4>
            <div className="flex gap-3 mt-4">
              <div className="w-12 h-12 bg-todoBlue cursor-pointer rounded-lg"></div>
              <div className="w-12 h-12 bg-projectRed cursor-pointer rounded-lg"></div>
              <div className="w-12 h-12 bg-projectGreen cursor-pointer rounded-lg"></div>
              <div className="w-12 h-12 bg-ChooseColor4 cursor-pointer rounded-lg"></div>
              <div className="w-12 h-12 bg-ChooseColor5 cursor-pointer rounded-lg"></div>
            </div>
          </section>
          <Button type={'primary'}>Done</Button>
        </div>
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default CreateCheckList;
