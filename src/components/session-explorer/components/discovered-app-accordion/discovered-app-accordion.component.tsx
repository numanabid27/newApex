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
import chat from "@/common/assets/images/chat.svg";
import insights from "@/common/assets/images/insights.svg";
import issuesby from "@/common/assets/images/issuesby.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styles } from "../../../../common/components/model-accordion/model-accordion.style";
import user from "@/common/assets/images/circle-user-round.svg";
import panda from "@/common/assets/images/slack.svg";
import right from "@/common/assets/images/move-right.svg";
import msgs from "@/common/assets/images/messages-square.svg";
import users from "@/common/assets/images/user-round.svg";
import saprk from "@/common/assets/images/reply-user.svg";
import { MESSAGES } from "../sessions/session.constant";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import useSessionAccordion from "../session-accordion/use-session-accordion.hook";
import { modelStyle } from "../session-accordion/session-accordion.style";
import { DISCOVERED_APP_MODEL } from "../discovered-apps/discovered-apps.constant";
import { DISCOVERED_APP_STYLE } from "./discovered-app-accordion.style";

export const DiscoveredAppAccordion = ({ newData, isMessage }: any) => {
    const { expanded, handleChange } = useModalAccordion();
    const { handleCopy, isCopy } = useSessionAccordion();

    return (
        <Box>
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
                    {DISCOVERED_APP_MODEL.map((model) => (
                        <>
                            <Grid container sx={modelStyle.text}>
                                <Grid xs={3}>
                                    <Typography variant="h6">{model.accordion1.row1.title}</Typography>
                                </Grid>
                                <Grid xs={9}>
                                    <Box sx={DISCOVERED_APP_STYLE.rowsMainWraper}>
                                        {model.accordion1.row1.data.map((data) => (
                                            <Box sx={DISCOVERED_APP_STYLE.rowsWraper}>
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
                                        {model.accordion1.row2.data.map((data) => (
                                            <Box sx={DISCOVERED_APP_STYLE.tag}>{data.text}</Box>
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
                                        {model.accordion1.row3.data.map((data) => (
                                            <Chip
                                                sx={DISCOVERED_APP_STYLE.cellChip}
                                                label={data.text}
                                                variant="outlined"
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
                                    {model.accordion1.row4.data.map((data) => (
                                        <Typography>{data.text}</Typography>
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
                                        {model.accordion1.row5.data.map((data) => (
                                            <Box sx={DISCOVERED_APP_STYLE.rowsWraper}>
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
                                        {model.accordion1.row6.data.map((data) => (
                                            <Box sx={DISCOVERED_APP_STYLE.tag}>
                                                {data.icon ? <Image src={data.icon} alt="icon" /> : ''}
                                                <Typography>{data.text}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </>
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
                    {DISCOVERED_APP_MODEL[0].accordion2.row1.data.map((data) => (
                        <Grid container mt="12px">
                            <Grid item xs={5}>
                                <Typography>{data.dataKey}</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography>{data.dataValue}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </AccordionDetails>
            </Accordion>

            {!isMessage && (
                <>
                    <Accordion
                        expanded={expanded.includes("panel1")}
                        onChange={handleChange("panel1")}
                        className="accordians"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={styles.accordianBg}
                        >
                            <Typography sx={styles.title}>
                                <Image src={insights} alt="" style={styles.icon} />
                                Insights
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={modelStyle.desc2}>
                            <Typography sx={modelStyle.insites}>
                                This user has <span>50 violations</span>
                            </Typography>
                            <Typography sx={modelStyle.insites}>
                                This user has total traffic of <span>2851 prompts</span>
                            </Typography>
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
                                <Image src={chat} alt="" style={styles.icon} />
                                Prompt
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={modelStyle.desc2}>
                            {Array.from({ length: 3 }, (_, i: any) => (
                                <>
                                    <Box key={i} sx={modelStyle.promptBox}>
                                        {i < 2 && (
                                            <Box sx={modelStyle.voilationBox}>
                                                <Typography variant="h6">
                                                    <span>3 Violations:</span> Email, Private key{" "}
                                                </Typography>
                                                <Image src={right} alt="" width={25} height={25} />
                                            </Box>
                                        )}

                                        <Typography sx={modelStyle.promptDate}>
                                            <span>15:41:03</span> Sunday 25 March 2024
                                        </Typography>
                                        <Box sx={modelStyle.promptName}>
                                            <Image src={user} alt="" width={20} height={20} />
                                            <Typography variant="h6">Sent prompt </Typography>
                                        </Box>
                                        <Box sx={{ ...modelStyle.codeBox, background: "#fff" }}>
                                            <pre>
                                                {`
      // Import the package here
      import MyPackage from 'my-package';...
                    `}
                                            </pre>
                                        </Box>

                                        <Box sx={modelStyle.promptName}>
                                            <Image src={panda} alt="" width={20} height={20} />
                                            <Typography variant="h6">Github Copilot</Typography>
                                        </Box>
                                        <Box sx={{ ...modelStyle.codeBox, background: "#475467" }}>
                                            <pre style={{ color: "#fff" }}>
                                                {`
      // You can then use your package within this API route
      export default function handler(req, res) {...
                    `}
                                            </pre>
                                        </Box>
                                    </Box>
                                </>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </>
            )}
        </Box>
    );
};
