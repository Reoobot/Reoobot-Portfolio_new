import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import soundwave from '../../assets/soundwave.png'
import receta from '../../assets/recceta.png'
import { ListItemButton } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CardProject() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div data-aos="fade-right">
      <Button onClick={handleOpen} >
       <img className='img_receta' 
              src={receta} alt="receta" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Recette Social
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Created with React, nestjs, mondoDB, node, npm, Typescript, axios technologies, 
          such as trellor, github, figma, canva...
          March 2023
          </Typography>
          <ListItemButton href='https://client-six-gules.vercel.app' target='_blank'>
             <img className='img_sound' 
              src={receta} alt="receta" />
      </ListItemButton>
        </Box>
      </Modal>
    </div>
  );
}






















