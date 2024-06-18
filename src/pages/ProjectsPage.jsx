import WorkFooter from '../components/WorkFooter';
import ProjectItem from '../components/shared/ProjectItem';
import Button from '../components/shared/Button';
import ModalCreateProject from '../components/shared/ModalCreateProject';

import { useState } from 'react';
import ChooseColor from '../components/shared/ChooseColor';

const ProjectsPage = () => {
  const [isOpenCreateMenu, setIsOpenCreateMenu] = useState(false);

  return (
    <div className="flex flex-col bg-backColorMenu">
      <header className="w-full h-20 flex items-end justify-center pb-3  italic font-thin text-xl bg-signUpWhite">
        Projects
      </header>
      <main className="px-4 w-full h-screen">
        <div className="w-full grid grid-rows-2 grid-cols-2 gap-x-3 gap-y-6">
          <ProjectItem title={'Personal'} tasks={10} color={'blue'} />
          <ProjectItem title={'Teamworks'} tasks={4} color={'red'} />
          <ProjectItem title={'Home'} tasks={7} color={'green'} />
          <ProjectItem title={'Meet'} tasks={2} color={'purple'} />
        </div>
        <Button isActive={() => setIsOpenCreateMenu(!isOpenCreateMenu)} type={'bigBlue'}>
          +
        </Button>

        {isOpenCreateMenu && (
          <ModalCreateProject setActive={setIsOpenCreateMenu}>
            <section>
              <p className="italic font-thin text-xl">Title</p>
              <textarea
                className="w-full resize-none font-medium text-base text-homeLineBlack"
                placeholder="My new awesome project..."
                name="createProject"
                id="createProject"></textarea>
            </section>
            <section className="mt-8">
              <ChooseColor />
            </section>
          </ModalCreateProject>
        )}
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
    </div>
  );
};

export default ProjectsPage;
