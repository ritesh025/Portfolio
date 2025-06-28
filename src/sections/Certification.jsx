import React from "react";
import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
const Certification = () => {
  return (
    <section className="certification" id="certification">
      <h1 className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Certifications"
          sub=" 🎖️Certificates I have earned to enhance my skills
          and knowledge."
        />

        <div className="certificates-grid tech-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certificate-card card-border tech-card overflow-hidden items-start"
            >
              <div className="certificate-details p-6 flex flex-col gap-4 items-start">
                <h3 className="text-white text-2xl font-semibold mt-2">
                  {cert.name}
                </h3>
                <p className="text-white-50 text-lg items-start">
                  Issued by: {cert.issuedBy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </h1>
    </section>
  );
};

export default Certification;
