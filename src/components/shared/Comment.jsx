const Comment = ({ name, daysAgo, children }) => {
  return (
    <div>
      <div className="h-[41px] mt-6 flex items-center gap-[11px]">
        <img width={32} height={32} src="/public/profilePhoto.png" alt="profilePhoto" />
        <div>
          <h4 className="text-lg italic font-thin">{name}</h4>
          <p className="text-textGray text-sm font-medium">{daysAgo} days ago</p>
        </div>
      </div>
      <div className="mt-[9px] font-medium text-base text-homeLineBlack">{children}</div>
    </div>
  );
};

export default Comment;
