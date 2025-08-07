import React from 'react';
import Modal from '../../components/Modal';
import { skillsConfig } from '../../config/skills';

interface SkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: string;
}

const SkillModal: React.FC<SkillModalProps> = ({ isOpen, onClose, skill }) => {

  const selectedSkill = skillsConfig[skill] || {
    icon: '❓',
    displayText: 'Unknown Skill',
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="small"
      title={
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full">
            {selectedSkill.icon}
          </div>
          <span>{skill}</span>
        </div>} 
      >
      <div className="flex flex-col items-center">
        <p>{selectedSkill.displayText}</p>
      </div>
    </Modal>
  );
};

export default SkillModal;