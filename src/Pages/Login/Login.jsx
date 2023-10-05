import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    // Login handleClick
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        signIn(email, password)
        .then(result =>{
            console.log(result.user)

            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
      <div>
        <Navbar></Navbar>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content grid grid-cols-1">
            <h2 className="text-4xl block font-bold text-center">Please Login</h2>
            <div className="card  w-[600px] shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-center mb-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register"> Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;