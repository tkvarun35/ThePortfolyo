import Image from "next/image";
import { useEffect, useState } from "react";

function Skills(data) {
  const getYear = (time, isEndDate = true) => {
    const dateObject = new Date(time);
    const d = new Date();
    let year = d.getFullYear();
    const dataYear = dateObject.getFullYear();
    if (year === dataYear && isEndDate) return "Present";
    return dataYear;
  };
  const [edu, setEdu] = useState(false);
  const [exp, setExp] = useState(false);

  useEffect(() => {
    data.data.timeline.map((e) => {
      if (e.forEducation) setEdu(true);
      else setExp(true);
    });
  });
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
              {edu && (
                <div className="history-items">
                  <div className="p-title">EDUCATION</div>
                  {data.data.timeline
                    .sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
                    .map((e) => {
                      return e.enabled && e.forEducation ? (
                        <div className="history-item">
                          <div className="date">
                            {getYear(e.startDate, false)} - {getYear(e.endDate)}
                          </div>
                          <div className="name">{e.jobTitle}</div>
                          <div className="subname">{e.company_name}</div>
                        </div>
                      ) : (
                        <></>
                      );
                    })}
                </div>
              )}
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
            {exp && (
              <div className="history-right">
                <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  {data.data.timeline
                    .sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
                    .map((e) => {
                      return e.enabled && !e.forEducation ? (
                        <div className="history-item">
                          {e.icon && (
                            <div className="icon">
                              <Image
                                src={e.icon.url}
                                width={50}
                                height={50}
                                alt="icon of the service"
                              />
                            </div>
                          )}
                          <div className="date">
                            {getYear(e.startDate, false)} - {getYear(e.endDate)}
                          </div>
                          <div className="name">{e.jobTitle}</div>
                          <div className="subname">{e.company_name}</div>
                          <div className="text">
                            <p>{e.summary}</p>
                          </div>
                          <div className="text">
                            <p>{e.jobLocation}</p>
                          </div>
                        </div>
                      ) : (
                        <></>
                      );
                    })}
                </div>
              </div>
            )}
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
