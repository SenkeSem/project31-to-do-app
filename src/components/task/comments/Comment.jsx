import { useState } from 'react';
import { useDeleteTaskCommentMutation } from '../../../redux/slices/tasksSliceApi';
import { toast } from 'react-toastify';
import { axiosInstance } from '../../../axios';

import RedTrash from '../../icons/RedTrash';
import Image from '../../icons/Image';
import MiniAvatar from '../MiniAvatar';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import CommentAttachment from '../CommentAttachment';

const Comment = ({ userName, userId, commentId, date, content, attachments }) => {
  const [attachmentFormOpen, setAttachmentFormOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [deleteComment] = useDeleteTaskCommentMutation();

  const handleDeleteComment = async () => {
    try {
      let res = await deleteComment(commentId);

      console.log(res);
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
    formData.append('comment_id', commentId);

    try {
      await axiosInstance.post(`comments-attachments`, formData, {
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

  let fullDate = new Date(date);
  let day = fullDate.getDate();
  let month = fullDate.getMonth();
  let year = fullDate.getFullYear();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();

  return (
    <div className="relative">
      <div className="h-[41px] mt-6 flex items-center gap-[11px] ">
        <div className="w-[32px] h-[32px] rounded-full">
          <MiniAvatar userId={userId} />
        </div>
        <div>
          <h4 className="text-lg italic font-thin">{userName}</h4>
          <p className="text-textGray text-sm font-medium">{`${day}/${month + 1}/${year} ${
            hours + 3
          }:${minutes}`}</p>
        </div>
      </div>
      <div className="mt-[9px] font-medium text-base text-homeLineBlack">
        <div className="flex flex-col gap-2">
          {attachments &&
            attachments.map((item) => <CommentAttachment key={item.id} attachmentId={item.id} />)}
        </div>
        <p>{content}</p>
      </div>

      <div className="absolute top-2 right-2">
        <div className="flex items-center gap-6">
          <div onClick={() => setAttachmentFormOpen(true)}>
            <Image />
          </div>
          <div onClick={() => handleDeleteComment(commentId)}>
            <RedTrash />
          </div>
        </div>
      </div>

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
  );
};

export default Comment;
