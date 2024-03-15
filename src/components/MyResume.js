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
import Error from "./Error";

function MyResume() {
  const [data, setData] = useState(false);
  useEffect(() => {
    async function fetch() {
      const request = await getRequest(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      )
        .then(async (response) => {
          console.log(response);

          if (response.success) setData(response.user);
          else setData(false);
        })
        .catch((e) => {
          setData(false);
          window.alert("No response from backend");
          console.log(e);
        });
    }
    fetch();
  }, []);
  return (
    <>
      {data !== false && (
        <>
          <Hero data={data} />
          <AboutMe data={data} />
          <Skills data={data} />
          <MyProjects data={data} />
          <Pricing />
          <Testimonial data={data.testimonials} />
          <MyBlog />
          <MyClients />
          <ContactForm data={data} />
        </>
      )}
      {data === false && <Error />}
    </>
  );
}

export default MyResume;
