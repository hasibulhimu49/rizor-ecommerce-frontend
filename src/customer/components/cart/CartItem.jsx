import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CartItem = () => {
  return (
    <div className="p-5 m-5 shadow-lg border border-gray-200 rounded-md">
      <div className="flex items-center">
        <div className="w-20 h-20 lg:w-36 lg:h-36">
          <img
            className="w-full h-full object-cover object-top"
            src="https://i.pinimg.com/474x/66/23/9a/66239a1485de08d7c9d73f52e4ca2408.jpg?nii=t"
            alt="pure face wash"
          />
        </div>

        <div className="pl-5">
          <h1 className="font-bold">Men full sleeve premiun tee shirt</h1>
          <p className="text-sm opacity-50">Size: L-White</p>
          <p className="text-sm opacity-50">Rizor fashion</p>
          <div className="flex items-center gap-2.5">
            <p className="opacity-50 line-through text-sm">৳1770</p>
            <p className="font-bold">
              <FontAwesomeIcon
                icon={faBangladeshiTakaSign}
                style={{ fontSize: "12px" }}
              />
              470
            </p>
            <p className="text-green-500 text-sm">72% off</p>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center justify-center pr-5 pt-5">
          <IconButton>
            <RemoveCircleIcon />
          </IconButton>
          <span className="px-7 border border-gray-300 border-opacity-25 rounded-sm">
            3
          </span>
          <IconButton
            size="small"
            className="rounded-full! bg-gray-100 hover:bg-gray-200"
          >
            <AddCircleIcon className="text-blue-600" />
          </IconButton>
        </div>

        <div className="pt-4 pl-20">
          <button className="text-blue-500">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
