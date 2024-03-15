function MyClients() {
  return (
    <section className="section section-parallax section-parallax-5">
      <div className="container">
        {/* Section Heading */}
        <div className="m-titles">
          <h2 className="m-title">My Clients</h2>
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
        <div className="row clients-items">
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand1.png" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand2.png" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand3.png" alt="" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
            <div className="clients-item">
              <img src="assets/images/brand4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyClients;
