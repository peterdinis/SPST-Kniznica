import * as React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IModalProps {
  children?: React.ReactNode;
  btnName: string;
  modalHeader: string;
  className?: string;
}

const HelperModal = ({ children, btnName, modalHeader, className }: IModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalMotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  return (
    <div className={className}>
      <button className="text-red-800" onClick={onOpen}>
        {btnName}
      </button>
      <Modal  isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <motion.div {...modalMotionProps}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-center font-bold text-2xl">
              {modalHeader}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </motion.div>
      </Modal>
    </div>
  );
};

export default HelperModal;