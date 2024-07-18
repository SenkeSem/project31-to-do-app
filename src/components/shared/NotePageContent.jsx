import ChooseColor from './ChooseColor';
import Button from './Button';
import TextArea from './TextArea';

const NotePageContent = () => {
  return (
    <main className="w-full h-screen px-4">
      <div className="h-auto relative -top-10 bg-signUpWhite shadow-2xl pt-6 pl-6 pr-6 rounded-lg pb-12">
        <section>
          <h4 className="text-lg italic font-thin">Description</h4>
          <TextArea
            type={'notePage'}
            placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            id={'newNote'}
            name={'newNote'}
          />
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

export default NotePageContent;
