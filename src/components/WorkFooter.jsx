const WorkFooter = () => {
  return (
    <div className="w-full h-24 bg-workMenuDarkBlue">
      <nav>
        <ul className="flex justify-between p-4 text-signUpWhite">
          <li className="h-11 flex flex-col items-center justify-between cursor-pointer">
            <img width={24} src="/public/myTask.svg" alt="myTask" />
            <p className="text-xs italic font-thin">My Task</p>
          </li>
          <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
            <img width={24} src="/public/menu.svg" alt="menu" />
            <p className="text-xs italic font-thin">Menu</p>
          </li>
          <li>
            <img
              className="relative -top-7 cursor-pointer"
              src="/public/bigPlus.svg"
              alt="bigPlus"
            />
          </li>
          <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
            <img width={19} src="/public/quick.svg" alt="quick" />
            <p className="text-xs italic font-thin">Quick</p>
          </li>
          <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
            <img width={19} src="/public/profile.svg" alt="profile" />
            <p className="text-xs italic font-thin">Profile</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WorkFooter;
