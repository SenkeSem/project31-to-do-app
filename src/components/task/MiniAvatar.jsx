import { useState } from 'react';
import { useDownloadUserAvatarQuery } from '../../redux/slices/userSliceApi';

const MiniAvatar = ({ userId }) => {
  const { data, isSuccess } = useDownloadUserAvatarQuery(userId);
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
    <img
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full h-full rounded-full"
    />
  );
};

export default MiniAvatar;
