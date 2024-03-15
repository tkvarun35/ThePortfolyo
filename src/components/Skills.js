import Image from "next/image";

function Skills(data) {
  return (
    <section
      className="section section-parallax section-parallax-2"
      id="resume-section"
    >
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2 className="m-title">My Resume</h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* Description */}
            <div className="text">
              <p>{data.data.about.description}</p>
            </div>
            {/* Skills */}
            <div className="skills-items">
              <div className="p-title">SKILLS</div>
              {data.data.skills
                .sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
                .map((e) => {
                  return e.enabled ? (
                    <div className="skills-item" key={e._id}>
                      <div className="name">{e.name}</div>
                      <div
                        className={`dots dots-${Math.floor(
                          e.percentage / 10
                        )}0`}
                      >
                        <div className="dots-row">
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                        </div>
                      </div>
                      <div className="value">
                        <span className="num">{e.percentage}%</span>
                      </div>
                    </div>
                  ) : (
                    <></>
                  );
                })}
            </div>
            {/* Services */}
            <div className="p-title">SERVICES</div>
            <div className="services-items">
              {data.data.services.map((e) => {
                return e.enabled ? (
                  <div className="services-col" key={e._id}>
                    {" "}
                    <div className="services-item">
                      <div className="icon">
                        <Image
                          src={e.image.url}
                          width={200}
                          height={200}
                          alt="icon of the service"
                        />
                      </div>
                      <div className="title">{e.name}</div>
                      <div className="text">
                        <p>{e.desc}</p>
                      </div>

                      <p>Charge: {e.charge}</p>

                      <a href="#contact-section" className="lnk">
                        order now
                      </a>
                    </div>{" "}
                  </div>
                ) : (
                  <></>
                );
              })}
            </div>
            {/* History */}
            <div className="history-left">
              <div className="history-items">
                <div className="p-title">EDUCATION</div>
                <div className="history-item">
                  <div className="date">2010 - 2012</div>
                  <div className="name">Master in Graphic</div>
                  <div className="subname">New York University</div>
                </div>
                <div className="history-item">
                  <div className="date">2006 - 2009</div>
                  <div className="name">Bachelors of FineArt</div>
                  <div className="subname">New York University</div>
                </div>
              </div>
              <div className="history-items">
                <div className="p-title">AWARDS</div>
                <div className="history-item">
                  <div className="date">2016 - awwwards</div>
                  <div className="name">Site of the Day</div>
                  <div className="text">
                    <p>
                      Euismod vel bibendum ultrices, fringilla vel eros, donec
                      euismod leo lectus.
                    </p>
                  </div>
                </div>
                <div className="history-item">
                  <div className="date">2015 - designnominees</div>
                  <div className="name">Site of the Week</div>
                  <div className="text">
                    <p>
                      Euismod vel bibendum ultrices, fringilla vel eros, donec
                      euismod leo lectus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="history-right">
              <div className="history-items">
                <div className="p-title">EXPERIENCE</div>
                <div className="history-item">
                  <div className="date">2014 - Present</div>
                  <div className="name">Soft Tech Inc.</div>
                  <div className="subname">UI Head &amp; Manager</div>
                  <div className="text">
                    <p>
                      Euismod vel bibendum ultrices, fringilla vel eros, donec
                      euismod leo lectus.
                    </p>
                  </div>
                </div>
                <div className="history-item">
                  <div className="date">2010 - 2014</div>
                  <div className="name">Kana Design Studio</div>
                  <div className="subname">UI / UX Specialist</div>
                  <div className="text">
                    <p>
                      Euismod vel bibendum ultrices, fringilla vel eros, donec
                      euismod leo lectus.
                    </p>
                  </div>
                </div>
                <div className="history-item">
                  <div className="date">2009 - 2010</div>
                  <div className="name">Paperart</div>
                  <div className="subname">Graphic Designer</div>
                  <div className="text">
                    <p>
                      Euismod vel bibendum ultrices, fringilla vel eros, donec
                      euismod leo lectus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
            {/* Button CV */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bslthemes.site/ober/wp-content/uploads/2021/12/Jacky-Smith-Resume.pdf"
              className="btn"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
