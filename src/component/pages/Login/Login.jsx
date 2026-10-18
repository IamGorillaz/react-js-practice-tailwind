import loginAsset from "../../../assets/loginAsset.png";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import amarthaAsset from "../../../assets/amartha_asset.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SubmissionService from "../../../service/SubmissionService";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await SubmissionService.login(credentials);

      console.log("Login response:", response);

      const token = response.data?.data?.token;

      localStorage.setItem("token", token);

      navigate("/submission/create");
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  // call sini
  // tampung data onChange
  // onChange={(e) => setData(e.target.value)}
  return (
    <div className="min-h-screen flex flex-row justify-center items-center bg-teal-30">
      <div
        className="min-h-screen flex flex-1 justify-center items-center bg-primary
        "
      >
        <img src={loginAsset} alt="Login" />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center gap-4 px-8">
        <img src={amarthaAsset} className="w-64 object-contain pb-6" />

        <h2 className="w-1/2 font-extralight text-gray-500  justify-start items-start">
          Login to your{" "}
          <strong className="font-bold text-primary">DigiPROC</strong> Account
        </h2>

        <div className="flex w-full flex-col items-center gap-4">
          <Input
            className="w-1/2 rounded-lg border border-gray-700 px-4 py-2 focus:border border-primary"
            type={"email"}
            placeholder={"Email"}
            name="email"
            onChange={handleLogin}
          />

          <Input
            className="w-1/2 rounded-lg border border-gray-700 px-4 py-2 focus: border border-primary"
            type={"password"}
            placeholder={"Password"}
            name="password"
            onChange={handleLogin}
          />

          <Button
            type="submit"
            className="w-1/2 rounded-lg bg-primary px-4 py-2 text-white font-bold"
            variant={"login"}
            onClick={(e) => handleLoginSubmit(e)}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
