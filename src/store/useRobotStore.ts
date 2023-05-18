import create from "zustand";
import { RobotType } from "../types/Robot";

export interface RobotStoreType {
  robots: RobotType[];
  addRobot: (newRobot: RobotType) => void;
  deleteRobot: (id: number) => void;
  updateRobot: (updatedRobot: RobotType) => void;
  refreshList: () => void;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const useRobotStore = create<RobotStoreType>((set) => ({
  robots: JSON.parse(localStorage.getItem("robots") || "[]"),
  addRobot: (newRobot) => {
    set((state) => {
      const updatedRobots = [...state.robots, newRobot];
      localStorage.setItem("robots", JSON.stringify(updatedRobots));
      return { ...state, robots: updatedRobots };
    });
  },
  deleteRobot: (id) => {
    set((state) => {
      const updatedRobots = state.robots.filter((robot) => robot.id !== id);
      localStorage.setItem("robots", JSON.stringify(updatedRobots));
      return { ...state, robots: updatedRobots };
    });
  },
  updateRobot: (updatedRobot) => {
    set((state) => {
      const updatedRobots = state.robots.map((robot) =>
        robot.id === updatedRobot.id ? updatedRobot : robot
      );
      localStorage.setItem("robots", JSON.stringify(updatedRobots));
      return { ...state, robots: updatedRobots };
    });
  },
  refreshList: () => {
    const robots = JSON.parse(localStorage.getItem("robots") || "[]");
    set((state) => ({
      ...state,
      robots: robots,
    }));
  },
  showModal: false,
  setShowModal: (show) => {
    set((state) => ({
      ...state,
      showModal: show,
    }));
  },
}));

export default useRobotStore;
