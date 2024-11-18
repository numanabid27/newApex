"use client";

import { Box, Grid, Link, Typography } from "@mui/material";
import SwitchGraph2 from "./components/switch-graph/switchGrpah.component";
import { Dashboard2Style } from "./dashboard-2.style";
import { ACTIVE_RULES_CHART, BARCHART_OPTIONS, DISABLED_RULES_CONTENT, PRICE_CARDS, RISKY_USERS_CHARTS, TOOLS_CONTENT, TOP_OPEN_ISSUES } from "./dashboard-2.constant";
import ReactEcharts from 'echarts-for-react';
import signals from '@/common/assets/images/signals.svg';
import verifiedUser from '@/common/assets/images/verified_user.svg';
import Image from "next/image";
import SessionTimeUser from "../dashboard/components/session-time-user/session-time-user.component";
import dashboardGraph from '@/common/assets/images/dashboard-graph.png';
import dashboardGraph2 from '@/common/assets/images/dashboard-graph2.svg';


function Dashboard2() {
    return (
        <>
            <Box sx={Dashboard2Style.PageBG}>
                {/* <Box sx={Dashboard2Style.GraphWraper}>
                    <Typography variant="h2" sx={Dashboard2Style.GraphHeading}>Issues flow</Typography>
                    <Box sx={{width:'100vw'}}>
                        <SwitchGraph2 scale={true} />
                    </Box>

                    <Box sx={Dashboard2Style.StaticAlert}>
                        <Image src={verifiedUser} alt="verified" width={17} height={17} />
                        <Typography sx={Dashboard2Style.StaticAlertValue}>95%</Typography>
                        <Typography sx={Dashboard2Style.StaticAlertText}>Automatically prevented</Typography>
                    </Box>

                    
                </Box> */}
                <Box sx={Dashboard2Style.dashboardMain}>
                    <Typography variant="h2" sx={Dashboard2Style.GraphHeading2}>Issues flow</Typography>
                    <Image src={dashboardGraph2} alt="verified"  />
                </Box>
                <Grid container sx={{ mt: '45px' }} rowGap={6}>
                    <Grid item md={6}>
                        <Box sx={Dashboard2Style.ChartsContainer}>
                            <Box sx={{ px: '24px' }}>
                                <Typography variant="h2" sx={Dashboard2Style.GraphHeading}>Top open issues</Typography>
                            </Box>
                            <Box sx={Dashboard2Style.Devider}></Box>
                            {TOP_OPEN_ISSUES.map((item: any, i: number) => {
                                return (
                                    <Grid container sx={Dashboard2Style.TopOpenIssues} key={i.toString()}>
                                        <Grid xl={9}>
                                            <Typography sx={Dashboard2Style.typography}>{item.title}</Typography>
                                        </Grid>
                                        <Grid xl={1}>
                                            <Image src={item.icon} alt="image" width={36} height={27} />
                                        </Grid>
                                        <Grid xl={2}>
                                            <Box sx={Dashboard2Style.CriticalBox}>
                                                <Box sx={{
                                                    ...Dashboard2Style.CriticalDot,
                                                    backgroundColor: item.value === 'Critical' ? '#EF4444' :
                                                        item.value === 'High' ? '#F97315' :
                                                            item.value === 'Medium' ? '#F79009' : '#EF4444'
                                                }}
                                                ></Box>
                                                <Typography sx={{
                                                    ...Dashboard2Style.CriticalText,
                                                    color: item.value === 'Critical' ? '#B91C1B' :
                                                        item.value === 'High' ? '#C2410B' :
                                                            item.value === 'Medium' ? '#B54708' : '#B91C1B'
                                                }}
                                                >
                                                    {item.value}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Box>
                    </Grid>
                    <Grid item md={6} width={'100%'}>
                        <Box pl={{ md: 4, xs: 0 }} height={'100%'}>
                            <Box sx={Dashboard2Style.ChartsContainer}>
                                <Box sx={{ px: '24px' }}>
                                    <Typography variant="h2" sx={Dashboard2Style.GraphHeading}>Risky users</Typography>
                                </Box>
                                <Box sx={Dashboard2Style.Devider}></Box>
                                {RISKY_USERS_CHARTS.map((item: any, i: number) => {
                                    return (
                                        <Grid container sx={Dashboard2Style.activeUser} key={i.toString()}>
                                            <Grid xs={6} width={'100%'}>
                                                <Typography sx={Dashboard2Style.typography}>{item.title}</Typography>
                                            </Grid>
                                            <Grid container xs={6}>
                                                <Grid item xs={6}>
                                                    <Box sx={Dashboard2Style.user1}>
                                                        <Grid container gap={2}>
                                                            <Grid item>
                                                                <Image src={item.icon} alt="image" width={26} height={12} />
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography sx={Dashboard2Style.typography}>{item.value}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                                <Grid item xl={6} xs={5}>
                                                    <Box sx={Dashboard2Style.user1}>
                                                        <ReactEcharts option={item.chart} />
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ mt: '34px' }} rowGap={6}>
                    <Grid item md={6} width={'100%'}>
                        <Grid container sx={{ height: '100%' }} rowGap={6}>
                            <Grid item sm={3} width={'100%'}>
                                <Box sx={Dashboard2Style.PriceCardsWrapper}>
                                    {PRICE_CARDS.map((item, i) => (
                                        <Box sx={Dashboard2Style.PriceBox} key={i.toString()}>
                                            <Typography variant="h2" sx={Dashboard2Style.GraphHeading}>{item.title}</Typography>
                                            <Typography variant="h2" sx={Dashboard2Style.PriceValue}>{item.price}</Typography>
                                            <Typography variant="h2" sx={Dashboard2Style.PrevMonthSmallText}>{item.text}</Typography>

                                        </Box>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid item sm={9} pl={{ sm: 4, xs: 0 }} width={'100%'}>
                                <Box sx={Dashboard2Style.DashboardSessionMain}
                                    className="border border-radius bg-white"
                                >
                                    <SessionTimeUser dashboardChart={true} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} pl={{ md: 4, xs: 0 }} width={'100%'}>
                        <Box sx={Dashboard2Style.BarChartWraper}>
                            <Typography variant="h2" sx={Dashboard2Style.GraphHeading}>Conversation topics</Typography>

                            <ReactEcharts option={BARCHART_OPTIONS} />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ mt: '34px' }} rowGap={6}>
                    <Grid item md={6} width={'100%'}>
                        <Box height={'100%'} className="asdsadasdasdasdsadsadasds">
                            <Grid container rowGap={6} height={'100%'}>
                                <Grid item sm={4} width={'100%'}>
                                    <Box sx={Dashboard2Style.PriceBox}>
                                        <Typography variant="h2" sx={Dashboard2Style.GraphHeading}>Active rules</Typography>
                                        <Box sx={Dashboard2Style.HalfChartHeight}>
                                            <ReactEcharts option={ACTIVE_RULES_CHART} />
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item sm={8} pl={{ sm: 4, xs: 0 }}>
                                    <Box sx={Dashboard2Style.PriceBox}>
                                        <Box sx={Dashboard2Style.CardHeader}>
                                            <Typography variant="h2" sx={Dashboard2Style.GraphHeading}>Disabled rules</Typography>
                                            <Link href="#" sx={Dashboard2Style.SeeAllLink}>See all &gt;</Link>
                                        </Box>
                                        <Typography sx={Dashboard2Style.RulesText}>Rules which are disabled in your tenant</Typography>

                                        <Box sx={Dashboard2Style.DisabledRulesWraperMain}>
                                            {DISABLED_RULES_CONTENT.map((item, i) => (
                                                <Box sx={Dashboard2Style.DisabledRulesWraper} key={i.toString()}>
                                                    <Box>
                                                        <Typography sx={Dashboard2Style.typography}>{item.title}</Typography>
                                                    </Box>
                                                    <Box sx={Dashboard2Style.CriticalBox}>
                                                        <Box sx={Dashboard2Style.CriticalDot}></Box>
                                                        <Typography sx={Dashboard2Style.CriticalText}>{item.button}</Typography>
                                                    </Box>
                                                </Box>
                                            ))}

                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item md={6} pl={{ md: 4, xs: 0 }} width={'100%'}>
                        <Box sx={Dashboard2Style.ToolWraperMain}>
                            {TOOLS_CONTENT.map((tool, i) => (
                                <Box sx={Dashboard2Style.ToolWraper} key={i.toString()}>
                                    <Image src={tool.icon} alt="chat gpt" width={37} height={37} />
                                    <Typography sx={Dashboard2Style.ToolText}>{tool.text}</Typography>
                                </Box>

                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Dashboard2;