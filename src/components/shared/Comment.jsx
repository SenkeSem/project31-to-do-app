import { useState } from 'react';
import { useDownloadUserAvatarQuery } from '../../redux/slices/userSliceApi';

const Comment = ({ userName, userId, daysAgo, children }) => {
  // TODO: instead of daysAgo use daysInfo="4 march days ago"

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
    <div>
      <div className="h-[41px] mt-6 flex items-center gap-[11px]">
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
          <p className="text-textGray text-sm font-medium">{daysAgo} days ago</p>
        </div>
      </div>
      <div className="mt-[9px] font-medium text-base text-homeLineBlack">{children}</div>
    </div>
  );
};

export default Comment;
