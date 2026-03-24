import Button from "../components/Button";
import Textfield from "../components/Textfield";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className=" bg-green-50 w-full py-20 px-20 md:px-96 ">
      <div className=" mx-auto">
        <div className=" bg-white text-black py-10 px-4  rounded-2xl mt-14 border border-gray-300 flex flex-col items-center">
          <h2 className=" font-bold">Welcome back</h2>
          <p className=" text-gray-600">Log in to your Nexus account</p>

          <Textfield
            label={"Email"}
            placeholder={"Farmer@example.com"}
            className=" fill-green-50 mb-3"
          />

          <Textfield
            label={"Password"}
            placeholder={"....."}
            className=" fill-green-50"
          />

          <Link
            to={"/forgetpassword"}
            className=" text-green-600 hover:underline  text-xs mt-2 self-end"
          >
            Forgot password?
          </Link>

          <Button
            className={"bg-green-600 text-white mt-5 w-full"}
            children={"Log in"}
          />

          <div className=" flex mt-3">
            <p>Don't have an account?</p>
            <Link to={"signup"} className=" text-green-600 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
