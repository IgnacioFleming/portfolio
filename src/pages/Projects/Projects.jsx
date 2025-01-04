import Card from "../../components/Card/Card";

function Projects() {
  const renderFooter = (project) => {
    return (
      <>
        <div>{project.frontEndRepositoryPath}</div>
        <div>{project.backEndRepositoryPath}</div>
        <Button label="Visit Deploy" className="text-white" />
      </>
    );
  };
  return (
    <section>
      <h1 className="text-center">Projects</h1>
      <Card footer={footer} />
    </section>
  );
}

export default Projects;
