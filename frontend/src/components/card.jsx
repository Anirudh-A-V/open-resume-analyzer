import React from "react";

import { AiOutlineUserAdd } from "react-icons/ai";
function Card(props) {
  return (
    <div>
      <div className="bg-gray-100 relative rounded-md p-4 m-3">
        <p className="font-medium text-xl">Anirudh AV</p>
        <p className="text-gray-600 mb-4">don@gmail.com</p>
        <p className="font-medium text-sm">React | Node.js | Link</p>
        <button className="bg-[#D7DFDC] mt-3 text-sm font-medium text-gray-800 p-1 px-5 rounded-full">
          Get Full Details
        </button>
        <AiOutlineUserAdd size={"1.2rem"} className="text-gray-500 mt-3" />
      </div>
    </div>
  );
}

export default Card;
