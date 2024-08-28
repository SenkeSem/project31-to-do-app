import Chesterna from '../icons/Chesterna';

const ProfileInfo = () => {
  return (
    <div className="relative rounded-lg shadow-md shadow-signUpGray">
      <section className="mt-6 ml-6 flex items-center gap-3">
        <img src="/public/profilePhoto.png" alt="profilePhoto" />
        <div>
          <h5 className="text-lg italic font-thin">Stephen Chow</h5>
          <p className="text-base font-medium text-textGray">pangcheo1210@gmail.com</p>
        </div>
      </section>
      <section className="flex gap-12 mt-8 ml-7 mb-8">
        <div>
          <h5 className="text-lg italic font-thin">120</h5>
          <p className="text-base font-medium text-textGray">Created Tasks</p>
        </div>
        <div>
          <h5 className="text-lg italic font-thin">80</h5>
          <p className="text-base font-medium text-textGray">Completed Tasks</p>
        </div>
      </section>
      <div className="absolute top-3 right-3 cursor-pointer">
        <Chesterna />
      </div>
    </div>
  );
};

export default ProfileInfo;
