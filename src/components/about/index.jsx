import aboutpic from "../../assets/mypic3.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="bg-black flex flex-col justify-center items-center w-full min-h-screen pt-25 px-4 py-10"
    >
      {/* Gradient line */}
      <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg mb-4"></div>

      {/* Heading */}
      <h1 className="text-white text-3xl mb-6">About</h1>

      {/* Paragraph */}
      <p className="text-white text-center max-w-4xl mb-10">
        A highly motivated and detail-oriented B.Tech graduate with a strong
        foundation in software development and AWS Cloud. Passionate about
        leveraging my technical skills and problem-solving abilities to
        contribute effectively to a dynamic team. Eager to learn and adapt in
        a fast-paced environment while driving innovation and efficiency.
      </p>

      {/* Image and Details */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl">
        {/* Profile Image */}
        <div className="w-64 h-64">
          <img src={aboutpic} alt="About" className="rounded-[25px] w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-6 w-full md:w-2/3">
          {/* Title */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-center md:text-left">
            Software and Web Developer
          </h2>

          {/* Personal Info */}
          <div className="flex flex-col sm:flex-row justify-between text-white gap-6">
            {/* Left Column */}
            <ul className="space-y-2 text-left">
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                <span className="font-bold">Birthday: </span>28 October 2003
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                <span className="font-bold">Phone: </span>+91 9110344854
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                <span className="font-bold">City: </span>Vizianagaram, Andhra Pradesh, India
              </li>
            </ul>

            {/* Right Column */}
            <ul className="space-y-2 text-left">
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                <span className="font-bold">Age: </span>21
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                <span className="font-bold">Degree: </span>B.Tech
              </li>
              <li className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                <span className="font-bold">Email: </span>kalichipurupalli@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
