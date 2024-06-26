export const Pageone = (props) => {
  return (
    <div className="my-5 md:flex gap-[80px]">
      <div className="flex items-center md:w-3/10">
        <div className="flex w-[240px] h-[280px] md:w-[280px] md:h-[320px] m-auto justify-center relative">
          <img
            className="w-full h-full z-10 absolute md:bot-[40px] md:right-[40px]"
            style={{
              border: `8px solid ${props.pagemode > 0 ? "black" : "white"}`,
              zIndex: "1",
            }}
            src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.6435-9/43503973_2251806764852111_8011108287674056704_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=G2wvNPP84MsQ7kNvgGfAzev&_nc_ht=scontent.fuln8-1.fna&oh=00_AYDd7JGmTkP_FN5pg_Rm4B_GHjxJLOAUMRgL9cUbRzeH8g&oe=66736D70"
          />
          <div
            className="w-[280px] h-[280px] md:w-[280px] md:h-[320px] bg-slate-200 absolute top-6 md:bot-0 md:right-0"
            style={{
              border: `8px solid ${props.pagemode > 0 ? "black" : "white"}`,
              backgroundColor: `${props.pagemode > 0 ? "#374151" : "#E5E7EB"}`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex-col w-full justify-center    md:w-7/10 md:order-first">
        <div className="justify-center text-justify">
          <h2 className="text-4xl font-bold my-10">Hi, I&apos;m Anuujin</h2>
          <p>
            I&apos;m a full stack MERN developer with focus on
            creating (and occasionally designing) exceptional digital
            experiences that are, fast acessible, visually appealing, and
            responsive, web applications for
            last 9 month          
            </p>
        </div>
        <div className="my-5">
          <div className="flex my-3">
            <img
              className={props.pagemode > 0 ? "invert" : ""}
              src="/location-21.svg"
              width={16}
              height={16}
            />
            <p>Ulaanbaatar, Mongolia</p>
          </div>
          <div className="flex my-3">
            <img src="/online-13.svg" width={16} height={16} />
            <p>Available for new projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};
