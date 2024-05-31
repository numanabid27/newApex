import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const ThirdComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "PII",
                },
              }
            : {
                pathname: "/issues",
              }
        }
        style={styles.linkStyle}
      >
        <Typography sx={{ color: "#344054", fontSize: "14px !important" }}>
          <span
            style={{
              backgroundColor: "#F2F4F7",
              color: "#344054",
              fontSize: "14px",
              fontWeight: 500,
              padding: "3px 6px",
              borderRadius: "2px",
            }}
          >
            Suspicious Behavior
          </span>
          <span style={{ marginLeft: "7px" }}>
            5 encrypted and 4 non-textual responses received across 4
          </span>
          <span style={{ color: "#1570EF" }}> Google Bard</span>
          <span> users from Marketing department</span>
          <span
            style={{ color: "#98A2B3", fontSize: "14px", marginLeft: "13px" }}
          >
            4 days ago
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
