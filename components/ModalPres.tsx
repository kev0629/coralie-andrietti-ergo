import ReactModal from "react-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import parcours from "../public/pictures/parcours-coralie-andrietti-ergotherapeute.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
    backgroundColor: "transparent",
    borderStyle: "solid",
  },
  overlay: { zIndex: 1000 },
};

interface ModalPresProps {
  isOpen: boolean;
  closeModalPres: () => void;
}

export default function ModalPres({ isOpen, closeModalPres }: ModalPresProps) {
  return (
    <ReactModal style={customStyles} isOpen={isOpen} ariaHideApp={false}>
      <div>
        <button className="modal-button" onClick={closeModalPres}>
          X
        </button>
        <div style={{ backgroundColor: "white" }}>
          <Image
            src={parcours}
            alt="parcours"
            width={1390 / 2}
            height={901 / 2}
          />
        </div>
      </div>
    </ReactModal>
  );
}
