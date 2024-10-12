import { useState } from 'react';
import { useDownloadCommentAttachmentQuery } from '../../redux/slices/tasksSliceApi';

const CommentAttachment = ({ attachmentId }) => {
  const { data, isSuccess } = useDownloadCommentAttachmentQuery(attachmentId);

  const [imgUrl, setImgUrl] = useState('');

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
  return <img src={imgUrl} className="rounded-md" alt="attachmentImage" />;
};

export default CommentAttachment;
