import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "../../app/hooks";
import { setEmail } from "../email/emailSlice";
import { setPopupOpen } from "../email/emailSlice";
import { useAppSelector } from "../../app/hooks";
import { selectPopupOpen } from "../email/emailSlice";
import { useScreenSize } from "../../app/hooks";
import "./style.scss";

export default function EmailPopup(props: any) {
  const { isMobile } = useScreenSize();
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${isMobile ? 400 : 600}`,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const modalTitleStyle = {
    textAlign: "center",
    color: "#103B5E",
    marginBottom: "20px",
  };
  const [emailString, setEmailString] = React.useState("");
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setPopupOpen(false));
  const popupOpen = useAppSelector(selectPopupOpen);
  const handleChange = (e: any) => {
    setEmailString(e.target.value);
    dispatch(setEmail(emailString));
  };
  const handleClick = () => {
    dispatch(setEmail(emailString));
    dispatch(setPopupOpen(false));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={popupOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={popupOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h4"
              component="h4"
              sx={modalTitleStyle}
            >
              DON'T MISS OUT
            </Typography>
            <Typography
              id="transition-modal-subtitle"
              variant="h6"
              component="h6"
              sx={modalTitleStyle}
            >
              Subscribe to get exclusive deals sent directly to your inbox.
            </Typography>
            <input
              className="email-input mb-[20px] h-[40px]"
              type="text"
              placeholder="Enter your email"
              onChange={handleChange}
              onFocus={() => {}}
            />
            <button
              className="w-full h-[50px] bg-green-200 text-white text-[16px] px-10 py-2 rounded-[4px] font-medium"
              onClick={handleClick}
            >
              SUBSCRIBE
            </button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
