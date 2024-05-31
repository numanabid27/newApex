import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const SixthComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "023fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
                },
              }
            : {
                pathname: "/issues",
              }
        }
        style={styles.linkStyle}
      >
        <Typography sx={{ fontSize: "14px !important", color: "#344054" }}>
          <span
            style={{
              border: "1px solid #EAECF0",
              borderRadius: "16px",
              padding: "2px 8px",
              marginRight: "4px",
            }}
          >
            Google Bard
          </span>
          is trending -
          <span style={{ color: "#1570EF" }}>
            see what your users are using it for{" "}
          </span>
          <span
            style={{ color: "#98A2B3", fontSize: "14px", marginLeft: "13px" }}
          >
            5 hours ago
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
