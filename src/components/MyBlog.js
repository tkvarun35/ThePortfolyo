import React from "react";
import Link from "next/link";

function MyBlog() {
  return (
    <section className="section section-bg" id="blog-section">
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2 className="m-title">My Blog</h2>
        </div>
        <div className="row row-custom">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
            {/* Description */}
            <div className="text">
              <p>
                Suspendisse potenti. Sed egestas eros eu libero posuere
                ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Blog */}
      <div className="blog-items">
        <div className="archive-item">
          <div className="image">
            <Link href="/blog-single">
              <a>
                <img
                  src="assets/images/blog4.jpg"
                  alt="Usability Secrets to Create Better User Interfaces"
                />
              </a>
            </Link>
          </div>
          <div className="desc">
            <div className="category">
              UI Design
              <br />
              <span>November 28, 2021</span>
            </div>
            <h3 className="title">
              <Link href="/blog-single">
                <a>Usability Secrets to Create Better User Interfaces</a>
              </Link>
            </h3>
            <div className="text">
              <p>
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…{" "}
              </p>
              <div className="readmore">
                <Link href="/blog-single">
                  <a className="lnk">Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="archive-item">
          <div className="image">
            <Link href="/blog-single">
              <a>
                <img
                  src="assets/images/blog3.jpg"
                  alt="Three Ways To Level Up Your Photography"
                />
              </a>
            </Link>
          </div>
          <div className="desc">
            <div className="category">
              Branding
              <br />
              <span>November 28, 2021</span>
            </div>
            <h3 className="title">
              <Link href="/blog-single">
                <a>Three Ways To Level Up Your Photography</a>
              </Link>
            </h3>
            <div className="text">
              <p>
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…{" "}
              </p>
              <div className="readmore">
                <Link href="/blog-single">
                  <a className="lnk">Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="archive-item">
          <div className="image">
            <Link href="/blog-single">
              <a>
                <img
                  src="assets/images/single7.jpg"
                  alt="10 Useful Tips to Improve Your UI Designs"
                />
              </a>
            </Link>
          </div>
          <div className="desc">
            <div className="category">
              Photography
              <br />
              <span>November 28, 2021</span>
            </div>
            <h3 className="title">
              <Link href="/blog-single">
                <a>10 Useful Tips to Improve Your UI Designs</a>
              </Link>
            </h3>
            <div className="text">
              <p>
                Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
                Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
                ornare eget…
              </p>
              <div className="readmore">
                <Link href="/blog-single">
                  <a className="lnk">Read more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-more-link">
        <Link href="/blog">
          <a className="btn">
            <span>View Blog</span>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default MyBlog;
