import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';
import { IntegrationPopUpStyle } from './integration-popup.style';
import { INTEGRATION_POP_UP_FIELDS } from './integration-popup.constant';
import greenPlus from '@/common/assets/images/green-plus.svg';
import apexIcon from '@/common/assets/images/apexLogo.svg';

export interface IntegrationPopUpProps {
    open: boolean;
    selectedPlatform: {
        icon: string;
        title: string;
        text: string;
    }; // Add other necessary fields from the platform data
    onClose: () => void;
}

export default function IntegrationPopUp({ open, selectedPlatform, onClose }: IntegrationPopUpProps) {
    return (
        <Dialog sx={IntegrationPopUpStyle.DialogWraper} onClose={onClose} open={open}>
            <Box sx={IntegrationPopUpStyle.DialogHeader}>
                <Box sx={IntegrationPopUpStyle.IconBox}>
                    <Image src={selectedPlatform.icon} alt={selectedPlatform.title} width={64} height={33} />
                </Box>
                <Box>
                    <Image src={greenPlus} alt='box' width={28} height={28} />
                </Box>
                <Box sx={IntegrationPopUpStyle.IconBox}>
                    <Image src={apexIcon} alt='box' width={81} height={23} />
                </Box>
            </Box>

            {INTEGRATION_POP_UP_FIELDS.map((field, i) => (
                <Box sx={{ mt: '26px' }} key={i.toString()}>
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
                <Button variant="text" sx={IntegrationPopUpStyle.CancelButton} onClick={onClose}>
                    Cancel
                </Button>
                <Box sx={IntegrationPopUpStyle.ButtonsWraper}>
                    <Button variant="text" sx={IntegrationPopUpStyle.ConnectionButton}>
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
