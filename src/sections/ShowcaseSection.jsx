import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const traipRef = useRef(null);
  const WeatherRef = useRef(null);
  const OnpassRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [traipRef.current, WeatherRef.current, OnpassRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="h-full">
          <div className="justify-center flex flex-col items-center gap-5 ">
            <p className="hero-badge text-center">💻 Project Showcase</p>
            <h1 className="font-semibold md:text-5xl text-3xl text-center letter-spacing-2">
              Projects that I've worked on
            </h1>
            <br />
            <div className="showcaselayout">
              <div
                ref={traipRef}
                // left
                className="first-project-wrapper"
              >
                <div className="image-wrapper">
                  <img
                    src="/images/project1.png"
                    alt="Traip - AI Trip Planner"
                  />
                </div>
                <div className="text-content">
                  <h2>
                    Frontend Web App designed to help users plan their trips
                    with the assistance of AI.
                  </h2>
                  <p className="text-white-50 md:text-xl">
                    An app built with NextJS, TypeScript, & TailwindCSS for a
                    fast, user-friendly experience.
                  </p>
                </div>
              </div>

              <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={WeatherRef}>
                  <div className="image-wrapper bg-[#578eb5]">
                    <img src="/images/project2 (1).png" alt="Weatherify" />
                  </div>
                  <h2>Weatherify - Real Time Weather</h2>
                </div>

                <div className="project" ref={OnpassRef}>
                  <div className="image-wrapper bg-[#15052f]">
                    <img src="/images/project3.png" alt="On-pass" />
                  </div>
                  <h2>OnPass - Password Manager</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
