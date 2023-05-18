import { useState } from "react";
import { useParams } from "react-router-dom";
import useRobotStore from "../store/useRobotStore";
import { RobotType } from "../types/Robot";
import { useNavigate } from "react-router-dom";

const Robot = () => {
  const { id } = useParams<{ id: string }>();
  const { robots, deleteRobot, updateRobot } = useRobotStore();
  const navigate = useNavigate();

  const robot = robots.find(
    (robot: RobotType) => robot.id === parseInt(id ?? "0", 10)
  );

  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(robot?.name || "");
  const [editedPurpose, setEditedPurpose] = useState(robot?.purpose || "");

  const handleDeleteRobot = () => {
    if (robot) {
      deleteRobot(robot.id);
      navigate("/");
    }
  };

  const handleEditRobot = () => {
    if (editing && robot) {
      const editedRobot: RobotType = {
        ...robot,
        name: editedName,
        purpose: editedPurpose,
      };
      updateRobot(editedRobot);

      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  if (!robot) {
    return <div>Robot not found.</div>;
  }

  return (
    <div className="p-8 flex flex-col text-textColor gap-2  items-center justify-between h-[800px] ">
      <div className="flex flex-col gap-2 boder items-center">
        <h1 className="text-4xl text-white">Robot Details</h1>
        <p className="text-sm">Code: {robot.id}</p>
        <img src={robot.avatarUrl} alt="Robot Avatar" className="w-80 h-80 " />
      </div>

      {editing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="rounded-full p-4 outline-none"
          />
          <input
            type="text"
            value={editedPurpose}
            onChange={(e) => setEditedPurpose(e.target.value)}
            className="rounded-full p-4 outline-none"
          />
        </>
      ) : (
        <div className="flex flex-col gap-8  text-4xl">
          <p>Name: {robot.name}</p>
          <p>Purpose: {robot.purpose}</p>
        </div>
      )}
      <div className=" flex gap-8">
        <button onClick={handleEditRobot} className="button">
          {editing ? "Save" : "Edit"}
        </button>
        <button onClick={handleDeleteRobot} className="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Robot;
