import visionmissionimg from "../assets/images/visionmissionimg.png";
const OurStory = () => {
  return (
    <section>
      <div className="paddingtop paddingbottom wrapper grid md:grid-cols-2 gap-10">
        <div>
          <h3
            data-aos="fade-right"
            className="text-[32px] text-primary font-bold"
          >
            Our Story
          </h3>
          <p className="desc mt-4" data-aos="fade-right">
            At NeuroraLynx AI, we're more than just a tech company. We're a team of
            problem solvers, innovators, and strategists committed to
            helping businesses reach their full potential. We work with you to discover
            how modern technology can
            transform your business and help you achieve your goals.
            <br />
            <br />
            We bring innovation to every project. From AI-powered
            solutions to AR/VR, mobile apps, and advanced data analytics,
            we help businesses around the world break through limitations and grow. Work with us to expand
            your possibilities and reach new heights.
          </p>
        </div>
        <img data-aos="fade-left" src={visionmissionimg} alt="" />
      </div>
    </section>
  );
};

export default OurStory;
