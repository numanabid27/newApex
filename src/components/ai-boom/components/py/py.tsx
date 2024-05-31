"use-client";

import React, { useEffect, useState } from "react";
import { styles } from "./style";
import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Py = ({ items, handleClick, hoveredIndex }: any) => {
  return (
    <>
      {hoveredIndex && (
        <Box sx={styles.pyBg}>
          {items.endsWith(".txt") ? (
            <>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Scelerisque eu ultrices vitae auctor eu augue ut. Hac
                  habitasse platea dictumst quisque sagittis purus. Convallis
                  aenean et tortor at. Bibendum ut tristique et egestas quis
                  ipsum suspendisse ultrices. Sem integer vitae justo eget magna
                  fermentum iaculis. Quis ipsum suspendisse ultrices gravida
                  dictum fusce ut placerat orci. Tellus integer feugiat
                  scelerisque varius morbi enim nunc faucibus a. Sit amet
                  aliquam id diam maecenas ultricies mi. Malesuada fames ac
                  turpis egestas. Leo vel fringilla est ullamcorper eget nulla
                  facilisi etiam.
                </Typography>
                <Typography sx={styles.paragraph}>
                  Sit amet tellus cras adipiscing enim eu. Facilisis magna etiam
                  tempor orci eu lobortis elementum. In tellus integer feugiat
                  scelerisque varius morbi. Duis ultricies lacus sed turpis
                  tincidunt id aliquet. Cursus eget nunc scelerisque viverra
                  mauris. Posuere lorem ipsum dolor sit amet consectetur
                  adipiscing elit duis. Integer quis auctor elit sed. Libero
                  enim sed faucibus turpis in eu. Duis ultricies lacus sed
                  turpis tincidunt id aliquet. At varius vel pharetra vel.
                  Consequat mauris nunc congue nisi vitae suscipit. Cras
                  adipiscing enim eu turpis egestas pretium aenean pharetra
                  magna. Lectus arcu bibendum at varius vel pharetra vel turpis
                  nunc. Aliquet risus feugiat in ante metus dictum at tempor.
                </Typography>
              </Box>
            </>
          ) : items.endsWith(".py") ? (
            <>
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
            </>
          ) : null}
        </Box>
      )}
    </>
  );
};
