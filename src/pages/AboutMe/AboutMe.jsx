import { textAboutMe } from "./textAboutMe";

function AboutMe() {
  return (
    <section>
      <h2 className="text-center m-12">About Me</h2>
      <div className="flex justify-center">
        <div className="w-3/4">{textAboutMe}</div>
      </div>
    </section>
  );
}

export default AboutMe;
