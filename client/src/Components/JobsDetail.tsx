import product1 from "./../assets/img/product-design-1.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";

function JobsDetail() {
  return (
    <>
      <main className="bg-white rounded-3xl px-4 py-3  ">
        <section className=" flex justify-between mb-5">
          <div className="flex items-center">
            <img src={product1} alt="" className="w-22" />
            <span>
              <h2 className="text-3xl font-semibold">Product Design</h2>
              <p>Binford Ltd.</p>
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="flex justify-end gap-5">
              <BookmarkBorderIcon sx={{ fontSize: 35 }} />
              <ShareIcon sx={{ fontSize: 35 }} />
            </span>
            <button className="px-5 py-2 bg-blue text-white rounded-lg font-semibold">
              Apply now
            </button>
          </div>
        </section>
        <section className="flex gap-6">
          <div className="">
            <h4 className="text-lg font-medium">Job type:</h4>
            <p className="mb-4">Full-time</p>
            <h4 className="text-lg font-medium">Location:</h4>
            <p className="mb-4 ">Remote</p>
            <h4 className="text-lg font-medium">Experiance:</h4>
            <p className=" mb-4">5 years</p>
            <h4 className="text-lg font-medium">Number of Applicants:</h4>
            <p className="mb-4">40</p>
          </div>
          <article>
            <h4 className="text-2xl  font-semibold">Job description</h4>
            <p className="text-gray-700 mb-8">
              We are seeking a highly skilled and creative Senior UI/UX Designer
              to join our dynamic team in Lagos. As a Senior UI/UX Designer, you
              will play a crucial role in designing intuitive and engaging user
              interfaces and enhancing user experience across various digital
              platforms. You will collaborate closely with cross-functional
              teams, including product managers, developers, and stakeholders,
              to bring innovative ideas to life and ensure a seamless user
              journey. If you are passionate about creating top-notch digital
              experiences and have a keen eye for design, we would love to have
              you on board!
            </p>
            <h4 className="text-2xl  font-semibold">Key Responsibilities</h4>
            <p className="text-gray-700 mb-8">
              Design and develop user-centric interfaces for web and mobile
              applications. Conduct user research, usability testing, and gather
              feedback to improve designs. Create wireframes, prototypes, and
              high-fidelity designs using design tools like Figma, Adobe XD, or
              Sketch. Collaborate with product managers and developers to ensure
              design consistency and feasibility. Stay updated with the latest
              UI/UX trends and best practices to ensure optimal user experience.
              Lead and mentor junior designers in the team, providing guidance
              and feedback. Ensure designs are aligned with brand guidelines and
              project requirements.
            </p>
            <h4 className="text-2xl  font-semibold">Requirements</h4>
            <p className="text-gray-700 mb-8">
              Bachelor’s degree in Graphic Design, Interaction Design, or a
              related field. Minimum of 5 years of experience in UI/UX design,
              preferably in a fast-paced environment. Strong portfolio
              showcasing previous UI/UX design work and design thinking process.
              Proficiency in design tools such as Figma, Adobe XD, Sketch, and
              familiarity with prototyping tools. Solid understanding of
              user-centered design principles and best practices. Experience in
              conducting user research, A/B testing, and usability testing.
              Strong communication skills with the ability to present and
              explain design concepts to stakeholders. Experience working with
              front-end developers and knowledge of HTML/CSS is a plus.
              Attention to detail and a passion for solving complex problems
              with creative solutions.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default JobsDetail;
