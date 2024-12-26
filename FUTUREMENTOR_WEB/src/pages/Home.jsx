// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
// import Banner from "../assets/Images/banner.mp4"
// import coder from "../assets/Images/maxresdefault.jpg"
import vector from "../assets/Images/heroVector.webp"
import tree from "../assets/Images/bgnet.png"
// Component Imports
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"


function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white ">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-36 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none z-0 shadow-lg shadow-caribbeangreen-100 ">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 z-0 ">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold z-0">
        Empower Your Future with 
          <HighlightText text={"Diverse Learning Opportunities"} />
        </div>

        {/* Sub Heading */}
        <div className="mt-3 w-[90%] text-center text-lg font-bold text-richblue-50 z-0 ">
        With FutureMentor's online courses, you can learn at your own pace, from anywhere in the world, across a variety of fields.
         Gain access to a wealth of resources, including hands-on projects, and personalized feedback from expert instructors.
         Whether it's coding, business, design, or personal development, we’re here to guide you toward your goals and unlock your potential.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7 z-0 ">
          <CTAButton active={true} linkto={"/signup"} >
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 w-[100vw] -mt-96 ">
          {/* <video
            className=""
            muted
            loop
            autoPlay
            >
            <source src={Banner} type="video/mp4" />
          </video> */}
          <img className="w-[100vw] -mt-40" src={vector} alt=""/>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-yellow-25"}
            codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your 
                 <HighlightText text={"Engineering Potential with Our Online Courses"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts with years of experience in mechanical engineering. They're passionate about sharing their knowledge, covering topics like design, thermodynamics, and advanced manufacturing to help you build a solid foundation for your future."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`We use the First Law of Thermodynamics:
ΔU=Q−W
Where:
ΔU = Change in internal energy
Q = Heat absorbed by the system (800 J)
𝑊 = Work done by the system (400 J)
First, calculate the change in internal energy:
Δ𝑈=800J−400J=400J
ΔU=800J−400J=400J
Now, calculate the final internal energy by adding the change in internal energy to the initial internal energy:
𝑈final=𝑈initial+Δ𝑈=1500J+400J=1900J
Ufinal=Uinitial+ΔU=1500J+400J=1900J
 Thus, the final internal energy of the gas is 1900 J.`}
            backgroundGradient={<div className="codeblock3 absolute"></div>}
          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Begin Your<HighlightText text={"Financial Journey"} /> Now
              
              </div>
            }
            subheading={"Go ahead, dive right in. Our hands-on learning approach ensures you'll be analyzing real financial data and solving practical problems from your very first lesson."}
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-lime-300"}
            codeblock={` compound interest formula:
A=P(1+ r/n)^nt
Where:
𝑃=10,000
𝑟=0.05
𝑛=1
t=3
𝐴=10,000(1+0.05)3=10,000×1.157625=11,576.25
The investment will be worth $11,576.25 after 3 years.`}
            backgroundGradient={<div className="codeblock4 absolute"></div>}
          />
        </div>
        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
              <div className="text-white">Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern futurementor is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="text-white">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home