import {
  Popover,
  PopoverTrigger,
  Button,
  Portal,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from "@chakra-ui/react";

interface ICustomPoppoverProps {
    children?: React.ReactNode;
    buttonName: string;
    poppoverName: string;
    poppoverFooter?: string;
}

const CustomPoppover: React.FC<ICustomPoppoverProps> = ({children, buttonName, poppoverName, poppoverFooter}: ICustomPoppoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>{buttonName}</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>{poppoverName}</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
             {children}
          </PopoverBody>
          <PopoverFooter>{poppoverFooter}</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default CustomPoppover;
