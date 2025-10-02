import React from "react";
import ReactModal from "react-modal";
import { useModal } from "./ModalContext";
import { motion } from "framer-motion";
import { FiX, FiPhone, FiMail } from "react-icons/fi";

const ContactModal: React.FC = () => {
  const { isContactModalOpen, toggleContactModal } = useModal();

  return (
    <ReactModal
      isOpen={isContactModalOpen}
      onRequestClose={toggleContactModal}
      contentLabel="Contacter Coralie Andrietti"
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
          onClick={toggleContactModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark transition-colors duration-200"
          aria-label="Fermer la modale"
        >
          <FiX size={24} />
        </button>

        <div className="flex items-center mb-6">
          <div className="bg-primary/10 text-primary rounded-full p-3 mr-4"></div>
          <h2 className="text-2xl font-bold text-dark">Me Contacter</h2>
        </div>

        <div className="text-gray-600 space-y-4">
          <div className="flex items-center">
            <FiPhone className="text-primary mr-3" size={20} />
            <a
              href="tel:+33612345678"
              className="hover:text-primary transition-colors"
            >
              06 64 43 62 60
            </a>
          </div>
          <div className="flex items-center">
            <FiMail className="text-primary mr-3" size={20} />
            <a
              href="mailto:coralie.andrietti@gmail.com"
              className="hover:text-primary transition-colors"
            >
              coralie.andrietti@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            onClick={toggleContactModal}
            className="bg-primary text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-all"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </ReactModal>
  );
};

export default ContactModal;
