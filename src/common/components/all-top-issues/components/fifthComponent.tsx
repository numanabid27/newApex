import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const FifthComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "Critical",
                },
              }
            : {
                pathname: "/issues",
              }
        }
        style={styles.linkStyle}
      >
        <Typography sx={{ fontSize: "14px !important", color: "#344054" }}>
          You are reaching your usage limit on
          <span style={{ color: "#1570EF" }}> Azure OpenAI R&D, </span>
          with 3 users (one machine)
          <span style={{ fontWeight: 700 }}> using 43% </span>
          of it
          <span
            style={{ color: "#98A2B3", fontSize: "14px", marginLeft: "13px" }}
          >
            {" "}
            3 days ago{" "}
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
