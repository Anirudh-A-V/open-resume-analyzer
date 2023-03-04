import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Card from "./components/card";
function App() {
  const experiences = ["1", "2", "3", "4", "5+"];
  const institute = ["IIT", "NIT", "Kerala University", "CUCET"];
  const skills = ["React", "Next.js", "Node.js", "Figma"];
  const languages = ["Hindi", "English", "Malayalam"];
  const [userdata, setUserData] = useState([
    { name: "Don Jose Mathew", mail: "Examplez@example.com", uid: 768766768 },
    { name: "Anirudh", mail: "Examplez@example.com", uid: 768762232 },
    { name: "Adarsh M", mail: "Examplez@example.com", uid: 7687669 },
  ]);
  const [selected, setSelected] = useState([]);
  const add = (id) => {
    setSelected([...selected, id]);
  };
  const remove = (id) => {
    const removed = selected.filter((item) => {
      return item != id;
    });

    setSelected([...removed]);
  };
  return (
    <div>
      <div className="bg-[#D7DFDC] p-8 px-20">
        <div className="flex items-center flex-row justify-between">
          <div className="text-3xl text-blue-700 font-bold tracking-tight ">
            Resumate
          </div>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt=""
            className="h-20 w-20 rounded-full"
          />
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-medium">Drop your Google drive link</h2>
          <div className="mt-3 relative flex flex-row items-center bg-white w-3/5 p-3 pl-6 rounded-full ">
            <FaCloudUploadAlt className="text-gray-400" size={"1.6rem"} />
            <p className="text-gray-400 text-md ml-4">Add your text files...</p>
            <input
              placeholder="Add your text files..."
              type="file"
              className="transparent absolute r-0 w-4/5 h-full bg-gray-700 opacity-0 pl-5"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between text-gray-700  p-5 px-20">
        <div className="flex-row flex items-center">
          <p className="text-sm mx-1 px-4 py-0 rounded-full tracking-tight bread-crumbs">
            Product Designer
          </p>
          <p className="text-sm mx-1 px-4 py-0 rounded-full tracking-tight bread-crumbs">
            Frontend Designer
          </p>
          <p className="text-sm mx-1 px-4 py-0 rounded-full tracking-tight bread-crumbs">
            DevOps Developer
          </p>
        </div>
        <div className="">
          <p className="p-1 font-medium flex flex-row text-emerald-500">
            Selected Candidates{" "}
            <div className="bg-emerald-500 ml-2 text-white flex items-center justify-center w-6 h-6 rounded-full ">
              {selected.length}
            </div>
          </p>
        </div>
      </div>
      <div className="flex flex-row mb-4 w-full justify-center">
        <div className=" h-full gap-2 w-4/6 grid grid-cols-3">
          {userdata.map((item) => {
            return (
              <Card selected={selected} add={add} remove={remove} data={item} />
            );
          })}
        </div>
        <div className="p-4 bg-opacity-20 flex flex-col mx-10 bg-[#D7DFDC] w-1/6">
          <p className="font-medium text-gray-700">Work Experience</p>
          <div className="mt-2 flex flex-wrap">
            {experiences.map((item) => {
              return (
                <p className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs">
                  {item}
                </p>
              );
            })}
          </div>
          <p className="font-medium mt-6 text-gray-700">Education Background</p>
          <div className="mt-2 flex flex-wrap">
            {institute.map((item) => {
              return (
                <p className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs">
                  {item}
                </p>
              );
            })}
          </div>
          <p className="font-medium mt-6 text-gray-700">Skills</p>
          <div className="mt-2 flex flex-wrap">
            {skills.map((item) => {
              return (
                <p className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs">
                  {item}
                </p>
              );
            })}
          </div>{" "}
          <p className="font-medium mt-6 text-gray-700">Languages</p>
          <div className="mt-2 flex flex-wrap">
            {languages.map((item) => {
              return (
                <p className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs">
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
