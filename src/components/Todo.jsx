import React from "react";
import todo_img from "./../assets/todo_icon.png";

const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* Title  */}

      <div className="flex items-center mt-7 gap-2">
        <img src={todo_img} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">TO-DO List</h1>
      </div>

      {/* Input box */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          type="text"
          placeholder="Add your tasks"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500"
        />
        <button className="border-none rounded-full bg-purple-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">
          ADD +
        </button>
      </div>
    </div>
  );
};

export default Todo;
