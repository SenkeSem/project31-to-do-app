import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateTaskCommentMutation, useFetchOneTaskQuery } from '../redux/slices/tasksSliceApi';
import { toast } from 'react-toastify';
import { axiosInstance } from '../axios';

import BlackCross from '../components/icons/BlackCross';
import Chesterna from '../components/icons/Chesterna';
import Calendar from '../components/icons/Calendar';
import Paper from '../components/icons/Paper';
import Members from '../components/icons/Members';
import Button from '../components/shared/Button';
import Chain from '../components/icons/Chain';
import DoubleDown from '../components/icons/DoubleDown';
import Modal from '../components/shared/Modal';
import TextArea from '../components/shared/TextArea';
import Skrepka from '../components/icons/Skrepka';
import Image from '../components/icons/Image';
import CommentsList from '../components/task/comments/CommentsList';
import MiniAvatar from '../components/task/MiniAvatar';
import ProfilePhoto from '../components/icons/ProfilePhoto';
import AssignedToBlock from '../components/task/AssignedToBlock';
import AttachmentsList from '../components/task/AttachmentsList';

const ViewTaskPage = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();

  const [isEdit, setItEdit] = useState(false);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [comment, setComment] = useState('');
  const [attachmentFormOpen, setAttachmentFormOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const { data, isSuccess } = useFetchOneTaskQuery(taskId);
  const [createComment] = useCreateTaskCommentMutation();

  console.log(data);

  const handleCreateTask = async () => {
    try {
      let res = createComment({
        content: comment,
        task_id: taskId,
        owner_id: localStorage.getItem('user_id'),
      });

      console.log(res);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadImageAttachment = async () => {
    if (!selectedFile) {
      alert('please select a file');
      return;
    }

    let formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('type', 'image');
    formData.append('task_id', taskId);

    try {
      await axiosInstance.post('tasks-attachments', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          'Content-Type': `multipart/form-data; boundary=${undefined}`,
        },
      });

      setAttachmentFormOpen(false);
      setSelectedFile(null);

      toast.success('The image has been uploaded successfully!!', {
        position: 'top-right',
        autoClose: 2000,
        draggable: true,
        theme: 'light',
      });
    } catch (error) {
      toast.error('Error!!!', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light',
      });
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-btnRed">
        <div className="bg-workMenuDarkBlue w-full h-16 absolute bottom-0"></div>
      </div>

      <div className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0 flex justify-center px-4 pt-6 pb-6 overflow-scroll">
        <div className="rounded-lg bg-signUpWhite w-full h-max relative pt-[56px] px-6 pb-10">
          <div onClick={() => navigate(-1)} className="absolute top-4 left-4 cursor-pointer">
            <BlackCross />
          </div>
          <div onClick={() => setItEdit(!isEdit)} className="absolute top-3 right-4 cursor-pointer">
            <Chesterna />
          </div>
          <section>
            <h1 className="text-lg italic font-thin text-homeLineBlack">{data?.data.title}</h1>

            <article className="flex items-center gap-[10px] mt-6 pb-4 border-b-[1px] border-[#E4E4E4]">
              {isSuccess ? (
                <div className="w-[44px] h-[44px] rounded-full">
                  <MiniAvatar userId={data?.data.assigned_to} />
                </div>
              ) : (
                <div className="w-[44px] h-[44px] rounded-full">
                  <ProfilePhoto />
                </div>
              )}
              <AssignedToBlock userId={data?.data.assigned_to} />
            </article>

            <article className="flex items-top gap-[25px] mt-4 pb-4 pl-[15px] border-b-[1px] border-[#E4E4E4]">
              <div className="relative top-1">
                <Calendar />
              </div>
              <div>
                <h5 className="text-textGray font-medium text-base">Due Date</h5>
                <p className="italic font-thin text-homeLineBlack text-base">
                  {data?.data.due_date}
                </p>
              </div>
            </article>

            <article className="flex items-top gap-[25px] mt-4 pb-4 pl-[15px] border-b-[1px] border-[#E4E4E4]">
              <div className="relative top-1">
                <Paper />
              </div>
              <div>
                <h5 className="text-textGray font-medium text-base">Decription</h5>
                <p className="font-medium text-homeLineBlack text-base">{data?.data.description}</p>
              </div>
            </article>

            <article className="flex items-top gap-[25px] mt-4 pb-4 pl-[15px] border-b-[1px] border-[#E4E4E4]">
              <div className="relative top-1">
                <Members />
              </div>
              <div>
                <h5 className="text-textGray font-medium text-base">Members</h5>
                <div className="mt-[10px] flex gap-[5px]">
                  {data?.data.members &&
                    data?.data.members.map((item) => (
                      <div key={item.id} className="w-[32px] h-[32px] rounded-full">
                        <MiniAvatar userId={item.id} />
                      </div>
                    ))}

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

            {isOpenComment && (
              <>
                <article className="mt-[33px]">
                  <div className="w-full h-32 flex flex-col justify-between mt-3">
                    <TextArea
                      value={comment}
                      setValue={setComment}
                      placeholder={'Write a comment'}
                      id={'description'}
                      name={'description'}
                      type={'viewTaskPage'}
                    />
                    <div className="bg-notVeryLightGray h-12 flex items-center justify-between py-[14px] pl-4 pr-5 border-b-[1px] border-x-[1px] rounded-b-xl border-borderGray">
                      <div className="flex gap-5">
                        <div onClick={() => setAttachmentFormOpen(true)}>
                          <Image />
                        </div>
                        <Skrepka />
                      </div>
                      <Button isActive={handleCreateTask} type={'send'}>
                        Send
                      </Button>
                    </div>
                  </div>
                </article>

                <article className="mt-9 flex flex-col gap-2">
                  {data?.data.attachments && (
                    <AttachmentsList attachments={data?.data.attachments} />
                  )}

                  <CommentsList />
                </article>
              </>
            )}

            <div className="mt-[38px]">
              <Button type={'bluePrimary'}>Complete Task</Button>
            </div>
            {!isOpenComment && (
              <div className="mt-4">
                <Button isActive={() => setIsOpenComment(!isOpenComment)} type={'comment'}>
                  Comment <DoubleDown />
                </Button>
              </div>
            )}
          </section>

          {isEdit && (
            <Modal setActive={setItEdit}>
              <div className="rounded-lg bg-signUpWhite w-[228px] h-[130px] text-[17px] font-thin italic absolute top-16 right-16 pb-[22px] pt-[14px] px-4 flex flex-col justify-between cursor-pointer">
                <p>Add Member</p>
                <p>Edit Task</p>
                <p>Delete Task</p>
              </div>
            </Modal>
          )}

          {attachmentFormOpen && (
            <Modal setActive={setAttachmentFormOpen}>
              <div className="mt-4 mx-4">
                <input
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  type="file"
                  name="imageAttachment"
                  id="imageAttachment"
                />
              </div>
              <div className="px-6 mt-9 flex mb-4">
                <Button isActive={handleUploadImageAttachment} type={'primary'}>
                  Upload image
                </Button>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewTaskPage;
