import { useState, useRef, useEffect } from "react";
import "./style.scss";
import { useAppDispatch } from "../../app/hooks";
import { setCityTo } from "./destCitySlice";
import { setCityToName } from "./destCitySlice";

let updatedCityList: any = [];

const DropdownItems = (props: any) => {
  const cityList = props.cityList;
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  if (cityList !== undefined) {
    updatedCityList.splice(0, updatedCityList.length);
    for (let i = 0; i < cityList.length; i++) {
      let name = `${cityList[i].city}, ${cityList[i].state}`;
      let zipcode = cityList[i].zipcode;
      let id = i + 1;
      updatedCityList.push({
        id: id,
        name: name,
        zipcode: zipcode,
      });
    }
  }
  const dispatch = useAppDispatch();

  // click away listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => document.removeEventListener("mousedown", handleClick, false);
  }, []);

  const handleClick = (e: any) => {
    if (dropdownRef.current && dropdownRef.current.contains(e.target)) {
      return;
    }
    setVisible(false);
  };

  const handleChange = (e: any) => {
    props.onCityToChange(e.target.value);
    setSearchValue(e.target.value);
    if (!visible) {
      setVisible(true);
    }
  };

  const selectItem = (item: any) => {
    dispatch(setCityTo(item.zipcode));
    dispatch(setCityToName(item.name));
    props.onCityToChange(item.name);
    setSearchValue(item.name);
    setSelectedItem(item.id);
    setVisible(false);
  };

  return (
    <div className="container">
      <div tabIndex={0} className="input_container">
        <input
          className="input"
          type="text"
          placeholder="Enter City"
          value={searchValue}
          onChange={handleChange}
          onFocus={() => {
            // if (searchValue) {
            setVisible(true);
            // };
          }}
        />
      </div>
      <div ref={dropdownRef} className={`dropdown ${visible ? "v" : ""}`}>
        {visible && (
          <ul>
            {updatedCityList.length === 0 && (
              <li key="zxc" className="dropdown_item">
                no result
              </li>
            )}
            {/* you can remove the searchFilter if you get results from Filtered API like Google search */}
            {updatedCityList &&
              updatedCityList.map((x: any) => (
                <li
                  key={x.id}
                  onClick={() => selectItem(x)}
                  className="dropdown_item"
                >
                  <div className="item_text1">{x.name}</div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownItems;
