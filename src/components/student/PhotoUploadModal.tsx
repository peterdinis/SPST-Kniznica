import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSpring, animated } from 'react-spring';
import AddIcon from '@mui/icons-material/Add';
import { style } from './style';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface IModalProps {
    btnName: string;
    children?: React.ReactNode;
}

export const PhotoUploadModal: React.FC<IModalProps> = ({children, btnName}: IModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <span onClick={handleOpen}><AddIcon />{btnName}</span>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <h2 className="text-center mt-2 text-3xl font-bold">Nahranie novej fotky</h2>
            <div className="mt-6">
                {children}
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}