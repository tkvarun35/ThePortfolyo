function AboutMe(data) {
  return (
    <section
      className="section section-bg section-parallax section-parallax-1"
      id="about-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2 className="m-title">About Me</h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
            {/* Section numbers */}
            <div className="numbers-items">
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="far fa-check-circle" />
                </div>
                <div className="num">{data.data.projects.length}</div>
                <div className="title">
                  Completed <br />
                  Project
                </div>
              </div>
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="far fa-smile-beam" />
                </div>
                <div className="num">{data.data.testimonials.length}</div>
                <div className="title">
                  Happy <br />
                  Clients
                </div>
              </div>
              <div className="numbers-item">
                <div className="icon">
                  <i aria-hidden="true" className="far fa-gem" />
                </div>
                <div className="num">18</div>
                <div className="title">
                  Awards <br />
                  Won
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* Section Profile */}
            <div className="profile-box">
              <div className="text">
                {data.data.about.description}
                {data.data.about.signature && (
                  <div className="signature">
                    <img src={data.data.about.signature.url} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
