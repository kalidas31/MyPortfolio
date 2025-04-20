export default function Skills() {
  const skills = [
    { name: "Java Full Stack", Percentaage: "80%" },
    { name: "AWS Cloud", Percentaage: "75%" },
    { name: "HTML/TailwindCSS", Percentaage: "95%" },
    { name: "JavaScript", Percentaage: "90%" },
    { name: "MERN", Percentaage: "85%" },
    { name: "Python", Percentaage: "70%" },
  ];

  return (
    <div
      id="skills"
      className="bg-black flex flex-col items-center justify-center w-full min-h-screen pt-25 px-4 py-10"
    >
      {/* Gradient Line */}
      <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg mb-4"></div>

      {/* Heading */}
      <h1 className="text-white text-3xl mb-10">Skills</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {skills.map((item, index) => (
          <section
            key={index}
            className="flex flex-col justify-center items-center gap-4"
          >
            {/* Gradient Circle with Percentage */}
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 p-[2px]"></div>
              <div className="absolute inset-[6px] bg-black rounded-full text-white font-bold text-2xl flex justify-center items-center">
                {item.Percentaage}
              </div>
            </div>

            {/* Skill Name */}
            <span className="text-white text-xl text-center">{item.name}</span>
          </section>
        ))}
      </div>
    </div>
  );
}
