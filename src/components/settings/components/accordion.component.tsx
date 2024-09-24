import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Link } from '@mui/material';
import { SettingsStyle } from '../settings.style';
import { AI_APPLICATION_TAB, DETECTION_SERVICES_TABS, FILE_SYSTEMS_TAB, MESSAGING_TAB, NETWORK_AND_ENDPOINT_SECURITY_TAB, SIEM_AND_TICKETING_TAB, SSO_TAB } from '../settings.constant';
import Image from 'next/image';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box>
            <Accordion defaultExpanded expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={SettingsStyle.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{ p: '0' }}
                >
                    <Typography
                        variant="h2"
                        sx={SettingsStyle.ContentHeading}
                    >AI Applications</Typography>
                    <Link
                        href="#"
                        sx={SettingsStyle.SeeAllLink}
                    >
                        See All
                    </Link>
                </AccordionSummary>
                <AccordionDetails sx={{ p: '0' }}>
                    <Grid container sx={SettingsStyle.GridContainer}>
                        {AI_APPLICATION_TAB.map((platform, i) => (
                            <Grid item sx={SettingsStyle.GridItem} xs={12} sm={5.8} lg={3.8} key={i.toString()}>

                                <Grid container sx={SettingsStyle.ChatIconWraper}>
                                    <Grid item>
                                        <Image src={platform.icon} alt="icon" width={45} height={45} />
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="h2"
                                            sx={SettingsStyle.PlatformHeading}
                                        >
                                            {platform.title}
                                        </Typography>
                                    </Grid>
                                    {platform.online ? '' : (
                                        <>
                                            <Grid item sx={{ ml: '20px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                    <circle cx="5.5" cy="6" r="5.5" fill="#FB6514" />
                                                </svg>
                                            </Grid>
                                            <Grid item sx={{ ml: '7px' }}>
                                                <Typography>Offline</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Typography sx={SettingsStyle.PlatformText}>{platform.text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={SettingsStyle.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{ p: '0' }}
                >
                    <Typography
                        variant="h2"
                        sx={SettingsStyle.ContentHeading}
                    >
                        Network & Endpoint security
                    </Typography>
                    <Link
                        href="#"
                        sx={SettingsStyle.SeeAllLink}
                    >
                        See All
                    </Link>
                </AccordionSummary>
                <AccordionDetails sx={{ p: '0' }}>
                    <Grid container sx={SettingsStyle.GridContainer}>
                        {NETWORK_AND_ENDPOINT_SECURITY_TAB.map((platform, i) => (
                            <Grid item sx={SettingsStyle.GridItem} xs={12} sm={5.8} lg={3.8} key={i.toString()}>

                                <Grid container sx={SettingsStyle.ChatIconWraper}>
                                    <Grid item>
                                        <Image src={platform.icon} alt="icon" width={45} height={45} />
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="h2"
                                            sx={SettingsStyle.PlatformHeading}
                                        >
                                            {platform.title}
                                        </Typography>
                                    </Grid>
                                    {platform.online ? '' : (
                                        <>
                                            <Grid item sx={{ ml: '20px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                    <circle cx="5.5" cy="6" r="5.5" fill="#FB6514" />
                                                </svg>
                                            </Grid>
                                            <Grid item sx={{ ml: '7px' }}>
                                                <Typography>Offline</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Typography sx={SettingsStyle.PlatformText}>{platform.text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={SettingsStyle.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{ p: '0' }}
                >
                    <Typography
                        variant="h2"
                        sx={SettingsStyle.ContentHeading}
                    >
                        Messaging
                    </Typography>
                    <Link
                        href="#"
                        sx={SettingsStyle.SeeAllLink}
                    >
                        See All
                    </Link>
                </AccordionSummary>
                <AccordionDetails
                    sx={{ p: '0' }}
                >
                    <Grid container sx={SettingsStyle.GridContainer}>
                        {MESSAGING_TAB.map((platform, i) => (
                            <Grid item sx={SettingsStyle.GridItem} xs={12} sm={5.8} lg={3.8} key={i.toString()}>

                                <Grid container sx={SettingsStyle.ChatIconWraper}>
                                    <Grid item>
                                        <Image src={platform.icon} alt="icon" width={45} height={45} />
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="h2"
                                            sx={SettingsStyle.PlatformHeading}
                                        >
                                            {platform.title}
                                        </Typography>
                                    </Grid>
                                    {platform.online ? '' : (
                                        <>
                                            <Grid item sx={{ ml: '20px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                    <circle cx="5.5" cy="6" r="5.5" fill="#FB6514" />
                                                </svg>
                                            </Grid>
                                            <Grid item sx={{ ml: '7px' }}>
                                                <Typography>Offline</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Typography sx={SettingsStyle.PlatformText}>{platform.text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={SettingsStyle.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    sx={{ p: '0' }}
                >
                    <Typography
                        variant="h2"
                        sx={SettingsStyle.ContentHeading}
                    >
                        File systems
                    </Typography>
                    <Link
                        href="#"
                        sx={SettingsStyle.SeeAllLink}
                    >
                        See All
                    </Link>
                </AccordionSummary>
                <AccordionDetails
                    sx={{ p: '0' }}
                >
                    <Grid container sx={SettingsStyle.GridContainer}>
                        {FILE_SYSTEMS_TAB.map((platform, i) => (
                            <Grid item sx={SettingsStyle.GridItem} xs={12} sm={5.8} lg={3.8} key={i.toString()}>

                                <Grid container sx={SettingsStyle.ChatIconWraper}>
                                    <Grid item>
                                        <Image src={platform.icon} alt="icon" width={45} height={45} />
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="h2"
                                            sx={SettingsStyle.PlatformHeading}
                                        >
                                            {platform.title}
                                        </Typography>
                                    </Grid>
                                    {platform.online ? '' : (
                                        <>
                                            <Grid item sx={{ ml: '20px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                    <circle cx="5.5" cy="6" r="5.5" fill="#FB6514" />
                                                </svg>
                                            </Grid>
                                            <Grid item sx={{ ml: '7px' }}>
                                                <Typography>Offline</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Typography sx={SettingsStyle.PlatformText}>{platform.text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={SettingsStyle.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    sx={{ p: '0' }}
                >
                    <Typography
                        variant="h2"
                        sx={SettingsStyle.ContentHeading}
                    >
                        SSO
                    </Typography>
                    <Link
                        href="#"
                        sx={SettingsStyle.SeeAllLink}
                    >
                        See All
                    </Link>
                </AccordionSummary>
                <AccordionDetails
                    sx={{ p: '0' }}
                >
                    <Grid container sx={SettingsStyle.GridContainer}>
                        {SSO_TAB.map((platform, i) => (
                            <Grid item sx={SettingsStyle.GridItem} xs={12} sm={5.8} lg={3.8} key={i.toString()}>

                                <Grid container sx={SettingsStyle.ChatIconWraper}>
                                    <Grid item xs={2}>
                                        <Image src={platform.icon} alt="icon" width={45} height={45} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography
                                            variant="h2"
                                            sx={SettingsStyle.PlatformHeading}
                                        >
                                            {platform.title}
                                        </Typography>
                                    </Grid>
                                    {platform.online ? '' : (
                                        <>
                                            <Grid item sx={{ ml: '20px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                    <circle cx="5.5" cy="6" r="5.5" fill="#FB6514" />
                                                </svg>
                                            </Grid>
                                            <Grid item sx={{ ml: '7px' }}>
                                                <Typography>Offline</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Typography sx={SettingsStyle.PlatformText}>{platform.text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} sx={SettingsStyle.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                    sx={{ p: '0' }}
                >
                    <Typography
                        variant="h2"
                        sx={SettingsStyle.ContentHeading}
                    >
                        SIEM & Ticketing
                    </Typography>
                    <Link
                        href="#"
                        sx={SettingsStyle.SeeAllLink}
                    >
                        See All
                    </Link>
                </AccordionSummary>
                <AccordionDetails
                    sx={{ p: '0' }}
                >
                    <Grid container sx={SettingsStyle.GridContainer}>
                        {SIEM_AND_TICKETING_TAB.map((platform, i) => (
                            <Grid item sx={SettingsStyle.GridItem} xs={12} sm={5.8} lg={3.8} key={i.toString()}>

                                <Grid container sx={SettingsStyle.ChatIconWraper}>
                                    <Grid item xs={2}>
                                        <Image src={platform.icon} alt="icon" width={45} height={45} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography
                                            variant="h2"
                                            sx={SettingsStyle.PlatformHeading}
                                        >
                                            {platform.title}
                                        </Typography>
                                    </Grid>
                                    {platform.online ? '' : (
                                        <>
                                            <Grid item sx={{ ml: '20px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                    <circle cx="5.5" cy="6" r="5.5" fill="#FB6514" />
                                                </svg>
                                            </Grid>
                                            <Grid item sx={{ ml: '7px' }}>
                                                <Typography>Offline</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Typography sx={SettingsStyle.PlatformText}>{platform.text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} sx={SettingsStyle.Accordion}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                    sx={{ p: '0' }}
                >
                    <Typography
                        variant="h2"
                        sx={SettingsStyle.ContentHeading}
                    >
                        Detection services
                    </Typography>
                    <Link
                        href="#"
                        sx={SettingsStyle.SeeAllLink}
                    >
                        See All
                    </Link>
                </AccordionSummary>
                <AccordionDetails
                    sx={{ p: '0' }}
                >
                    <Grid container sx={SettingsStyle.GridContainer}>
                        {DETECTION_SERVICES_TABS.map((platform, i) => (
                            <Grid item sx={SettingsStyle.GridItem} xs={12} sm={5.8} lg={3.8} key={i.toString()}>

                                <Grid container sx={SettingsStyle.ChatIconWraper}>
                                    <Grid item xs={2}>
                                        <Image src={platform.icon} alt="icon" width={45} height={45} />
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography
                                            variant="h2"
                                            sx={SettingsStyle.PlatformHeading}
                                        >
                                            {platform.title}
                                        </Typography>
                                    </Grid>
                                    {platform.online ? '' : (
                                        <>
                                            <Grid item sx={{ ml: '20px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                                    <circle cx="5.5" cy="6" r="5.5" fill="#FB6514" />
                                                </svg>
                                            </Grid>
                                            <Grid item sx={{ ml: '7px' }}>
                                                <Typography>Offline</Typography>
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                                <Typography sx={SettingsStyle.PlatformText}>{platform.text}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}
