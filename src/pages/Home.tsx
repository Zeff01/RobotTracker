import { Link } from "react-router-dom";
import useRobotStore, { RobotStoreType } from "../store/useRobotStore";
import Robot from "../components/Robot";

const Home = () => {
  const robots = useRobotStore((state: RobotStoreType) => state.robots);

  if (robots.length === 0)
    return (
      <h1 className="text-white text-4xl flex items-center w-full h-full justify-center">
        No Robots added yet, Try adding some robots.
      </h1>
    );
  return (
    <div className="w-full text-textColor p-8">
      <div className="mt-40 md:grid lg:grid-cols-3 md:grid-cols-2 gap-20 flex flex-col xl:grid-cols-4">
        {robots.map((robot) => (
          <div key={robot.id}>
            <Link
              to={{
                pathname: `/robot/${robot.id}`,
                search: `?name=${robot.name}&avatarUrl=${robot.avatarUrl}`,
              }}
            >
              <Robot
                id={robot.id}
                name={robot.name}
                purpose={robot.purpose}
                avatarUrl={robot.avatarUrl}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
