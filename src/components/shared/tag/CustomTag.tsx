import { Tag } from "@chakra-ui/react";

interface ITagProps {
  children?: React.ReactNode;
  colorScheme: string;
  size: string;
  variant: string;
}

const CustomTag: React.FC<ITagProps> = ({
  children,
  colorScheme,
  size,
  variant,
}: ITagProps) => {
  return (
    <Tag colorScheme={colorScheme} variant={variant} size={size}>
      {children}
    </Tag>
  );
};

export default CustomTag;
