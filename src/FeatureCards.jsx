import TitleHeader from "./components/TitleHeader";
import {abilities} from "./constants";

const FeatureCards = () => (
  <div className="w-full h-full padding-x-lg  mt-15">
    <div className="justify-center flex flex-col items-center gap-5">
      <p className="hero-badge text-center ">
        🗣️ Attributes that Enhance my Communication{" "}
      </p>
      <h1 className="font-semibold md:text-5xl text-3xl text-center">
        Essential Soft Skills
      </h1>

      <div className="mx-auto grid-3-cols mt-10">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FeatureCards;
