import React from "react";
import tickIcon from "./../assets/tick.png";
import notTickIcon from "./../assets/not_tick.png";
import deleteIcon from "./../assets/delete.png";

const TodoItems = ({ text, isComplete, id, onDelete, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-3">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => toggle(id)}
      >
        <img src={isComplete ? tickIcon : notTickIcon} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        src={deleteIcon}
        alt=""
        className="w-3.5 cursor-pointer"
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export default TodoItems;
