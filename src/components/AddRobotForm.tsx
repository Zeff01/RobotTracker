import React, { useState, FormEvent } from "react";
import { RobotType } from "../types/Robot";
import Button from "./Button";
import useRobotStore from "../store/useRobotStore";

interface AddRobotFormProps {
  onCloseModal: () => void;
}

const AddRobotForm: React.FC<AddRobotFormProps> = ({ onCloseModal }) => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const { addRobot, refreshList } = useRobotStore();

  const generateAvatarUrl = (name: string) => {
    const baseUrl = "https://avatars.dicebear.com/api";
    const options = {
      width: 200,
      height: 200,
      background: "transparent",
      colors: ["#000000"],
    };
    const queryParams = new URLSearchParams(JSON.stringify(options));
    return `${baseUrl}/bottts/${name}.svg?${queryParams.toString()}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
 
    if (!name || !purpose) {
      alert("Please enter a name and purpose for the robot.");
      return;
    }

    const avatarUrl = generateAvatarUrl(name);

    const newRobot: RobotType = {
      id: Date.now(),
      name,
      purpose,
      avatarUrl,
    };
 
    addRobot(newRobot);
    setName("");
    setPurpose("");
    refreshList();
    onCloseModal();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    const capitalizedName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);
    setName(capitalizedName);
  };

  const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    const capitalizedName =
      inputName.charAt(0).toUpperCase() + inputName.slice(1);
    setPurpose(capitalizedName);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-textColor flex-flex-col  h-full p-8"
    >
      <h1 className="text-xl text-white text-center ">ADD ROBOT</h1>
      <div className="flex flex-col gap-8 mt-20">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          className="rounded-full p-4"
        />

        <input
          type="text"
          placeholder="Purpose"
          value={purpose}
          onChange={handlePurposeChange}
          className="rounded-full p-4"
        />
        <Button type="submit" onClick={handleSubmit} className="custom-class">
          Add Robot
        </Button>
      </div>
    </form>
  );
};

export default AddRobotForm;
