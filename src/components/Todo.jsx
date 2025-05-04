import React, { useEffect, useRef, useState } from "react";
import todo_img from "./../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const inputRef = useRef();

  const addTask = () => {
    const textItem = inputRef.current.value.trim();

    if (textItem === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: textItem,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    console.log("item deleted");
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    console.log(todoList);
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

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
          ref={inputRef}
        />
        <button
          onClick={addTask}
          className="border-none rounded-full bg-purple-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* Todo list  */}
      <div>
        {todoList.map((item, index) => (
          <TodoItems
            text={item.text}
            key={index}
            isComplete={item.isComplete}
            id={item.id}
            onDelete={deleteTask}
            toggle={toggle}
          />
        ))}
        {/* <TodoItems text={"learn express"} />
        <TodoItems text={"learn react"} /> */}
      </div>
    </div>
  );
};

export default Todo;
