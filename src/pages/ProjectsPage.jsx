import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useCreateProjectMutation,
  useFetchAllUserProjectsQuery,
} from '../redux/slices/projectsSliceApi';

import WorkFooter from '../components/layout/WorkFooter';
import ProjectItem from '../components/project/ProjectItem';
import Button from '../components/shared/Button';
import ModalCreateProject from '../components/shared/ModalCreateProject';
import ChooseColor from '../components/shared/ChooseColor';
import TextArea from '../components/shared/TextArea';

const ProjectsPage = () => {
  const colorArray = ['#6074F9', '#E42B6A', '#5ABB56', '#3D3A62', '#F4CA8F'];
  const [activeColor, setActiveColor] = useState(0);
  const [isOpenCreateMenu, setIsOpenCreateMenu] = useState(false);
  const [title, setTitle] = useState('');

  const [createProject] = useCreateProjectMutation();
  const { data, isSuccess } = useFetchAllUserProjectsQuery(localStorage.getItem('user_id'));

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
    <div className="h-full flex flex-col bg-backColorMenu">
      <header className="w-full h-20 flex items-end justify-center pb-3  italic font-thin text-xl bg-signUpWhite">
        Projects
      </header>
      <main className="px-4 w-full h-full">
        <div className="w-full grid grid-rows-2 grid-cols-2 gap-x-3 gap-y-6">
          {isSuccess &&
            data.data.map((item) => (
              <Link key={item.id} to={`/projects/${item.id}`}>
                <ProjectItem projectId={item.id} title={item.title} color={item.color} />
              </Link>
            ))}
        </div>
        <div className="mb-20">
          <Button isActive={() => setIsOpenCreateMenu(!isOpenCreateMenu)} type={'bigBlue'}>
            +
          </Button>
        </div>

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
