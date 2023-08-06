import { Tooltip } from "@chakra-ui/react";

interface ITooltipProps {
    children?: React.ReactNode;
    label: string;
    fontSize?: string;
    className?: string;
}

const CustomTooltip: React.FC<ITooltipProps> = ({children, label, fontSize, className}) => {
    return (
        <Tooltip placement="bottom" hasArrow className={className} label={label} fontSize={fontSize}>
            {children}
        </Tooltip>
    )
}

export default CustomTooltip;