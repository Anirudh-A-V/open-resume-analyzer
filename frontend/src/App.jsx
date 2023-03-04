import { FaCloudUploadAlt } from "react-icons/fa";
function App() {
  const experiences = ["1", "2", "3", "4", "5+"];
  const institute = ["IIT", "NIT", "Kerala University", "CUCET"];
  const skills = ["React", "Next.js", "Node.js", "Figma"];
  const languages = ["Hindi", "English", "Malayalam"];

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
      <div className="flex text-gray-700 flex-row p-5 px-20">
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
        </div>
      </div>
    </div>
  );
}

export default App;
