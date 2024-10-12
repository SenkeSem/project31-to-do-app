const HeadingStartPages = ({ head, text }) => {
  return (
    <>
      <h1 className="mt-16 text-3xl italic font-thin">{head}</h1>
      <p className="mt-3 text-base font-medium text-signUpGray">{text}</p>
    </>
  );
};

export default HeadingStartPages;
