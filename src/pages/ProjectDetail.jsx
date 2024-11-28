import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from 'react-player'

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  // console.log(projectId)
  const videoLink = "http://res.cloudinary.com/dja9v00xx/video/upload/v1721415660/p9hyxrizfqntaje6kgxn.mp4"
  useEffect( ()=>{ 
      const fetchProject = async () => {
      // Fetch project data from the backend
      const response = await axios.get(`http://localhost:4004/api/project/details/${projectId}`);
      const data = response.data;
      console.log(data);
      setProject(data);
    }
    fetchProject();
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center bg-[#D9D9D9] text-white py-36">
      <div className="w-9/12 h-auto flex flex-col justify-center items-center rounded-3xl shadow-lg shadow-[#143340] bg-[#143340] py-12 gap-5">

        <div className="w-9/12 h-[35rem] overflow-hidden rounded-3xl bg-red-500">
          <img className="object-cover  w-full h-full" src={project.thumbnail} alt="Project Thumbnail"/>
        </div>

        <div className="w-9/12 h-auto">
          <h1 className="text-3xl font-normal font-abel flex flex-wrap my-6">{project.title}</h1>
          <h1 className="text-lg font-light font-abel my-3 flex flex-wrap">{project.description}</h1>
        </div>

        <div className="w-9/12 h-[30rem] rounded-3xl bg-red-500">
          <ReactPlayer url={videoLink} controls={true} width="100%" height="100%" />
        </div>

        <div className="w-9/12 h-auto">
          <h1 className="text-3xl font-normal font-abel flex flex-wrap my-6">Tech Stack </h1>
        </div>

        <div className="flex justify-start flex-col gap-6 w-9/12">
          <div className="w-36 gap-5 h-auto flex flex-col">
            <button className="text-xl bg-white rounded-2xl p-3 text-amber-500">Live Preview</button>
          </div>
          <div className="w-36 gap-5 h-auto flex flex-col">
          <a href={project.file.url}>
            <button className="text-xl w-full bg-amber-500 rounded-2xl p-3">
              Buy Now
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
