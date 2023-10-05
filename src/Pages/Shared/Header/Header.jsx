import logo from '../../../assets/logo.png'
import moment from "moment";

const Header = () => {
    return (
      <div className='text-center my-10'>
        <img className='mx-auto mb-4' src={logo} alt="" />
        <p className='mb-3'>Journalism Without Fear or Favour</p>
        <p className="text-xl">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    );
};

export default Header;