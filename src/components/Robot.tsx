import { RobotType } from "../types/Robot";

const Robot = ({ name, purpose, avatarUrl }: RobotType) => {
  return (
    <div
      className="border-2 w-80 h-80 flex  flex-col relative p-2 rounded-xl shadow-xl
    "
    >
      {avatarUrl && (
        <div className="w-28 h-28  absolute -top-16 rounded-full">
          <img
            src={avatarUrl}
            alt="Avatar"
            className="w-24 h-24 rounded-full animate-bounce"
          />
        </div>
      )}
      <div className="mt-20 flex-col flex p-2">
        <div className="text-xl  text-white">{name}</div>
        <div className="mt-2">{purpose}</div>
      </div>
    </div>
  );
};

export default Robot;
