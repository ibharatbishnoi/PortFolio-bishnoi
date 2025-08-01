import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-1 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center font-titleFont border-b-[1px] border-b-gray-300 bg-white"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
