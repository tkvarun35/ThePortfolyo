import Isotope from "isotope-layout";
import Image from "next/image";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectIsotop = (data) => {
  // Isotope
  // console.log(data);
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [techstack, setTechStack] = useState([]);
  const textToBinary = (text) => {
    return text
      .split("")
      .map((char) => {
        const binary = char.charCodeAt(0).toString(2);
        // Ensure each character is represented by 8 bits
        return "0".repeat(8 - binary.length) + binary;
      })
      .join("");
  };
  useEffect(() => {
    const tech = new Set();
    data.data.map((e) => {
      return e.techStack.map((techval) => {
        tech.add(techval.trim());
      });
    });
    setTechStack([...tech]);
  }, []);
  // console.log(techstack);
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const mergeTech = (techstackArr) => {
    let out = " ";
    techstackArr.map((e) => {
      out = out + "sort-" + textToBinary(e.trim()) + "-tech" + " ";
    });
    // console.log(out);
    return out;
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div className="filter-links">
          <a
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          {techstack.map((tech, key) => {
            return (
              <a
                className={`c-pointer ${activeBtn(
                  `sort-${textToBinary(tech)}-tech`
                )}`}
                onClick={handleFilterKeyChange(
                  `sort-${textToBinary(tech)}-tech`
                )}
                data-href={`.sort-${textToBinary(tech)}-tech`}
                key={key}
              >
                {tech}
              </a>
            );
          })}
        </div>
        <div className="works-items works-list-items row">
          {data.data
            .sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
            .map((e) => {
              return e.enabled ? (
                <div
                  className={
                    "works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo" +
                    mergeTech(e.techStack)
                  }
                  key={e._id}
                >
                  <div className="works-item">
                    <Link href="#">
                      <a>
                        <span className="image">
                          <span className="img">
                            <Image
                              src={e.image.url}
                              width={1200}
                              height={800}
                              alt={e.title}
                            />

                            <span className="overlay" />
                          </span>
                        </span>
                        <span className="desc">
                          <span className="name">{e.title}</span>
                          <span className="category">
                            {e.techStack.map((tech, key) => {
                              return (
                                <div key={key}>
                                  {tech}
                                  <br />
                                </div>
                              );
                            })}
                          </span>
                          <span className="text">{e.desc}</span>
                          <div className="social-links">
                            <div className="icon" href={e.liveurl}>
                              <i aria-hidden="true" className="fas fa-globe" />
                            </div>
                            <div className="icon" href={e.githuburl}>
                              <i aria-hidden="true" className="fab fa-github" />
                            </div>
                          </div>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                <></>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
