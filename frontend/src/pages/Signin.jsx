import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
export const Signin = () => {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign In"}></Heading>
            <SubHeading
              label={
                "Enter your Credentials to access your account"
              }></SubHeading>
            <InputBox
              label={"Email"}
              placeholder={"johndoe@gmail.com"}></InputBox>
            <InputBox
              label={"Password"}
              type="password"
              placeholder={"12345"}></InputBox>

            <div className="pt-4">
              <Button label={"Sign in"}></Button>
            </div>
            <BottomWarning
              label={"Dont have an account?"}
              buttonText={"Sign Up"}
              to={"/signup"}></BottomWarning>
          </div>
        </div>
      </div>
    </>
  );
};
