import { useDownloadTaskAttachmentQuery } from '../../redux/slices/tasksSliceApi';
import { useState } from 'react';

const Attachment = ({ attachmentId }) => {
  const { data, isSuccess } = useDownloadTaskAttachmentQuery(attachmentId);

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
  return (
    <div>
      <img
        src={imgUrl}
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="rounded-md"
        alt="attachmentImage"
      />
    </div>
  );
};

export default Attachment;
