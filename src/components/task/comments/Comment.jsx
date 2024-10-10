import { useState } from 'react';
import { useDownloadUserAvatarQuery } from '../../../redux/slices/userSliceApi';
import { useDeleteTaskCommentMutation } from '../../../redux/slices/tasksSliceApi';

import RedTrash from '../../icons/RedTrash';

const Comment = ({ userName, userId, commentId, date, children }) => {
  const { data, isSuccess } = useDownloadUserAvatarQuery(userId);
  const [deleteComment] = useDeleteTaskCommentMutation();

  const [imgUrl, setImgUrl] = useState('');

  const handleDeleteComment = async () => {
    try {
      let res = await deleteComment(commentId);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  if (isSuccess) {
    let reader = new FileReader();
    reader.readAsDataURL(data);

    reader.onload = function () {
      setImgUrl(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  let fullDate = new Date(date);
  let day = fullDate.getDate();
  let month = fullDate.getMonth();
  let year = fullDate.getFullYear();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();

  return (
    <div className="relative">
      <div className="h-[41px] mt-6 flex items-center gap-[11px] ">
        <img
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[32px] h-[32px] rounded-full"
        />
        <div>
          <h4 className="text-lg italic font-thin">{userName}</h4>
          <p className="text-textGray text-sm font-medium">{`${day}/${month + 1}/${year} ${
            hours + 3
          }:${minutes}`}</p>
        </div>
      </div>
      <div className="mt-[9px] font-medium text-base text-homeLineBlack">{children}</div>
      <div onClick={() => handleDeleteComment(commentId)} className="absolute top-2 right-2">
        <RedTrash />
      </div>
    </div>
  );
};

export default Comment;
