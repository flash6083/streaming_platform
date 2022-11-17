import styles from "./pricing_card.module.scss"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(17, 25, 40, 1)',
  boxShadow: 24,
  p: 4,
};

const PricingCard = ({item}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (  
        <div className={styles.card}>
            <h3>{item.heading}</h3>
            <ul>
                {
                    item.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))
                }
            </ul>
            <h2>Rs. {item.price}<span>/  month</span></h2>
            <p style={{backgroundColor: `${item.btn_bg}`, 
            border:`1px solid ${item.bd}`}}
            onClick={handleOpen}
            >{item.buy_button} {`>`}</p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
               
                   <p style={{color: "white"}}>Registered to selected category  !</p> 
                   <p style={{marginTop: "2vw", color:"rgb(0, 125, 249)"}}>Experience curated service with Motion.</p>

                </Box>
            </Modal>
        </div>    
    );
}
 
export default PricingCard;