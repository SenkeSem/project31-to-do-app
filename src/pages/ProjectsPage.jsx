import WorkFooter from '../components/WorkFooter';
import ProjectItem from '../components/shared/ProjectItem';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col bg-backColorMenu">
      <header className="w-full h-24 flex items-end justify-center pb-3  italic font-thin text-xl bg-signUpWhite">
        Projects
      </header>
      <main className="px-4 w-full h-screen">
        <div className="flex flex-rows flex-wrap gap-3">
          <ProjectItem title={'Personal'} tasks={10} color={'todoBlue'} />
          <ProjectItem title={'Teamworks'} tasks={4} color={'projectRed'} />
          <ProjectItem title={'Home'} tasks={7} color={'projectGreen'} />
          <ProjectItem title={'Meet'} tasks={2} color={'projectPurple'} />
        </div>
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default ProjectsPage;
