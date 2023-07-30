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
  
  interface IApiModalProps {
    children?: React.ReactNode;
    modalButtonText: string;
    modalHeaderText: string;
    modalCloseText: string;
    className?: string;
  }
  
  const ApiModal: React.FC<IApiModalProps> = ({
    children,
    modalButtonText,
    modalCloseText,
    modalHeaderText,
    className,
  }: IApiModalProps) => {
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
  
  export default ApiModal;
  