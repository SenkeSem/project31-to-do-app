import { useNavigate } from 'react-router-dom';
import { useSignOutMutation } from '../redux/slices/authSliceApi';
import { useFetchUserStatisticsQuery } from '../redux/slices/userSliceApi';
import { toast } from 'react-toastify';

import WorkFooter from '../components/layout/WorkFooter';
import Exit from '../components/icons/Exit';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileSlider from '../components/profile/ProfileSlider';
import ProfileStatistic from '../components/profile/ProfileStatistic';

const ProfilePage = () => {
  const navigation = useNavigate();

  const [signOut] = useSignOutMutation();
  const { data, isLoading } = useFetchUserStatisticsQuery(localStorage.getItem('user_id'));

  const statistics = {
    completed_tasks: 0,
    created_tasks: 0,
    events: '0%',
    quick_notes: '0%',
    todo: '0%',
  };

  if (!isLoading) {
    statistics.completed_tasks = data.data.completed_tasks;
    statistics.created_tasks = data.data.created_tasks;
    statistics.events = data.data.events;
    statistics.quick_notes = data.data.quick_notes;
    statistics.todo = data.data.todo;
  }

  const handleSignOut = async () => {
    try {
      let res = await signOut({
        email: `${localStorage.getItem('email')}`,
      });

      localStorage.clear();
      console.log(res);
      toast.success('You have logged out of your account!', {
        position: 'top-right',
        autoClose: 1500,
        theme: 'light',
      });

      setTimeout(() => navigation('/login'), 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-backColorMenu">
      <header className="w-full h-20 flex items-end justify-center pb-3 mb-4 italic font-thin text-xl bg-signUpWhite">
        Profile
        <button onClick={handleSignOut}>
          <Exit />
        </button>
      </header>
      <main className="w-full h-screen px-4 flex flex-col gap-4">
        <ProfileInfo
          completed_tasks={statistics.completed_tasks}
          created_tasks={statistics.created_tasks}
        />
        <ProfileSlider />
        <ProfileStatistic
          events={statistics.events}
          quick_notes={statistics.quick_notes}
          todo={statistics.todo}
        />
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default ProfilePage;
