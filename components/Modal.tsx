import React from "react";
import ReactModal from "react-modal";
import { useAppContext } from "./AppContext";
import { motion } from "framer-motion";
import { FiInfo, FiX } from "react-icons/fi";

// Set the app element for accessibility
if (typeof window !== "undefined") {
  ReactModal.setAppElement("#__next");
}

interface DataItem {
  id: string;
  properties: {
    Name: {
      title: { plain_text: string }[];
    };
  };
}

interface ModalProps {
  datas: DataItem[];
}

export default function Modal({ datas }: ModalProps) {
  const { mainModalIsOpen, setMainModalIsOpen } = useAppContext();

  function closeModal() {
    setMainModalIsOpen(false);
  }

  return (
    <ReactModal
      isOpen={mainModalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Informations Importantes"
      className="relative focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-auto p-8 relative"
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark transition-colors duration-200"
          aria-label="Fermer la modale"
        >
          <FiX size={24} />
        </button>

        <div className="flex items-center mb-6">
          <div className="bg-primary/10 text-primary rounded-full p-3 mr-4">
            <FiInfo size={28} />
          </div>
          <h2 className="text-2xl font-bold text-dark">Info&apos; pratiques</h2>
        </div>

        <div className="text-gray-600 space-y-3">
          <ul className="list-disc list-inside space-y-2">
            {Array.isArray(datas) &&
              datas.map((data) =>
                data.properties.Name.title[0] ? (
                  <li key={data.id}>
                    {data.properties.Name.title[0].plain_text}
                  </li>
                ) : null
              )}
          </ul>
        </div>

        <div className="mt-8 text-right">
          <button
            onClick={closeModal}
            className="bg-primary text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all"
          >
            Ok
          </button>
        </div>
      </motion.div>
    </ReactModal>
  );
}
