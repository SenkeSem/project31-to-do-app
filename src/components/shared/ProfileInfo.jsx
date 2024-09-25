import { useState } from 'react';
import { useFetchUserQuery, useUploadUserAvatarMutation } from '../../redux/slices/userSliceApi';
import { FormProvider, useForm } from 'react-hook-form';

import Chesterna from '../icons/Chesterna';
import ProfilePhoto from './ProfilePhoto';
import Modal from '../shared/Modal';
import Input from '../shared/Input';
import Button from './Button';

const ProfileInfo = ({ completed_tasks, created_tasks }) => {
  const methods = useForm({
    mode: 'onBlur',
  });

  // TODO: not a shared component
  const { data, isLoading } = useFetchUserQuery(localStorage.getItem('user_id'));
  const [uploadAvatar] = useUploadUserAvatarMutation();

  const [avatarFormOpen, setAvatarFormOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadUserAvatar = async () => {
    if (!selectedFile) {
      alert('please select a file');
      return;
    }

    let formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('user_id', localStorage.getItem('user_id'));

    try {
      let res = await uploadAvatar(formData);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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
      <div
        onClick={() => setAvatarFormOpen(true)}
        className="absolute top-3 right-3 cursor-pointer">
        <Chesterna />
      </div>

      {avatarFormOpen && (
        <Modal setActive={setAvatarFormOpen}>
          <FormProvider {...methods}>
            <div className="mt-4 mx-4">
              {/* <Input
                value={avatarFile}
                setValue={setAvatarFile}
                id={'file'}
                type={'file'}
                style={'uploadUserAvatar'}
                placeholder={'select a file'}
              /> */}
              <input onChange={handleChange} type="file" name="imageAvatar" id="imageAvatar" />
            </div>
            <div className="px-6 mt-9 flex mb-4">
              <Button isActive={handleUploadUserAvatar} type={'primary'}>
                Update avatar
              </Button>
            </div>
          </FormProvider>
        </Modal>
      )}
    </div>
  );
};

export default ProfileInfo;
