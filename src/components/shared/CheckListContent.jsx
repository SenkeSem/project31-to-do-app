import Button from '../shared/Button';
import ChooseColor from './ChooseColor';
import TextArea from './TextArea';

const CheckListContent = () => {
  return (
    <main className="w-full h-screen px-4">
      <div className="h-auto relative -top-10 bg-signUpWhite shadow-2xl pt-6 pl-6 pr-6 rounded-lg pb-12">
        <section>
          <h4 className="text-lg italic font-thin">Title</h4>
          <TextArea
            type={'checkListPage'}
            name={'newNote'}
            placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            id={'newNote'}
          />
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
          <ChooseColor />
        </section>
        <div className="mt-6">
          <Button type={'primary'}>Done</Button>
        </div>
      </div>
    </main>
  );
};

export default CheckListContent;
