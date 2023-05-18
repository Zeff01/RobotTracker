import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import useRobotStore, { RobotStoreType } from "./store/useRobotStore";
import Robot from "./pages/Robot";

Modal.setAppElement("#root");

const App: React.FC = () => {
  const refreshList = useRobotStore(
    (state: RobotStoreType) => state.refreshList
  );

  useEffect(() => {
    refreshList();
  }, [refreshList]);

  return (
    <div className=" bg-background h-screen overflow-auto ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robot/:id" element={<Robot />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
