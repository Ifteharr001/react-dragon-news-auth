import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h3 className="text-2xl font-bold">Login With</h3>
        <button className="btn bg-none btn-outline w-full">
          {" "}
          <FaGoogle></FaGoogle> Login with google
        </button>
        <button className="btn bg-none btn-outline w-full">
          {" "}
          <FaGithub></FaGithub> Login with github
        </button>
      </div>
      {/* find us div */}
      <div className="p-4  mb-6">
        <h3 className="text-2xl font-bold mb-4">Find Us On</h3>
            <a className="p-4 flex text-lg item-center rounded-t-lg border" href="">
                <FaFacebook className="mr-3"></FaFacebook>
                Facebook
            </a>
            <a className="p-4 flex text-lg item-center  border" href="">
                <FaTwitter className="mr-3"></FaTwitter>
                Twitter
            </a>
            <a className="p-4 flex text-lg item-center rounded-b-lg border" href="">
                <FaInstagram className="mr-3"></FaInstagram>
                Instagram
            </a>
      </div>

      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h3 className="text-2xl font-bold">Q zone</h3>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
