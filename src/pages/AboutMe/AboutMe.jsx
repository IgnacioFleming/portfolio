import { textAboutMe } from "./textAboutMe";

function AboutMe() {
  return (
    <section id="aboutMe" className="flex justify-center bg-primary py-8 md:py-24">
      <div className="w-11/12 flex flex-col lg:flex-row">
        <div className="w-full lg:w-9/12 flex flex-col items-center">
          <h1 className="text-secondary w-full">ABOUT ME</h1>
          <div className="md:my-12 w-full lg:w-5/6">
            <div className="text-secondary">{textAboutMe}</div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 flex items-center lg:items-end justify-center">
          <img className="w-96 " src="/src/assets/images/programando.webp" alt="Picture of myself programming" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
