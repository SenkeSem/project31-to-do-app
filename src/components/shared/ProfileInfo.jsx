import { useFetchUserQuery } from '../../redux/slices/userSliceApi';
import Chesterna from '../icons/Chesterna';
import ProfilePhoto from './ProfilePhoto';

const ProfileInfo = ({ completed_tasks, created_tasks }) => {
  // TODO: not a shared component
  const { data, isLoading } = useFetchUserQuery(localStorage.getItem('user_id'));

  return (
    <div className="relative rounded-lg shadow-md shadow-signUpGray">
      <section className="mt-6 ml-6 flex items-center gap-3">
        <ProfilePhoto />
        <div>
          <h5 className="text-lg italic font-thin">
            {isLoading ? 'username' : data.data.username}
          </h5>
          <p className="text-base font-medium text-textGray">
            {isLoading ? 'username' : data.data.email}
          </p>
        </div>
      </section>
      <section className="flex gap-12 mt-8 ml-7 mb-8">
        <div>
          <h5 className="text-lg italic font-thin">{created_tasks}</h5>
          <p className="text-base font-medium text-textGray">Created Tasks</p>
        </div>
        <div>
          <h5 className="text-lg italic font-thin">{completed_tasks}</h5>
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
