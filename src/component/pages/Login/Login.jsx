import loginAsset from "../../../assets/loginAsset.png";
import Button from "../../atom/Button";
import Input from "../../atom/Input";
import amarthaAsset from  "../../../assets/amartha_asset.png"

function Login() {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center bg-teal-30">
      <div className="min-h-screen flex flex-1 justify-center items-center bg-primary
        ">
        <img src={loginAsset} alt="Login" />
      </div>
      <div className="flex flex-1 flex-col justify-center items-center gap-4 px-8">
        <img
        src={amarthaAsset}
        className="w-64 object-contain pb-6"
        />
        
        <h2 className="w-1/2 font-extralight text-gray-500  justify-start items-start">
          Login to your <strong className="font-bold text-primary">DigiPROC</strong> Account
        </h2>

    
          <Input
            className="w-1/2 rounded-lg border border-gray-700 px-4 py-2 focus:border border-primary"
            type={"email"}
            placeholder={"Email"}
          />
     

          <Input
            className="w-1/2 rounded-lg border border-gray-700 px-4 py-2 focus: border border-primary"
            type={"password"}
            placeholder={"Password"}
          />

         <Button
            className="w-1/2 rounded-lg bg-primary px-4 py-2 text-white font-bold"
            variant={"login"}
            >
            
            Login
            </Button>
         
      </div>
    </div>
  );
}

export default Login;
