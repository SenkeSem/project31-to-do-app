import { useState } from 'react';
import { useCreateNoteMutation } from '../../redux/slices/notesSliceApi';
import { toast } from 'react-toastify';

import ChooseColor from '../shared/ChooseColor';
import Button from '../shared/Button';
import TextArea from '../shared/TextArea';

const NotePageContent = () => {
  const [description, setDescription] = useState('');
  const colorArray = ['#6074F9', '#E42B6A', '#5ABB56', '#3D3A62', '#F4CA8F'];
  const [activeColor, setActiveColor] = useState(0);

  const [createNote] = useCreateNoteMutation();

  const handleCreateNote = async () => {
    try {
      let res = await createNote({
        description: description,
        color: `${colorArray[activeColor]}`,
        owner_id: `${localStorage.getItem('user_id')}`,
      });

      console.log(res);

      setDescription('');
      setActiveColor(0);
      toast.success('Note is created!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: 'light',
      });
    } catch (error) {
      console.log(error);
      toast.error('The note has not been created!', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light',
      });
    }
  };

  return (
    <main className="w-full h-screen px-4">
      <div className="h-auto relative -top-10 bg-signUpWhite shadow-2xl pt-6 pl-6 pr-6 rounded-lg pb-12">
        <section>
          <h4 className="text-lg italic font-thin">Description</h4>
          <TextArea
            value={description}
            setValue={setDescription}
            type={'notePage'}
            placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            id={'newNote'}
            name={'newNote'}
          />
        </section>
        <section className="mt-8">
          <ChooseColor
            colorArray={colorArray}
            activeColor={activeColor}
            setColor={setActiveColor}
          />
        </section>
        <div className="mt-6">
          <Button isActive={() => handleCreateNote()} type={'primary'}>
            Done
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotePageContent;
