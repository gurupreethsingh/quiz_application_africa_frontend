import student5 from "../assets/student5.jpg";
import student4 from "../assets/student4.jpg";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8  flex-wrap pb-20">
        <div className=" md:w-2/5">
          <img src={student5} alt="" className="rounded" />
        </div>

        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-gray mb-5 leading-normal">
            We have been improving our products <span>for many years.</span>
          </h2>
          <p className="text-gray text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ex dolor accusantium, dolorum assumenda fuga nostrum, dicta, rem
            laboriosam dignissimos voluptas animi minima! Qui consequuntur nihil
            ipsum ullam excepturi optio?
          </p>

          <button
            className="btn text-white"
            style={{ backgroundColor: "#004d76" }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8  flex-wrap mt-10 mb-10">
        <div className=" md:w-2/5">
          <img src={student4} alt="" className="rounded" />
        </div>

        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-gray mb-5 leading-normal">
            You can practice at any <span>time Convenient for you.</span>
          </h2>
          <p className="text-gray text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            ex dolor accusantium, dolorum assumenda fuga nostrum, dicta, rem
            laboriosam dignissimos voluptas animi minima! Qui consequuntur nihil
            ipsum ullam excepturi optio?
          </p>

          <button
            className="btn text-white"
            style={{ backgroundColor: "#004d76" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
