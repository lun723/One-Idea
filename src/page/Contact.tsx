import React, { useState } from 'react';
import Modal from '../components/Modal';

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-8 pt-30">
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="My Modal"
        size="medium"
      >
        <p>This is the modal content.</p>
        <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Contact;