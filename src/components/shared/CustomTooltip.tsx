import { Tooltip } from "@chakra-ui/react";


// From chakra UI tooltip
type Logical = "start-start" | "start-end" | "end-start" | "end-end" | "start" | "end";

interface ITooltipProps {
    children?: React.ReactNode;
    label: string;
    fontSize?: string;
    placement: Logical;
    className?: string;
}

const CustomTooltip: React.FC<ITooltipProps> = ({children, label, fontSize, placement, className}) => {
    return (
        <Tooltip className={className} label={label} fontSize={fontSize} placement={placement}>
            {children}
        </Tooltip>
    )
}

export default CustomTooltip;