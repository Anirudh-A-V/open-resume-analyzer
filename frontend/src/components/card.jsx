import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
function Card({ data, add, remove, selected }) {
  const { name, email } = data;
  console.log(data);
  return (
    <div>
      <div
        className={`bg-gray-100    relative rounded-md border-2 p-4 m-3 ${
          selected.includes(email)
            ? "border-2 border-emerald-300 shadow-lg shadow-emerald-300/10 "
            : "border-2 border-gray-100 "
        }`}
      >
        <p className="font-medium text-xl">{name}</p>
        <p className="text-gray-600  w-full text-sm  mb-4">{email}</p>
        <p className="font-medium text-sm">React | Node.js | Link</p>
        <button className="bg-[#D7DFDC] mt-3 text-sm font-medium text-gray-800 p-1 px-5 rounded-full">
          Get Full Details
        </button>
        {!selected.includes(email) ? (
          <AiOutlineUserAdd
            onClick={() => {
              add(email);
              console.log(email);
            }}
            size={"1.2rem"}
            className="text-gray-500 cursor-pointer mt-3"
          />
        ) : (
          <CiCircleRemove
            onClick={() => {
              remove(email);
            }}
            size={"1.3rem"}
            className="text-red-500 cursor-pointer mt-3"
          />
        )}
      </div>
    </div>
  );
}

export default Card;
