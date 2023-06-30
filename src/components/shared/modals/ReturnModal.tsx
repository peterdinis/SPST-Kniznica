import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import { FadeProps, IModalProps } from "@/interfaces/IModal";
import { modalStyle } from "../../../styles/modalStyle";
import { motion } from "framer-motion";

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as unknown as HTMLElement, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as unknown as HTMLElement, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const ReturnModal: React.FC<IModalProps> = ({
  children,
  btnName,
  modalHeader,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="text-red-800" onClick={handleOpen}>
        {btnName}
      </button>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <h2 className="text-center font-bold text-2xl">{modalHeader}</h2>
              {children}
            </Box>
          </Fade>
        </Modal>
      </motion.div>
    </>
  );
};

export default ReturnModal;
