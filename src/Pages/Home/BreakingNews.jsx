import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] px-8 py-3">
      <button className="btn bg-[#D72050;] rounded-none text-white mr-10">
        Breaking News
      </button>
      <Marquee pauseOnHover={true}>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
