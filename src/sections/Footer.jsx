import { socialImgs } from "../constants";

const Footer = () => {

  const handleClick = (socialName) => {
    const socialLinks = {
      insta: "https://www.instagram.com/mr_raja_018",
      github: "https://github.com/ritesh025",
      x: "https://twitter.com", // assuming X is Twitter
      linkedin: "https://www.linkedin.com/in/riteshbafna25/",
    };

    // Redirect to the respective social media URL
    window.open(socialLinks[socialName], "_blank");
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>


        <button className="socials" id="socials">
          {socialImgs.map((socialImg, index) => (
            <div
              key={index}
              className="icon"
              onClick={() => handleClick(socialImg.name)}
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </div>
          ))}
        </button>


        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ritesh Bafna | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
