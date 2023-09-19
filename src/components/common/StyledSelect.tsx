import * as React from "react";
import { Select, SelectProps, selectClasses } from "@mui/base/Select";
import { SelectOption } from "@mui/base/useOption";
import { Option, optionClasses } from "@mui/base/Option";
import { Popper } from "@mui/base/Popper";
import { Box, styled } from "@mui/system";
import arrowDown from "../../assets/imgs/create-user/arrow-down.svg"
import arrowUp from "../../assets/imgs/create-user/arrow-up.svg"
export default function StyledSelect(props:any) {
  return (
    <Box>
      {
        props.label === undefined ? <></> : (
          <Box>
            <label className="text-black-300 ml-[8px] mb-[10px] text-[14px]" htmlFor={props.id}>{props.label}</label>
          </Box>
        )
      }
      <Box sx={{mt:'10px', width:'100%'}}>
        <CustomSelect renderValue={renderValue} placeholder={props.placeholder} id={props.id}>
          {props.options.map((item: any) => 
            <StyledOption value={item.value}>{item.text}</StyledOption>
          )}
        </CustomSelect>
      </Box>
    </Box>
  );
}

function CustomSelect(props: SelectProps<number, false>) {
  const slots: SelectProps<number, false>["slots"] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots
  };

  return <Select {...props} slots={slots} />;
}

function renderValue(option: SelectOption<number> | null) {
  if (option == null) {
    return null;
  }

  return (
    <span>
      {option.label}
    </span>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75"
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f"
};

const StyledButton = styled("button")(
  ({ theme }) => `
  position: relative;
  font-family: Trebuchet MS;
  font-size: 14px;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  text-align: left;
  line-height: 1.5;
  height: 48px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 2px solid var(--dark-variant-5, #C1D6E9);
  color: #84AED3;
  box-shadow: 0px 2px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: #3F69FA;
  }

  &:focus {
    border: 2px solid #3F69FA;
  }

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectClasses.expanded} {
    &::after {
      content: url(${arrowDown});
    }
  }

  &::after {
    content: url(${arrowUp});
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  min-width: 110px;
  font-family: Trebuchet MS;
  font-size: 14px;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  width: 100%;
  border-radius: 6px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 2px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  `
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 6px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;
