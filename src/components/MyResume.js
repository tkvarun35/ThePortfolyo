import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import Hero from "./Hero";
import MyBlog from "./MyBlog";
import MyClients from "./MyClients";
import MyProjects from "./MyProjects";
import Pricing from "./Pricing";
import Skills from "./Skills";
import Testimonial from "./Testimonial";
import getRequest from "../../services/getReq";

function MyResume() {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetch() {
      const request = await getRequest(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      ).then(async (response) => {
        console.log(response);
        if (response.success) setData(response.user);
      });
    }
    fetch();
  }, []);
  return (
    <>
      {data && <Hero data={data} />}
      {data && <AboutMe data={data} />}
      {data && <Skills data={data} />}
      {data && <MyProjects data={data} />}
      <Pricing />
      {data && <Testimonial data={data.testimonials} />}
      <MyBlog />
      <MyClients />
      {data && <ContactForm data={data} />}
    </>
  );
}

export default MyResume;
