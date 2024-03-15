import Isotope from "isotope-layout";
import Image from "next/image";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectIsotop = (data) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
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
          {/* <a
            className={`c-pointer ${activeBtn("sorting-ui-ux-design")}`}
            onClick={handleFilterKeyChange("sorting-ui-ux-design")}
            data-href=".sorting-ui-ux-design"
          >
            UI UX Design
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
            data-href=".sorting-photo"
          >
            Photography
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-development")}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Development
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-branding")}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            Branding
          </a> */}
        </div>
        <div className="works-items works-list-items row">
          {data.data
            .sort((a, b) => (a.sequence > b.sequence ? 1 : -1))
            .map((e) => {
              return (
                <div
                  className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo "
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
                          {/* <span className="category">
                            Branding
                            <br />
                            Photography
                          </span> */}
                          <span className="text">{e.desc}</span>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
