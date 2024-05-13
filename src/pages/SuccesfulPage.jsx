import SuccesfulLogo from '../components/icons/SuccesfulLogo.jsx';

const SuccesfulPage = () => {
  return (
    <div className="pt-40 px-5">
      <div className="w-full flex flex-col justify-center items-center">
        <SuccesfulLogo />
        <h1 className="text-center mt-10 text-3xl italic font-thin">Succesful!</h1>
        <p className="text-center mt-3 font-medium text-base">
          You have succesfully change password. Please use your new passwords when logging in.
        </p>
      </div>
    </div>
  );
};

export default SuccesfulPage;
