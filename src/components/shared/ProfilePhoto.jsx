import { useState } from 'react';
import { useDownloadUserAvatarQuery } from '../../redux/slices/userSliceApi';

const ProfilePhoto = () => {
  const { data, isSuccess } = useDownloadUserAvatarQuery(localStorage.getItem('user_id'));

  const [imgUrl, setImgUrl] = useState('');

  if (isSuccess) {
    let reader = new FileReader();
    reader.readAsDataURL(data);

    reader.onload = function () {
      console.log(reader.result);
      setImgUrl(reader.result);
    };

    reader.onerror = function () {
      console.log(reader.error);
    };
  }

  return (
    <>
      {imgUrl.length === 0 ? (
        <svg className="w-[64px] h-[64px]" id="Layer_1" version="1.1" viewBox="0 0 128 128">
          <g>
            <path d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49   s11.7-26,26-26S90,34.7,90,49z" />
            <path d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z" />
          </g>
        </svg>
      ) : (
        <div
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-[64px] h-[64px] rounded-full"></div>
      )}
    </>
  );
};

export default ProfilePhoto;
