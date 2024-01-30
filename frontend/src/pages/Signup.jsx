import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"}></Heading>
            <SubHeading
              label={
                "Enter your Information to create an account"
              }></SubHeading>
            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              label={"First Name"}
              placeholder={"John"}></InputBox>
            <InputBox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              label={"Last Name"}
              placeholder={"Doe"}></InputBox>
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label={"Email"}
              placeholder={"sahil@gmail.com"}></InputBox>
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              label={"Password"}
              placeholder={"sahil1234"}></InputBox>
            <div className="pt-4">
              <Button
                label={"Sign up"}
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      username,
                      password,
                      firstName,
                      lastName,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                }}></Button>
            </div>
            <BottomWarning
              label={"Already have an account?"}
              buttonText={"Sign in"}
              to={"/signin"}></BottomWarning>
          </div>
        </div>
      </div>
    </>
  );
};
