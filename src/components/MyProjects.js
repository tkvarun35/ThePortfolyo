import dynamic from "next/dynamic";

const ProjectIsotop = dynamic(() => import("./ProjectIsotop"), {
  ssr: false,
});

function MyProjects(data) {
  return (
    <section
      className="section section-bg section-parallax section-parallax-5"
      id="works-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2 className="m-title">My Projects</h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* Description */}
            <div className="text">
              <p>
                A Collection of my favorites project I’ve designed recently.
                Feeling great while sharing here.
              </p>
            </div>
          </div>
        </div>
        {/* Works */}
        <ProjectIsotop data={data.data.projects} />
      </div>
    </section>
  );
}

export default MyProjects;
