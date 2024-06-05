import WorkFooter from '../components/WorkFooter';
import ProfileInfo from '../components/shared/ProfileInfo';
import ProfileSlider from '../components/shared/ProfileSlider';
import ProfileStatistic from '../components/shared/ProfileStatistic';

const ProfilePage = () => {
  return (
    <div className="flex flex-col bg-backColorMenu">
      <header className="w-full h-20 flex items-end justify-center pb-3 mb-4 italic font-thin text-xl bg-signUpWhite">
        Profile
      </header>
      <main className="w-full h-screen px-4 flex flex-col gap-4">
        <ProfileInfo />
        <ProfileSlider />
        <ProfileStatistic />
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default ProfilePage;
