import TestimonialSlider from "./TestimonialSlider";

function Testimonial(data) {
  return (
    <section className="section no-padding-top section-parallax section-parallax-4">
      <div className="container">
        {/* Testimonials */}
        <TestimonialSlider data={data} />
      </div>
    </section>
  );
}

export default Testimonial;
