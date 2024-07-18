import { useState } from 'react';
import ArrowLeft from '../components/icons/ArrowLeft';
import Button from '../components/shared/Button';
import ModalCalendar from '../components/shared/ModalCalendar';
import Calendar from '../components/shared/Calendar';

const CreateTaskPage = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  return (
    <div className="flex flex-col">
      <header>
        <div className="w-full h-28 bg-btnRed flex justify-between pt-4 pr-4">
          <button className="absolute mt-2 ml-5">
            <ArrowLeft fill={'#FFFFFF'} />
          </button>
          <section className="w-full flex flex-col justify-between items-center">
            <h1 className="italic font-thin text-xl text-signUpWhite">New Task</h1>
          </section>
        </div>
      </header>
      <main className="w-full h-screen px-4">
        <div className="relative -top-10 bg-signUpWhite shadow-2xl pt-8 rounded-lg pb-12 z-10">
          <section className="flex items-center justify-between px-6">
            <article className="flex items-center gap-4">
              <h4 className="italic font-thin text-xl">For</h4>
              {/* TODO: use <Input /> from shared */}
              <input
                type="text"
                placeholder="Assignee"
                className=" bg-lightGray text-sm placeholder-homeLineBlack font-medium w-24 h-12 text-center rounded-full"
              />
            </article>
            <article className="flex items-center gap-4">
              <h4 className="italic font-thin text-xl">In</h4>
              <input
                type="text"
                placeholder="Project"
                className=" bg-lightGray text-sm placeholder-homeLineBlack font-medium w-24 h-12 text-center rounded-full"
              />
            </article>
          </section>

          <section className="mt-9">
            <input
              type="text"
              placeholder="Title"
              className="w-full bg-lightGray h-16 pl-7 italic font-thin text-xl placeholder-homeLineBlack"
            />
          </section>

          <section className="px-6 mt-4">
            <p className="text-descriptionGray text-base font-medium">Description</p>
            <div className="w-full h-32 flex flex-col justify-between mt-3">
              <textarea
                name="description"
                id="description"
                className="w-full h-full border-[1px] border-borderGray rounded-t-xl"></textarea>
              <div className="bg-notVeryLightGray h-12 flex items-center pl-4 border-b-[1px] border-x-[1px] rounded-b-xl border-borderGray">
                <img width={20} src="/public/skrepka.svg" alt="skrepka" />
              </div>
            </div>
          </section>

          <section className="w-full h-16 bg-lightGray mt-6 flex items-center gap-3">
            <h4 className="ml-7 font-medium text-base text-homeLineBlack">Due Date</h4>
            <Button isActive={() => setIsOpenCalendar(!isOpenCalendar)} type={'smallBlue'}>
              Anytime
            </Button>
          </section>

          <section className="px-6 mt-6">
            <h4 className="font-medium text-base text-homeLineBlack">Add Member</h4>
            <article className="flex items-center gap-3 mt-2">
              <div className="font-medium text-sm text-homeLineBlack w-24 h-12 bg-veryLightGray rounded-full flex items-center justify-center">
                Anyone
              </div>
              <Button type={'circleGray'}>+</Button>
            </article>
          </section>
          <div className="px-6 mt-9">
            <Button type={'primary'}>Add Task</Button>
          </div>
        </div>

        {isOpenCalendar && (
          <ModalCalendar setActive={setIsOpenCalendar}>
            <h4 className="text-center mt-7 italic font-thin text-homeLineBlack text-sm uppercase">
              August 2018
            </h4>
            <Calendar />
            <div className="px-[96px] mt-5">
              <Button type={'primary'}>Done</Button>
            </div>
          </ModalCalendar>
        )}
      </main>
      <footer className="w-full sticky bottom-0 h-20 bg-workMenuDarkBlue"></footer>
    </div>
  );
};

export default CreateTaskPage;
