import { Link } from "react-router-dom";
import { selectUserId } from "../email/emailSlice";
import { useAppSelector } from "../../app/hooks";
import { selectMoveAmount } from "../size/sizeSlice";
import { selectMoveVehicle } from "../size/sizeSlice";
import { selectArrivalDate } from "../date/dateSlice";

const NextButton = (props: any) => {
  const userId = useAppSelector(selectUserId);
  const moveAmount = useAppSelector(selectMoveAmount);
  const moveVehicle = useAppSelector(selectMoveVehicle);
  const arrivalDate = useAppSelector(selectArrivalDate);

  const handleClick = () => {
    if (props.link === "/date") {
      let payload = {
        id: userId,
        moveAmount: moveAmount,
        moveVehicle: moveVehicle,
      };
      try {
        fetch(
          `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/update-collection`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
      } catch (err) {
        console.log("err", err);
      }
    } else if (props.link === "/name") {
      let payload = {
        id: userId,
        arrivalDate: arrivalDate,
      };
      try {
        fetch(
          `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/update-collection`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        )
      } catch (err) {
        console.log("err", err);
      }
    }
  };
  return (
    <>
      <div>
        <Link to={props.link}>
          <button
            className="h-[60px] bg-green-200 text-white text-[24px] px-10 py-2 rounded-[4px] font-medium"
            onClick={handleClick}
          >
            {[props.desc]}
          </button>
        </Link>
      </div>
    </>
  );
};

export default NextButton;
