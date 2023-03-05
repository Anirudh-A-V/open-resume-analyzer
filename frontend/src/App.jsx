import axios from "axios";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Card from "./components/card";

function App() {
  const experiences = ["1", "2", "3", "4", "5+"];
  const institute = ["IIT", "NIT", "Kerala University", "CUCET"];
  const skills = ["React", "Next.js", "Node.js", "Figma"];
  const languages = ["Hindi", "English", "Malayalam"];

  const [userdata, setUserData] = useState([]);

  const [loading, setLoading] = useState(false);
  // const []
  const [candidates, setCandidates] = useState([]);

  const add = (id) => {
    setCandidates([...candidates, id]);
  };

  const remove = (id) => {
    const removed = candidates.filter((item) => {
      return item != id;
    });
    setCandidates([...removed]);
  };

  const [selected, setSelected] = useState({
    experience: [],
    institute: [],
    skills: [],
    languages: [],
  });

  // Options Handling

  const handleExperience = (item) => {
    if (selected.experience.includes(item)) {
      setSelected({
        ...selected,
        experience: selected.experience.filter((element) => element !== item),
      });
    } else {
      setSelected({
        ...selected,
        experience: [...selected.experience, item],
      });
    }
    console.log(selected);
  };

  const handleInstitute = (item) => {
    if (selected.institute.includes(item)) {
      setSelected({
        ...selected,
        institute: selected.institute.filter((element) => element !== item),
      });
    } else {
      setSelected({
        ...selected,
        institute: [...selected.institute, item],
      });
    }
    console.log(selected);
  };

  const handleSkills = (item) => {
    console.log(item.target);
    if (selected.skills.includes(item)) {
      setSelected({
        ...selected,
        skills: selected.skills.filter((element) => element !== item),
      });
    } else {
      setSelected({
        ...selected,
        skills: [...selected.skills, item],
      });
    }
    console.log(selected);
  };

  const handleLanguages = (item) => {
    if (selected.languages.includes(item)) {
      setSelected({
        ...selected,
        languages: selected.languages.filter((element) => element !== item),
      });
    } else {
      setSelected({
        ...selected,
        languages: [...selected.languages, item],
      });
    }
    console.log(selected);
  };

  const getData = async () => {
    console.log("Loading");
    fetch("https://ashishanton.pythonanywhere.com/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoading(true);
      });

    // console.log();
  };
  //getData();
  //
  const [URL, setURL] = useState("");

  //console.log(code);
  // const [selected, setSelected] = useState({
  //   experience: [],
  //   institute: [],
  //   skills: [],
  //   languages: [],
  // });
  const searchData = () => {
    let work = "";
    if (selected.experience.length > 0) {
      work = "The person has had experience of ";
      selected.experience.forEach((item) => (work += item + " or "));
      work += "\n ";
    }
    console.log(work, "work");
    let institue = "";
    let index = 0;
    console.log(selected.institute);
    if (selected.institute.length > 0) {
      institue = "The person has had undergraduate education in ";
      selected.institute.forEach((item) => (institue += item + " or "));
      institue += "\n ";
    }

    let skill = "";
    console.log(selected.skills);
    if (selected.skills.length > 0) {
      skill = "The person has work experience in ";
      selected.skills.forEach((item) => (skill += item + " and "));
      skill += "\n ";
    }

    let languages = "";
    if (selected.languages.length > 0) {
      languages = "The person who understand languages ";
      selected.languages.forEach((item) => (languages += item + " and "));
      languages += "\n ";
    }
    let stringd = "";
    let k = 0;
    [work, institue, skill, languages].forEach((item, i) => {
      if (item) {
        stringd += `${++k}.` + item;
      }
    });
    postData(stringd);
  };

  const postData = (promt) => {
    setLoading(true);
    const url = URL;
    const split = url.split("/");
    const code = split[split.length - 1].split("?")[0];
    const query = {
      url: code,
      prompt: promt,
    };
    console.log(query);
    axios({
      method: "post",
      url: "https://ashishanton.pythonanywhere.com/post",
      data: query,
    }).then((e) => {
      let arr = [];
      // console.log(e.data[0]);
      for (let i = 0; i < Object.keys(e.data).length; i++) {
        console.log(e.data[i]);
        arr.push(e.data[i]);
      }
      arr = parseObject(arr);
      filterData(arr);
      console.log("Parsed Data");
      console.log(arr);
    });
  };

  const parseObject = (data) => {
    let arr = [];
    data.forEach((item) => {
      if (item) {
        let str = item;
        console.log(str);
        let obj = {};
        // remove '\n' from the string
        str = str.replace(/\\n/g, "");
        // remove '\' from the string
        str = str.replace(/\\/g, "");
        // replace 'False' with false
        str = str.replace(/False/g, "false");
        // replace 'True' with true
        str = str.replace(/True/g, "true");

        obj = JSON.parse(str);
        arr.push(obj);
      }
    });
    return arr;
  };

  const filterData = (data) => {
    let arr = [];
    let flag = true;
    data.forEach((item) => {
      console.log(item, "item");
      // if (item.includes("name") && item.includes("email")) {
      // 	flag = false;
      // }
      const keys = Object.keys(item);
      keys.forEach((key) => {
        console.log(item[key], "key");
        if (!key.includes("name") && !key.includes("email")) {
          if (!item[key]) {
            flag = false;
          }
        }
      });

      if (flag) {
        arr.push({
          name: item.name,
          email: item.email,
        });
      }
    });
    console.log("Filtered Data");
    console.log(arr);
    setUserData(arr);
    setLoading(false);
  };

  return (
    <div className="relative">
      <div className="bg-[#D7DFDC] p-8 px-20 relative">
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

            <input
              onChange={(e) => {
                setURL(e.target.value);
              }}
              placeholder="Add your text files..."
              type="text"
              className="transparent  r-0 w-4/5 h-full outline-none text-gray-700  pl-5"
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
              {candidates.length}
            </div>
          </p>
        </div>
      </div>
      <div className="flex flex-row mb-4 w-full justify-center">
        <div className=" h-full gap-2 w-4/6 grid grid-cols-3">
          {loading && (
            <div className="p-5 w-full text-gray-500 py-20 items-center text-2xl justify-center flex col-span-4">
              <p className="">Fetching Data...</p>
            </div>
          )}
          {!loading && userdata
            ? userdata.map((item) => {
                return (
                  <Card
                    selected={candidates}
                    add={add}
                    remove={remove}
                    data={{
                      name: item.name,
                      email: item.mail,
                    }}
                  />
                );
              })
            : ""}
        </div>
        <div className="p-4 bg-opacity-20 flex flex-col mx-10 bg-[#D7DFDC] w-1/6">
          <p className="font-medium text-gray-700">Work Experience</p>
          <div className="mt-2 flex flex-wrap">
            {experiences.map((item) => {
              return (
                // <p className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs" onClick={(e) => handleExperience()}>
                //   {item}
                // </p>
                selected.experience.includes(item) ? (
                  <p
                    className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs bg-gray-800 text-white  cursor-pointer"
                    onClick={() => handleExperience(item)}
                  >
                    {item}
                  </p>
                ) : (
                  <p
                    className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs cursor-pointer"
                    onClick={() => handleExperience(item)}
                  >
                    {item}
                  </p>
                )
              );
            })}
          </div>
          <p className="font-medium mt-6 text-gray-700">Education Background</p>
          <div className="mt-2 flex flex-wrap">
            {institute.map((item) => {
              return (
                // <p className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs" onClick={() => handleInstitute(item)}>
                //   {item}
                // </p>
                selected.institute.includes(item) ? (
                  <p
                    className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs bg-gray-800 text-white  cursor-pointer"
                    onClick={() => handleInstitute(item)}
                  >
                    {item}
                  </p>
                ) : (
                  <p
                    className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs cursor-pointer"
                    onClick={() => handleInstitute(item)}
                  >
                    {item}
                  </p>
                )
              );
            })}
          </div>
          <p className="font-medium mt-6 text-gray-700">Skills</p>
          <div className="mt-2 flex flex-wrap">
            {skills.map((item) => {
              return selected.skills.includes(item) ? (
                <p
                  className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs bg-gray-800 text-white  cursor-pointer"
                  onClick={() => handleSkills(item)}
                >
                  {item}
                </p>
              ) : (
                <p
                  className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs cursor-pointer"
                  onClick={() => handleSkills(item)}
                >
                  {item}
                </p>
              );
            })}
          </div>{" "}
          <p className="font-medium mt-6 text-gray-700">Languages</p>
          <div className="mt-2 flex flex-wrap">
            {languages.map((item) => {
              return selected.languages.includes(item) ? (
                <p
                  className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs bg-gray-800 text-white  cursor-pointer"
                  onClick={() => handleLanguages(item)}
                >
                  {item}
                </p>
              ) : (
                <p
                  className="text-sm m-1 px-4 py-0 rounded-full tracking-tight bread-crumbs cursor-pointer"
                  onClick={() => handleLanguages(item)}
                >
                  {item}
                </p>
              );
            })}
          </div>
          <button
            onClick={searchData}
            className="mt-3 p-2 bg-gray-800 text-white font-sm rounded-full cursor-pointer"
          >
            Search Candidates
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
