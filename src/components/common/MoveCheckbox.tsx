import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAppDispatch } from "../../app/hooks";
import { setMoveVehicle } from "../size/sizeSlice";

export default function ControlledCheckbox() {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMoveVehicle(event.target.checked));
  };

  return (
    <div className="move-label">
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          />
        }
        label="Moving a vehicle?"
      />
    </div>
  );
}
