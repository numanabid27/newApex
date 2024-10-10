import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";
import useModalAccordion from "@/common/components/model-accordion/use-modal-accordion.hook";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styles } from "../../../../common/components/model-accordion/model-accordion.style";
import useSessionAccordion from "../session-accordion/use-session-accordion.hook";
import { modelStyle } from "../session-accordion/session-accordion.style";
import { DISCOVERED_APP_MODEL } from "../discovered-apps/discovered-apps.constant";
import { DISCOVERED_APP_STYLE } from "./discovered-app-accordion.style";
import usersList from "@/common/assets/images/usersList.svg";
import ban from "@/common/assets/images/ban.svg";
import multiSelect from "@/common/assets/images/multiSelect.svg";

export const DiscoveredAppAccordion = ({ newData, isMessage }: any) => {
    const { expanded, handleChange } = useModalAccordion();
    const { handleCopy, isCopy } = useSessionAccordion();

    return (
        <Box>
            
            <Box sx={DISCOVERED_APP_STYLE.accordionHeader}>
                <Box sx={DISCOVERED_APP_STYLE.accordionHeaderFlex}>
                    <Image src={newData.application.img} alt="users" />
                    <Typography sx={DISCOVERED_APP_STYLE.accordionHeaderTitle}>{newData.application.name}</Typography>
                </Box>
                <Typography mt="20px">Claude is a family of large language models developed by Anthropic.</Typography>
                <Typography>The first model was released in March 2023. Claude 3, released in March 2024, can also analyze images.</Typography>
                <Box sx={DISCOVERED_APP_STYLE.accordionHeaderFlex} mt="20px">
                    <Box sx={DISCOVERED_APP_STYLE.headerBoxes}>
                        <Image src={usersList} alt="users" />
                        <Typography>See users</Typography>
                    </Box>
                    <Box sx={DISCOVERED_APP_STYLE.headerBoxes}>
                        <Image src={multiSelect} alt="users" />
                        <Typography>Mark as a non-risky app</Typography>
                    </Box>
                    <Box sx={DISCOVERED_APP_STYLE.headerBoxes}>
                        <Image src={ban} alt="users" />
                        <Typography>Block app</Typography>
                    </Box>
                </Box>
            </Box>


            <Accordion
                expanded={expanded.includes("panel2")}
                onChange={handleChange("panel2")}
                sx={{ boxShadow: "unset !important" }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={styles.accordianBg}
                >
                    <Typography sx={styles.title}>
                        <Image src={DISCOVERED_APP_MODEL[0].accordion1.icon} alt="icon" style={styles.icon} />
                        {DISCOVERED_APP_MODEL[0].accordion1.heading}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={modelStyle.desc2}>
                    {DISCOVERED_APP_MODEL.map((model, i) => (
                        <Box key={i.toString()}>
                            <Grid container sx={modelStyle.text}>
                                <Grid xs={3}>
                                    <Typography variant="h6">{model.accordion1.row1.title}</Typography>
                                </Grid>
                                <Grid xs={9}>
                                    <Box sx={DISCOVERED_APP_STYLE.rowsMainWraper}>
                                        {model.accordion1.row1.data.map((data, i) => (
                                            <Box sx={DISCOVERED_APP_STYLE.rowsWraper} key={i.toString()}>
                                                <Image src={data.image} alt="signal" />
                                                <Typography>{data.text}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={DISCOVERED_APP_STYLE.devider}></Box>
                            <Grid container sx={modelStyle.text}>
                                <Grid xs={3}>
                                    <Typography variant="h6">{model.accordion1.row2.title}</Typography>
                                </Grid>
                                <Grid xs={9}>
                                    <Box sx={DISCOVERED_APP_STYLE.tagsWraper}>
                                        {model.accordion1.row2.data.map((data, i) => (
                                            <Box sx={DISCOVERED_APP_STYLE.tag} key={i.toString()}>{data.text}</Box>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box sx={DISCOVERED_APP_STYLE.devider}></Box>
                            <Grid container sx={modelStyle.text}>
                                <Grid xs={3}>
                                    <Typography variant="h6">{model.accordion1.row3.title}</Typography>
                                </Grid>
                                <Grid xs={9}>
                                    <Box sx={DISCOVERED_APP_STYLE.rowsMainWraper}>
                                        {model.accordion1.row3.data.map((data, i) => (
                                            <Chip
                                                sx={DISCOVERED_APP_STYLE.cellChip}
                                                label={data.text}
                                                variant="outlined"
                                                key={i.toString()}
                                            />
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>

                            <Box sx={DISCOVERED_APP_STYLE.devider}></Box>
                            <Grid container sx={modelStyle.text}>
                                <Grid xs={3}>
                                    <Typography variant="h6">{model.accordion1.row4.title}</Typography>
                                </Grid>
                                <Grid xs={9}>
                                    {model.accordion1.row4.data.map((data, i) => (
                                        <Typography key={i.toString()}>{data.text}</Typography>
                                    ))}
                                </Grid>
                            </Grid>

                            <Box sx={DISCOVERED_APP_STYLE.devider}></Box>
                            <Grid container sx={modelStyle.text}>
                                <Grid xs={3}>
                                    <Typography variant="h6">{model.accordion1.row5.title}</Typography>
                                </Grid>
                                <Grid xs={9}>
                                    <Box sx={DISCOVERED_APP_STYLE.rowsMainWraper}>
                                        {model.accordion1.row5.data.map((data, i) => (
                                            <Box sx={DISCOVERED_APP_STYLE.rowsWraper} key={i.toString()}>
                                                <Image src={data.icon} alt="signal" />
                                                <Typography>{data.text}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid container sx={modelStyle.text} mt={2}>
                                <Grid xs={3}></Grid>
                                <Grid xs={9}>
                                    <Box sx={DISCOVERED_APP_STYLE.tagsWraper}>
                                        {model.accordion1.row6.data.map((data, i) => (
                                            <Box sx={DISCOVERED_APP_STYLE.tag} key={i.toString()}>
                                                {data.icon ? <Image src={data.icon} alt="icon" /> : ''}
                                                <Typography>{data.text}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    ))}

                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded.includes("panel3")}
                onChange={handleChange("panel3")}
                sx={{ boxShadow: "none" }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={styles.accordianBg}
                >
                    <Typography sx={styles.title}>
                        <Image src={DISCOVERED_APP_MODEL[0].accordion2.icon} alt="icon" style={styles.icon} />
                        {DISCOVERED_APP_MODEL[0].accordion2.heading}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails sx={modelStyle.desc2}>
                    <Typography sx={DISCOVERED_APP_STYLE.accordionHeading} mb="8px" mt="30px">{DISCOVERED_APP_MODEL[0].accordion2.row1.title}</Typography>
                    {DISCOVERED_APP_MODEL[0].accordion2.row1.data.map((data, i) => (
                        <Grid container mt="12px" key={i.toString()}>
                            <Grid item xs={5}>
                                <Typography color="#64758B">{data.dataKey}</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography color="#334155">{data.dataValue}</Typography>
                            </Grid>
                        </Grid>
                    ))}

                    <Box sx={DISCOVERED_APP_STYLE.devider}></Box>
                    <Typography sx={DISCOVERED_APP_STYLE.accordionHeading} mb="8px">{DISCOVERED_APP_MODEL[0].accordion2.row2.title}</Typography>
                    {DISCOVERED_APP_MODEL[0].accordion2.row2.data.map((data, i) => (
                        <Grid container mt="12px" key={i.toString()}>
                            <Grid item xs={5}>
                                <Typography color="#64758B">{data.dataKey}</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography color="#334155">{data.dataValue}</Typography>
                            </Grid>
                        </Grid>
                    ))}

                    <Box sx={DISCOVERED_APP_STYLE.devider}></Box>
                    <Typography sx={DISCOVERED_APP_STYLE.accordionHeading} mb="20px">{DISCOVERED_APP_MODEL[0].accordion2.row3.title}</Typography>
                    <Box sx={DISCOVERED_APP_STYLE.tagsWraper}>
                        {DISCOVERED_APP_MODEL[0].accordion2.row3.data.map((data, i) => (
                            <Box sx={DISCOVERED_APP_STYLE.tag} key={i.toString()}>
                                {data.icon ? <Image src={data.icon} alt="icon" /> : ''}
                                <Typography>{data.text}</Typography>
                            </Box>
                        ))}
                    </Box>

                    <Box sx={DISCOVERED_APP_STYLE.devider}></Box>
                    <Typography sx={DISCOVERED_APP_STYLE.accordionHeading} mb="20px">{DISCOVERED_APP_MODEL[0].accordion2.row4.title}</Typography>
                    <Box pb={8}>
                        {DISCOVERED_APP_MODEL[0].accordion2.row4.data.map((data, i) => (
                            <Typography mb={4} key={i.toString()}>{data.text}</Typography>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
};
