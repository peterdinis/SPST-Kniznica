import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text
  } from "@chakra-ui/react";
  
  interface ISecondaryModalProps {
    children?: React.ReactNode;
    modalButtonText: string;
    modalHeaderText: string;
    modalCloseText: string;
    className?: string;
  }
  
  const SecondaryModal: React.FC<ISecondaryModalProps> = ({
    children,
    modalButtonText,
    modalCloseText,
    modalHeaderText,
    className,
  }: ISecondaryModalProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Text onClick={onOpen}>{modalButtonText}</Text>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modalHeaderText}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{children}</ModalBody>
  
            <ModalFooter>
              <Button
                className={className}
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                {modalCloseText}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default SecondaryModal;
  