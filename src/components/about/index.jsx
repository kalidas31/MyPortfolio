import aboutpic from "../../assets/mypic3.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="bg-black flex flex-col  justify-center items-center w-screen h-screen pt-16"
    >
      <div class="w-48 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg"></div>
      <div className="m-4">
        <h1 className="text-white">About</h1>
      </div>
      <div>
        <p className="mr-20 ml-20 mt-2 text-white">
          A highly motivated and detail-oriented B.Tech graduate with a strong
          foundation in software development, AWS Cloud. Passionate about
          leveraging my technical skills and problem-solving abilities to
          contribute effectively to a dynamic team. Eager to learn and adapt in
          a fast-paced environment while driving innovation and efficiency.
        </p>
      </div>
      <div className="flex items-center justify-center ml-28 mr-28  mt-10">
        <section className="w-64 h-64 ">
          <img src={aboutpic} alt="" className="rounded-[25px]" />
        </section>
        <section className="flex flex-col  ml-8 mr-8 gap-8">
          <section className="flex flex-col text-left">
            <span className=" text-2xl m-auto ml-0 font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Software and Web Developer
            </span>
          </section>
          <section className="flex justify-between text-white ">
            <div>
              <ul className="text-left space-y-2">
                <li className="m-4 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                  <span className="font-bold">Birthday : </span>28 october 2003
                </li>
                <li className="m-4 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                  <span className="font-bold">Phone : </span>+91 9110344854
                </li>
                <li className="m-4 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                  <span className="font-bold">City : </span>Vizianagaram, Andhra
                  Pradesh, India
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-left mr-12">
                <li className="m-4 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                  <span className="font-bold">Age : </span>21
                </li>
                <li className="m-4 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                  <span className="font-bold">Degree : </span>B.Tech
                </li>
                <li className="m-4 relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-gray-600">
                  <span className="font-bold">Email : </span>
                  kalichipurupalli@gmail.com
                </li>
              </ul>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
