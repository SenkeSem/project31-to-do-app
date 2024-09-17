import { useState } from 'react';
import WorkFooter from '../components/WorkFooter';
import ProjectItem from '../components/shared/ProjectItem';
import Button from '../components/shared/Button';
import ModalCreateProject from '../components/shared/ModalCreateProject';
import ChooseColor from '../components/shared/ChooseColor';
import TextArea from '../components/shared/TextArea';
import { useCreateProjectMutation } from '../redux/ToDoApi';

const ProjectsPage = () => {
  const colorArray = ['#6074F9', '#E42B6A', '#5ABB56', '#3D3A62', '#F4CA8F'];
  const [activeColor, setActiveColor] = useState(0);
  const [isOpenCreateMenu, setIsOpenCreateMenu] = useState(false);
  const [createProject] = useCreateProjectMutation();
  const [title, setTitle] = useState('');

  const handleCreateProject = async () => {
    try {
      let res = createProject({
        title: title,
        color: `${colorArray[activeColor]}`,
        owner_id: `${localStorage.getItem('user_id')}`,
      });
      console.log(res);

      setTitle('');
      setActiveColor(0);
    } catch (error) {
      console.log(error);
    }
  };

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
              <TextArea
                value={title}
                setValue={setTitle}
                type={'createProject'}
                placeholder={'My new awesome project...'}
                id={'newProject'}
                name={'newProject'}
              />
            </section>
            <section className="mt-8">
              <ChooseColor
                activeColor={activeColor}
                setColor={setActiveColor}
                colorArray={colorArray}
              />
            </section>
            <div className="mt-6">
              <Button isActive={() => handleCreateProject()} type={'primary'}>
                Create
              </Button>
            </div>
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
