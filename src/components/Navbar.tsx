import Modal from "react-modal";
import AddRobotForm from "./AddRobotForm";
import RobotLogo from "../assets/robotlogo.png";
import useRobotStore, { RobotStoreType } from "../store/useRobotStore";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const showModal = useRobotStore((state: RobotStoreType) => state.showModal);
  const setShowModal = useRobotStore(
    (state: RobotStoreType) => state.setShowModal
  );
  const navigate = useNavigate();

  return (
    <div className="bg-primary-500 w-full flex justify-between py-2 px-4 items-center">
      <div>
        <img
          src={RobotLogo}
          className="w-20 h-20 cursor-pointer"
          alt="Robot Logo"
          onClick={() => navigate("/")}
        />
      </div>
      <ul>
        <li>
          <Button
            type="submit"
            onClick={() => setShowModal(true)}
            className="custom-class"
          >
            Add Robot
          </Button>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Add Bot Modal"
        className="border-b-0 border-r-0 border-l-0 border-t-4 w-[500px] h-[500px] bg-background absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col p-4 s border-t-borderColor rounded-xl"
        overlayClassName="bg-black/50 fixed top-0 left-0 right-0 bottom-0"
      >
        <AddRobotForm onCloseModal={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default Navbar;
