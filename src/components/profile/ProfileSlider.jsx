const ProfileSlider = () => {
  return (
    <section className="w-full h-24 flex gap-3 overflow-hidden">
      <article className="bg-btnRed w-40 h-24 pt-6 pl-6 rounded-lg shrink-0">
        <h5 className="text-lg italic font-thin text-signUpWhite">Events</h5>
        <p className="text-sm font-medium text-signUpWhite">12 Tasks</p>
      </article>
      <article className="bg-todoBlue w-40 h-24 pt-6 pl-6 rounded-lg shrink-0">
        <h5 className="text-lg italic font-thin text-signUpWhite">To do Task</h5>
        <p className="text-sm font-medium text-signUpWhite">12 Tasks</p>
      </article>
      <article className="bg-sliderPurple w-40 h-24 rounded-lg pt-6 pl-6 shrink-0">
        <h5 className="text-lg italic font-thin text-signUpWhite">Quick Notes</h5>
        <p className="text-sm font-medium text-signUpWhite">12 Tasks</p>
      </article>
    </section>
  );
};

export default ProfileSlider;
