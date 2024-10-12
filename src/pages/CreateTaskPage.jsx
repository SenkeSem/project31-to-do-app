import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { useCreateTaskMutation } from '../redux/slices/tasksSliceApi';
import { toast } from 'react-toastify';

import ArrowLeft from '../components/icons/ArrowLeft';
import Button from '../components/shared/Button';
import Modal from '../components/shared/Modal';
import Skrepka from '../components/icons/Skrepka';
import Input from '../components/shared/Input';
import TextArea from '../components/shared/TextArea';
import MembersSearchList from '../components/task/MembersSearchList';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ProjectSearchList from '../components/project/ProjectSearchList';
import MiniAvatar from '../components/task/MiniAvatar';

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const methods = useForm({
    mode: 'onBlur',
  });

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [isOpenProjectList, setIsOpenProjectList] = useState(false);
  const [isOpenMembersSearch, setIsOpenMembersSearch] = useState(false);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectId, setProjectId] = useState('');
  const [searchParam, setSearchParam] = useState('');
  const [members, setMembers] = useState([]);

  const [createTask] = useCreateTaskMutation();

  const handleCreateTask = async () => {
    try {
      let res = await createTask({
        title: title,
        due_date: date.toISOString().slice(0, -1),
        description: description,
        assigned_to: localStorage.getItem('user_id'),
        is_completed: false,
        project_id: projectId,
        owner_id: localStorage.getItem('user_id'),
        members: members,
        attachments: null,
      });

      console.log(res);

      setTitle('');
      setDate(null);
      setDescription('');
      setProjectId('');
      setProjectTitle('');
      setSearchParam('');
      setMembers([]);

      toast.success('The task has been successfully created!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <header>
        <div className="w-full h-28 bg-btnRed flex justify-between pt-4 pr-4">
          <button onClick={() => navigate(-1)} className="absolute mt-2 ml-5">
            <ArrowLeft fill={'#FFFFFF'} />
          </button>
          <section className="w-full flex flex-col justify-between items-center">
            <h1 className="italic font-thin text-xl text-signUpWhite">New Task</h1>
          </section>
        </div>
      </header>

      <main className="w-full h-screen px-4">
        <div className="relative -top-10 bg-signUpWhite shadow-2xl pt-8 rounded-lg pb-12 z-10">
          <FormProvider {...methods}>
            <section className="flex items-center justify-between px-6">
              <article className="flex justify-center items-center gap-4">
                <h4 className="italic font-thin text-xl">For</h4>
                <Input
                  id={'assignee'}
                  type={'text'}
                  placeholder={'Assignee'}
                  style={'createTaskPage'}
                />
              </article>
              <article className="flex items-center gap-4">
                <h4 className="italic font-thin text-xl">In</h4>

                <Input
                  onFocus={() => setIsOpenProjectList(true)}
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  id={'project'}
                  type={'text'}
                  placeholder={'Project'}
                  style={'createTaskPage'}
                />
              </article>
            </section>

            {isOpenProjectList && (
              <ProjectSearchList
                projectTitle={projectTitle}
                setProjectTitle={setProjectTitle}
                setIsOpenProjectList={setIsOpenProjectList}
                setProjectId={setProjectId}
              />
            )}

            <section className="mt-9">
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id={'title'}
                type={'text'}
                placeholder={'Title'}
                style={'createTaskPageTitle'}
              />
            </section>

            <section className="px-6 mt-4">
              <p className="text-descriptionGray text-base font-medium">Description</p>
              <div className="w-full h-32 flex flex-col justify-between mt-3">
                <TextArea
                  value={description}
                  setValue={setDescription}
                  name={'description'}
                  id={'description'}
                  type={'taskPage'}
                />
                <div className="bg-notVeryLightGray h-12 flex items-center pl-4 border-b-[1px] border-x-[1px] rounded-b-xl border-borderGray">
                  <Skrepka />
                </div>
              </div>
            </section>

            <section className="w-full h-16 bg-lightGray mt-6 flex items-center gap-3">
              <h4 className="ml-7 font-medium text-base text-homeLineBlack">Due Date</h4>
              <Button isActive={() => setIsOpenCalendar(!isOpenCalendar)} type={'smallBlue'}>
                {date
                  ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
                  : 'Anytime'}
              </Button>
            </section>

            <section className="px-6 mt-6">
              <h4 className="font-medium text-base text-homeLineBlack">Add Member</h4>
              <article className="flex items-center gap-3 mt-2">
                {members.length === 0 ? (
                  <div className="font-medium text-sm text-homeLineBlack w-24 h-12 bg-veryLightGray rounded-full flex items-center justify-center">
                    Anyone
                  </div>
                ) : (
                  members.map((item) => (
                    <div key={item} className="text-sm w-12 h-12 rounded-full">
                      <MiniAvatar userId={item} />
                    </div>
                  ))
                )}

                <Button onClick={() => setIsOpenMembersSearch(true)} type={'circleGray'}>
                  +
                </Button>
              </article>
            </section>

            {isOpenMembersSearch && (
              <Modal setActive={setIsOpenMembersSearch}>
                <div className="rounded-lg bg-signUpWhite flex flex-col justify-center gap-2 p-4">
                  <div className="w-[400px]">
                    <Input
                      value={searchParam}
                      onChange={(e) => setSearchParam(e.target.value)}
                      id={'search'}
                      type={'search'}
                      placeholder={'search members please...'}
                      style={'addedMembersSearch'}
                    />
                  </div>
                  <MembersSearchList
                    members={members}
                    setMembers={setMembers}
                    searchParam={searchParam}
                  />
                </div>
              </Modal>
            )}

            <div className="px-6 mt-9">
              <Button isActive={handleCreateTask} type={'primary'}>
                Add Task
              </Button>
            </div>
          </FormProvider>
        </div>

        {isOpenCalendar && (
          <Modal setActive={setIsOpenCalendar}>
            <div className="rounded-lg bg-signUpWhite w-[250px] h-[150px] flex flex-col justify-center">
              <DatePicker
                placeholderText="select a date"
                selected={date}
                onChange={(date) => setDate(new Date(date))}
                showTimeSelect
                dateFormat="Pp"
              />
              <div className="px-[15px] mt-6">
                <Button isActive={() => setIsOpenCalendar(false)} type={'primary'}>
                  Done
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </main>
      <footer className="w-full sticky bottom-0 h-20 bg-workMenuDarkBlue"></footer>
    </div>
  );
};

export default CreateTaskPage;
