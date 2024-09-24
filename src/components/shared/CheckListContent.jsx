import { useState } from 'react';
import { useCreateChecklistMutation } from '../../redux/slices/checklistsSliceApi.js';

import Button from '../shared/Button';
import ChooseColor from './ChooseColor';
import TextArea from './TextArea';

const CheckListContent = () => {
  // TODO: it's not a shared component
  const colorArray = ['#6074F9', '#E42B6A', '#5ABB56', '#3D3A62', '#F4CA8F'];
  const [title, setTitle] = useState('');
  const [newItemText, setNewItemText] = useState('');
  const [items, setItems] = useState([]);
  const [activeColor, setActiveColor] = useState(0);

  const [createCheckList] = useCreateChecklistMutation();

  const handleCreateCheckList = async () => {
    try {
      let res = await createCheckList({
        title: title,
        color: colorArray[activeColor],
        owner_id: localStorage.getItem('user_id'),
        items: items,
      });

      console.log(res);

      setTitle('');
      setItems([]);
      setActiveColor(0);
      setNewItemText('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="w-full h-screen px-4">
      <div className="h-auto relative -top-10 bg-signUpWhite shadow-2xl pt-6 pl-6 pr-6 rounded-lg pb-12">
        <section>
          <h4 className="text-lg italic font-thin">Title</h4>
          <TextArea
            value={title}
            setValue={setTitle}
            type={'checkListPage'}
            name={'newNote'}
            placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            id={'newNote'}
          />

          <div>
            <input
              className="border-2 rounded mr-2 pl-2"
              value={newItemText}
              onChange={(e) => setNewItemText(e.target.value)}
              type="text"
            />
            <Button
              isActive={() =>
                setItems([
                  ...items,
                  {
                    content: newItemText,
                    is_completed: false,
                  },
                ])
              }
              type={'addedItem'}>
              + Add new item
            </Button>
          </div>

          {items.map((item, id) => (
            <article key={id} className="flex gap-3 mt-4">
              <div className="w-5 h-5 bg-veryLightGray rounded border-textMenuGray border-2"></div>
              <p className="font-medium text-base">{item.content}</p>
            </article>
          ))}
        </section>
        <section className="mt-8">
          <ChooseColor
            colorArray={colorArray}
            activeColor={activeColor}
            setColor={setActiveColor}
          />
        </section>
        <div className="mt-6">
          <Button isActive={() => handleCreateCheckList()} type={'primary'}>
            Done
          </Button>
        </div>
      </div>
    </main>
  );
};

export default CheckListContent;
