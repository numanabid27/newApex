import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const SecondComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "GPT 4",
                },
              }
            : { pathname: "/issues" }
        }
        style={styles.linkStyle}
      >
        <Typography sx={{ color: "#344054 ", fontSize: "14px !important" }}>
          <span
            style={{
              backgroundColor: "#F2F4F7",
              color: "#344054 ",
              fontSize: "14px",
              fontWeight: 500,
              padding: "3px 6px",
              borderRadius: "2px",
            }}
          >
            Suspicious Behavior
          </span>
          <span>Prompt injection detected on</span>
          <span style={{ color: "#1570EF" }}> Azure OpenAI General </span>
          potential data leakage
          <span
            style={{ color: "#98A2B3", fontSize: "14px", marginLeft: "13px" }}
          >
            {" "}
            5 hours ago{" "}
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
