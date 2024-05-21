export const AboutMe = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-10 md:gap-[80px]">
      <div className="flex items-center w-full md:w-1/2 m-auto">
        <div className="flex w-[360px] h-[380px] md:w-[440px] md:h-[520px] m-auto justify-center relative">
          <img
            className="w-[280px] h-[360px] md:w-[400px] md:h-[480px] z-10 absolute md:top-0 md:left-[40px]"
            style={{
              border: `8px solid ${props.pagemode > 0 ? "black" : "white"}`,
              zIndex: "1",
            }}
            src="https://scontent.fuln8-1.fna.fbcdn.net/v/t1.18169-9/15589483_1396679207031542_701091216194784800_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QNxTSqi9JLkQ7kNvgFfbuAN&_nc_ht=scontent.fuln8-1.fna&oh=00_AYCGLJKhgAGLF1HvsPDhS2hRMLCPXtthqeXtOE6WnO0OwQ&oe=667377F4"
          />
          <div
            className="w-[320px] h-[360px] md:w-[400px] md:h-[480px] bg-slate-200 absolute top-6 md:top-[40px] md:left-0"
            style={{
              border: `8px solid ${props.pagemode > 0 ? "black" : "white"}`,
              backgroundColor: `${props.pagemode > 0 ? "#374151" : "#E5E7EB"}`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full md:w-1/2 text-[16px] text-justify">
        <h2 className="text-[30px]">Curios about me? Here you have it:</h2>
        <p>
          I&apos;m very enthusiastic about bringing the technical and visual
          aspects of digital product to life. User experience, pixel perfect
          design, and writing clear, readable, highly performant code matters to
          me.
        </p>
        <p>
          I am starting my journey as a web developer from 2024, taking on new
          challenges and learning the latest technologies along the way.
        </p>
        <p>
          I am very much a progressive thinker and enjoy working on products end
          to end, from ideation all the way to development.
        </p>
      </div>
    </div>
  );
};
