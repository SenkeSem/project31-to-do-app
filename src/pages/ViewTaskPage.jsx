import BlackCross from '../components/icons/BlackCross';
import Chesterna from '../components/icons/Chesterna';
import Calendar from '../components/icons/Calendar';
import Paper from '../components/icons/Paper';
import Members from '../components/icons/Members';
import Button from '../components/shared/Button';
import Chain from '../components/icons/Chain';
import DoubleDown from '../components/icons/DoubleDown';
import { useState } from 'react';
import ModalViewEdit from '../components/shared/ModalViewEdit';

const ViewTaskPage = () => {
  const [isEdit, setItEdit] = useState(false);

  return (
    <>
      <div className="w-screen h-screen bg-btnRed">
        <div className="bg-workMenuDarkBlue w-full h-16 absolute bottom-0"></div>
      </div>

      <div className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0 flex justify-center px-4 pt-6 overflow-auto pb-[35px]">
        <div className="rounded-lg bg-signUpWhite w-full h-screen relative pt-[56px] pl-[24px] pr-[24px]">
          <div className="absolute top-4 left-4 cursor-pointer">
            <BlackCross />
          </div>
          <div onClick={() => setItEdit(!isEdit)} className="absolute top-3 right-4 cursor-pointer">
            <Chesterna />
          </div>
          <section>
            <h1 className="text-lg italic font-thin text-homeLineBlack">
              Meeting according with design team in Central Park
            </h1>

            <article className="flex items-center gap-[10px] mt-6 pb-4 border-b-[1px] border-[#E4E4E4]">
              <img width={44} src="/public/profilePhoto.png" alt="profilePhoto" />
              <div>
                <h5 className="text-textGray font-medium text-base">Assigned to</h5>
                <p className="italic font-thin text-homeLineBlack text-base">Stephen Chow</p>
              </div>
            </article>

            <article className="flex items-top gap-[25px] mt-4 pb-4 pl-[15px] border-b-[1px] border-[#E4E4E4]">
              <div className="relative top-1">
                <Calendar />
              </div>
              <div>
                <h5 className="text-textGray font-medium text-base">Due Date</h5>
                <p className="italic font-thin text-homeLineBlack text-base">Aug 5,2018</p>
              </div>
            </article>

            <article className="flex items-top gap-[25px] mt-4 pb-4 pl-[15px] border-b-[1px] border-[#E4E4E4]">
              <div className="relative top-1">
                <Paper />
              </div>
              <div>
                <h5 className="text-textGray font-medium text-base">Decription</h5>
                <p className="font-medium text-homeLineBlack text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
              </div>
            </article>

            <article className="flex items-top gap-[25px] mt-4 pb-4 pl-[15px] border-b-[1px] border-[#E4E4E4]">
              <div className="relative top-1">
                <Members />
              </div>
              <div>
                <h5 className="text-textGray font-medium text-base">Members</h5>
                <div className="mt-[10px] flex gap-[5px]">
                  <img width={32} src="/public/profilePhoto.png" alt="profilePhoto" />
                  <img width={32} src="/public/profilePhoto.png" alt="profilePhoto" />
                  <img width={32} src="/public/profilePhoto.png" alt="profilePhoto" />
                  <img width={32} src="/public/profilePhoto.png" alt="profilePhoto" />
                  <Button type={'circleRed'}>···</Button>
                </div>
              </div>
            </article>

            <article className="flex items-top gap-[25px] mt-4 pl-[15px]">
              <div className="relative top-1">
                <Chain />
              </div>
              <div>
                <h5 className="text-textGray font-medium text-base">Tag</h5>
                <div className="mt-[9px]">
                  <Button type={'personal'}>Personal</Button>
                </div>
              </div>
            </article>
            <div className="mt-8">
              <Button type={'bluePrimary'}>Complete Task</Button>
            </div>
            <div className="mt-4">
              <Button type={'comment'}>
                Comment <DoubleDown />
              </Button>
            </div>
          </section>

          {isEdit && (
            <ModalViewEdit setActive={setItEdit}>
              <p>Add Member</p>
              <p>Edit Task</p>
              <p>Delete Task</p>
            </ModalViewEdit>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewTaskPage;
