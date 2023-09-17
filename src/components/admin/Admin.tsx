import { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { AgGridReact } from "ag-grid-react";
import { useScreenSize } from "../../app/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useAppDispatch } from "../../app/hooks";
import { setIsLoggedIn } from "../auth/login/loginSlice";
import { useNavigate } from "react-router-dom";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const headers = [
  { label: "Full Name", key: "fullName" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Zip From", key: "zipFrom" },
  { label: "Zip To", key: "zipTo" },
  { label: "City From", key: "cityFrom" },
  { label: "City To", key: "cityTo" },
  { label: "Move Amount", key: "moveAmount" },
  { label: "Arrival Date", key: "arrivalDate" },
];

const Admin = () => {
  const { isDesktop, isTablet, windowSize } = useScreenSize();
  const [orderList, setOrderList] = useState([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [columnDefs] = useState([
    { field: "fullName" },
    { field: "email" },
    { field: "phone" },
    { field: "zipFrom" },
    { field: "zipTo" },
    { field: "cityFrom" },
    { field: "cityTo" },
    { field: "moveAmount" },
    { field: "arrivalDate" },
    { field: "moveVehicle" },
    { field: "isCompleted" },
    { field: "lastActivity" },
  ]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_MOVEMATER_BACKEND_URL}/api/common/get-orders`
    )
      .then((response) => response.json())
      .then((response) => {
        setOrderList(response.data);
      });
  }, []);

  const csvReport = {
    data: orderList,
    headers: headers,
    filename: "MoveMater_Report.csv",
  };

  const handleClick = () => {
    dispatch(setIsLoggedIn(false));
    navigate("/");
  };

  let content;
  if (isDesktop) {
    content = (
      <div className="w-full px-30 px-[72px] py-[8px]">
        <div className="text-blue-300 text-[12px] font-semibold mt-[20px] text-right mb-[24px]">
          <CSVLink {...csvReport}>
            <FontAwesomeIcon
              icon={icon({ name: "download" })}
              flip="horizontal"
              className="text-blue-300 pl-2"
            />
            Export to CSV
          </CSVLink>
        </div>
        <div
          className="ag-theme-alpine mx-auto"
          style={{
            height: windowSize.height - 300,
            width: windowSize.width - 144,
          }}
        >
          <AgGridReact
            rowData={orderList}
            columnDefs={columnDefs}
          ></AgGridReact>
        </div>
        <div className="text-center mt-[20px]">
          <button
            className="h-[40px] bg-green-200 text-white text-[16px] px-10 py-2 rounded-[4px] font-medium"
            onClick={handleClick}
          >
            LOG OUT
          </button>
        </div>
      </div>
    );
  } else if (isTablet) {
    content = (
      <div className="w-full px-30 px-[20px] py-[8px] ">
        <div className="text-blue-300 text-[12px] font-semibold mt-[20px] text-center mb-[24px]">
          <CSVLink {...csvReport}>
            <FontAwesomeIcon
              icon={icon({ name: "download" })}
              flip="horizontal"
              className="text-blue-300 pl-2"
            />
            Export to CSV
          </CSVLink>
        </div>
        <div
          className="ag-theme-alpine mx-auto"
          style={{
            height: windowSize.height - 300,
            width: windowSize.width - 40,
          }}
        >
          <AgGridReact
            rowData={orderList}
            columnDefs={columnDefs}
          ></AgGridReact>
        </div>
        <div className="text-center mt-[20px]">
          <button
            className="h-[40px] bg-green-200 text-white text-[16px] px-10 py-2 rounded-[4px] font-medium"
            onClick={handleClick}
          >
            LOG OUT
          </button>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="w-full px-30 px-[20px] py-[8px]">
        <div className="text-blue-300 text-[12px] font-semibold mt-[20px] text-center mb-[24px]">
          <CSVLink {...csvReport}>
            <FontAwesomeIcon
              icon={icon({ name: "download" })}
              flip="horizontal"
              className="text-blue-300 pl-2"
            />
            Export to CSV
          </CSVLink>
        </div>
        <div
          className="ag-theme-alpine mx-auto"
          style={{
            height: windowSize.height - 300,
            width: windowSize.width - 42,
          }}
        >
          <AgGridReact
            rowData={orderList}
            columnDefs={columnDefs}
          ></AgGridReact>
        </div>
        <div className="text-center mt-[20px]">
          <button
            className="h-[40px] bg-green-200 text-white text-[16px] px-10 py-2 rounded-[4px] font-medium"
            onClick={handleClick}
          >
            LOG OUT
          </button>
        </div>
      </div>
    );
  }
  return <>{content}</>;
};

export default Admin;
