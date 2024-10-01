import { TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {},
    "&:hover .MuiOutlinedInput-notchedOutline": {},
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {},
  },

  "& .MuiInputBase-input": {
    padding: "12px 12px",
    fontSize: "12px",
    lineHeight: "1.5",
    "&::placeholder": {
      fontSize: "12px",
    },
  },

  "& .MuiInputLabel-root": {
    fontSize: "12px",
    transform: "translate(12px, 12px) scale(1)",
    "&.Mui-focused": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
  },
  "& .MuiInputLabel-shrink": {
    fontSize: "12px",
  },
  "& .Mui-disabled": {},
  "& .MuiSelect-select": {},
  "& .MuiFormHelperText-root": {},
  "& input:-webkit-autofill": {},
}));
