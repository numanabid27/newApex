import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import boxIcon from '@/common/assets/images/box-with-wraper.svg';
import greenPlus from '@/common/assets/images/green-plus.svg';
import apexIcon from '@/common/assets/images/apex-with-wrapper.svg';
import Image from 'next/image';
import { IntegrationPopUpStyle } from './integration-popup.style';
import { INTEGRATION_POP_UP_FIELDS } from './integration-popup.constant';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog sx={IntegrationPopUpStyle.DialogWraper} onClose={handleClose} open={open}>
            <Box sx={IntegrationPopUpStyle.DialogHeader}>
                <Box>
                    <Image src={boxIcon} alt='box' width={100} height={100} />
                </Box>
                <Box>
                    <Image src={greenPlus} alt='box' width={28} height={28} />
                </Box>
                <Box>
                    <Image src={apexIcon} alt='box' width={100} height={100} />
                </Box>
            </Box>

            {INTEGRATION_POP_UP_FIELDS.map((field) => (
                <Box sx={{ mt: '26px' }}>
                    <Typography sx={IntegrationPopUpStyle.InputLabel}>{field.label}</Typography>
                    <Box
                        component="input"
                        sx={IntegrationPopUpStyle.PopUpField}
                        type="text"
                        name={field.name}
                        id={field.id}
                        placeholder={field.placeholder}
                    />
                </Box>
            ))}

            <Box sx={IntegrationPopUpStyle.ButtonsWraperMain}>
                <Button variant="text" sx={IntegrationPopUpStyle.CancelButton}>Cancel</Button>
                <Box sx={IntegrationPopUpStyle.ButtonsWraper}>
                    <Button variant="text" sx={IntegrationPopUpStyle.ConnectionButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                            <path d="M21 13C21 10.4141 20.0518 7.93419 18.364 6.10571C16.6761 4.27723 14.3869 3.25 12 3.25C9.48395 3.26025 7.06897 4.32383 5.26 6.21833L3 8.66667M3 8.66667V3.25M3 8.66667H8M3 13C3 15.5859 3.94821 18.0658 5.63604 19.8943C7.32387 21.7228 9.61305 22.75 12 22.75C14.516 22.7397 16.931 21.6762 18.74 19.7817L21 17.3333M21 17.3333H16M21 17.3333V22.75" stroke="#17A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Test Connection
                    </Button>
                    <Button variant="text" sx={IntegrationPopUpStyle.ConnectButton}>
                        Connect
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
}

export default function IntegrationPopUp() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <Box>

            <Button variant="outlined" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </Box>
    );
}
