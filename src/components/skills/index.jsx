export default function Skills() {
  return (
    <div id="skills" className="bg-black justify-center items-center w-screen h-screen pt-26">
      <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 m-auto rounded-lg"></div>
      <div className="m-8">
        <h1 className="text-white">Skills</h1>
      </div>
      <div className=" grid grid-cols-3 flex flex-row gap-6  ml-24 mr-24">
        <section className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-30 h-30 ">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]"></div>

            {/* Black Inner Circle */}
            <div className="absolute inset-[6px] bg-black rounded-full text-white font-bold text-4xl flex justify-center items-center">80%</div>
          </div>
          <span className="text-white text-2xl ">Java Full Stack</span>
        </section>
        <section className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-30 h-30 ">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]"></div>

            {/* Black Inner Circle */}
            <div className="absolute inset-[6px] bg-black rounded-full text-white font-bold text-4xl flex justify-center items-center">75%</div>
          </div>
          <span className="text-white text-2xl ">AWS Cloud</span>
        </section>
        <section className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-30 h-30 ">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]"></div>

            {/* Black Inner Circle */}
            <div className="absolute inset-[6px] bg-black rounded-full text-white font-bold text-4xl flex justify-center items-center">95%</div>
          </div>
          <span className="text-white text-2xl ">HTML/TailwindCSS</span>
        </section>
        <section className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-30 h-30 ">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]"></div>

            {/* Black Inner Circle */}
            <div className="absolute inset-[6px] bg-black rounded-full text-white font-bold text-4xl flex justify-center items-center">90%</div>
          </div>
          <span className="text-white text-2xl ">Javascript</span>
        </section>
        <section className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-30 h-30 ">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]"></div>

            {/* Black Inner Circle */}
            <div className="absolute inset-[6px] bg-black rounded-full text-white font-bold text-4xl flex justify-center items-center">85%</div>
          </div>
          <span className="text-white text-2xl ">MERN</span>
        </section>
        <section className="flex flex-col justify-center items-center gap-2">
          <div className="relative w-30 h-30 ">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]"></div>

            {/* Black Inner Circle */}
            <div className="absolute inset-[6px] bg-black rounded-full text-white font-bold text-4xl flex justify-center items-center">70%</div>
          </div>
          <span className="text-white text-2xl ">Python</span>
        </section>
      </div>
    </div>
  );
}
