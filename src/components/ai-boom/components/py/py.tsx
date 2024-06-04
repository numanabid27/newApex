"use-client";

import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Py = ({ items, handleClick, hoveredIndex }: any) => {
  return (
    <>
      {hoveredIndex && (
        <Box >
          {items.endsWith(".docx") && items.endsWith(".docx") ? (
            <Box sx={styles.pyBg}>
              <Grid container justifyContent="space-between">
                <Grid xs={11}>
                  <Typography>{items}</Typography>
                </Grid>
                <Grid xs={1}>
                  <CloseIcon cursor="pointer" onClick={handleClick} />
                </Grid>
              </Grid>
              <Box sx={{...styles.desc, padding:"12px 12px"}}>
                <Typography sx={{ ...styles.paragraph, paddingBottom: "10px" }}>
                Analysis and Detection Over Language and Text: Enhancing AI Security with Apex
                </Typography>
                <Typography sx={{ ...styles.paragraph, paddingBottom: "10px" }}>
                  In 2024, Apex will be leveraging advanced AI capabilities to provide enriched analysis and detection over language and text. This ensures that our customers benefit from a comprehensive understanding of their interactions, enhancing security and user experience. Here’s a detailed look at the various enrichments that can be performed over chat conversations with large language models (LLMs) and how these integrate into the Apex roadmap.
                </Typography>
                <Typography sx={{ ...styles.paragraph, paddingBottom: "10px" }}>1. Topic Detection</Typography>
                <ul className="list">
                  <li>Description: Identifies the main topics or themes within a conversation.</li>
                  <li>Customer Value: Allows users to quickly understand the primary subjects being discussed, facilitating efficient content categorization and decision-making.</li>
                  <li>Apex Integration: Our roadmap includes deploying advanced topic detection algorithms that provide real-time topic analysis, helping businesses streamline their workflows and improve content management.</li>
                </ul>
              </Box>
            </Box>
          ) : items.endsWith(".xlsx") && items.endsWith(".xlsx") ? (
            <Box sx={styles.pyBg}>
              <Grid container justifyContent="space-between">
                <Grid xs={11}>
                  <Typography>{items}</Typography>
                </Grid>
                <Grid xs={1}>
                  <CloseIcon cursor="pointer" onClick={handleClick} />
                </Grid>
              </Grid>

              <Box sx={styles.descCode}>
                <Box sx={styles.code}>
                <pre style={{padding:"12px 19px", margin:"0"}}>
                    {`function alea(mini, maxi) {
    // random number in given range`}
  </pre>
  <pre style={{background:"rgb(240 68 56 / 18%)", color:"#F04438", padding:"0px 19px",margin:"0"}}>
    {`
  if (typeof maxi == "undefined") return mini * mrandom(); 
  // range 0..mini
    `}
  </pre>
  <pre style={{ padding:"0px 19px", margin:"0"}}>
    {`
return mini + mrandom() * (maxi - mini); 
// range mini..maxi
    `}
</pre>
<pre style={{ padding:"0px 19px", background:"rgb(50 213 131 / 6%)", color:"#32D583", margin:"0 0 15px"}}>
  {`
// - - - - - - - - - - - - - - - - - - - - - - -
function intAlea(mini, maxi) {
    // random integer in given range (mini..maxi - 1 or 
    0..mini - 1)
    //
    if (typeof maxi == "undefined") return mfloor(mini * 
        mrandom()); // range 0..mini - 1
    return mini + mfloor(mrandom() * (maxi - mini)); // 
    range mini .. maxi - 1
}
// - - - - - - - - - - - - - - - - - - - - - - -
  `}
</pre>

                  {/* <pre>
                    {`function alea(mini, maxi) {
    // random number in given range

    if (typeof maxi == "undefined") return mini * mrandom(); 
    // range 0..mini

    return mini + mrandom() * (maxi - mini); 
    // range mini..maxi
}
// - - - - - - - - - - - - - - - - - - - - - - -
function intAlea(mini, maxi) {
    // random integer in given range (mini..maxi - 1 or 
    0..mini - 1)
    //
    if (typeof maxi == "undefined") return mfloor(mini * 
        mrandom()); // range 0..mini - 1
    return mini + mfloor(mrandom() * (maxi - mini)); // 
    range mini .. maxi - 1
}
// - - - - - - - - - - - - - - - - - - - - - - -  
`}
                  </pre> */}
                </Box>
              </Box>
            </Box>
          ) : null}
        </Box>
      )}
    </>
  );
};
