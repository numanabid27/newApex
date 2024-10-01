import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputAdornment, MenuItem, TextFieldProps } from "@mui/material";
import React from "react";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { StyledTextField } from "./custom-textfield.style";

type IconType = "search" | "clear" | "password" | React.ReactNode;

type CustomTextFieldProps<TFieldValues extends FieldValues = FieldValues> =
  Omit<TextFieldProps, "name"> & {
    name: FieldPath<TFieldValues>;
    icon?: IconType;
    onIconClick?: () => void;
    select?: boolean;
    options?: { value: string; label: string }[];
  };

const CustomTextField = <TFieldValues extends FieldValues = FieldValues>({
  name,
  type,
  icon,
  onIconClick,
  select,
  options = [],
  ...rest
}: CustomTextFieldProps<TFieldValues>): JSX.Element => {
  const { control } = useFormContext<TFieldValues>();

  const handleIconClick = () => {
    onIconClick?.();
  };

  const renderIcon = () => {
    switch (icon) {
      case "search":
        return <SearchIcon />;
      case "clear":
        return <ClearIcon />;
      default:
        return icon as React.ReactNode;
    }
  };

  const endAdornment =
    icon || type === "password" || type === "search" ? (
      <InputAdornment position="end">
        {type === "password" || type === "search" ? (
          <Box
            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            onClick={handleIconClick}
          >
            {renderIcon()}
          </Box>
        ) : (
          <>{renderIcon()}</>
        )}
      </InputAdornment>
    ) : null;

  return (
    <Controller<TFieldValues>
      name={name}
      control={control}
      render={({
        field,
        fieldState: { error },
      }: {
        field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
        fieldState: ControllerFieldState;
      }) => (
        <StyledTextField
          {...rest}
          {...field}
          select={select}
          autoComplete="new-password"
          error={!!error}
          multiline={type === "textarea"}
          helperText={error?.message}
          fullWidth={true}
          variant="outlined"
          SelectProps={{
            displayEmpty: true,
            renderValue: (value: unknown) => {
              const selectedValue = value as string | undefined;
              const selectedOption = options.find(
                (option) => option.value === selectedValue
              );
              return selectedOption ? selectedOption.label : selectedValue;
            },
          }}
          InputLabelProps={{
            ...rest.InputLabelProps,
          }}
          InputProps={{
            ...rest.InputProps,
            endAdornment: endAdornment,
          }}
        >
          {select &&
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </StyledTextField>
      )}
    />
  );
};

export default CustomTextField;
