import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Modal({ closeModal }) {
  const Navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [file, setFile] = useState(null);
  const [demoVideo, setDemoVideo] = useState(null);
  const [liveLink, setLiveLink] = useState('');
  const [techStack, setTechStack] = useState('');
  console.log(thumbnail);
  console.log(file);
  console.log(demoVideo);
  console.log(title);
  console.log(description);
  console.log(liveLink);
  console.log(techStack);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for sending files
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('liveLink', liveLink);
    formData.append('techStack', techStack);
    formData.append('thumbnail', thumbnail); // File input
    formData.append('file', file); // File input
    formData.append('demoVideo', demoVideo);
    console.log(formData)
    try {
      // Make the POST request
      const response = await axios.post('http://localhost:4004/api/project/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
        },
      });
      if(response.status === 200){
          toast.success("Project Added Successfully!", {autoClose: 1000})
      }
      console.log('Project added successfully:', response.data);

      // Optionally, close the modal and clear inputs
      setTimeout(() => {
          closeModal(false);
          window.location.reload();
      },10);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
<div className="absolute inset-0 flex items-center justify-center bg-black/50 h-fit backdrop-blur-sm">
  {/* Modal content */}
  <div className="bg-white rounded-3xl flex flex-col justify-start px-6 py-2 my-44 shadow-md w-10/12 h-auto max-w-2xl overflow-y-auto">
    <div className="w-full flex justify-end items-end">
      <button
        className="px-3 py-1  text-xl text-white bg-red-600 hover:text-amber-500 duration-200 hover:scale-105"
        onClick={() => closeModal(false)}
      >
        X
      </button>
    </div>
    <div className="w-full text-amber-500">
      <div className="title my-2 text-center text-3xl font-osw">
        <h1>Add Project</h1>
      </div>
    </div>
    <form className="w-full h-auto" onSubmit={handleSubmit}>
      <div className="w-full">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 bg-slate-300"
          placeholder="Enter Project Title"
          required
        />
      </div>
      <div className="w-full">
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-2 p-3 bg-slate-300"
          placeholder="Enter Project Description"
          required
        />
      </div>
      <div className="w-full">
        <p className="text-amber-500 text-md mt-2">
          Project Thumbnail (Supported format: jpg, jpeg, png)
        </p>
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          onChange={(e) => {
            const file = e.target.files[0];
            const allowedTypes = [
              'image/jpeg', 'image/png', 'image/jpg', 'image/gif',
            ];
      
            if (file && !allowedTypes.includes(file.type)) {
              toast.error('Only images are allowed',{autoClose: 1500});
              e.target.value = ''; // Reset the file input
              return;
            }
            setThumbnail(file); // Replace with setFile or setDemoVideo where necessary
          }}          
          className="w-full mt-2 p-3 bg-slate-300"
          required
        />
      </div>
      <div className="w-full">
        <p className="text-amber-500 text-md mt-2">Project Zip File</p>
        <input
          type="file"
          accept='application/zip, application/x-zip-compressed, application/x-rar-compressed'
          onChange={(e) => {
            const file = e.target.files[0];
            const allowedTypes = [
              'application/zip', 'application/x-zip-compressed', 'application/x-rar-compressed',
            ];
      
            if (file && !allowedTypes.includes(file.type)) {
              toast.error('Only ZIP file is allowed',{autoClose: 1500});
              e.target.value = ''; // Reset the file input
              return;
            }
            setFile(file); // Replace with setFile or setDemoVideo where necessary
          }}
          className="w-full mt-2 p-3 bg-slate-300"
          required
        />
      </div>
      <div className="w-full">
        <p className="text-amber-500 text-md mt-2">Project Demo Video</p>
        <input
          type="file"
          accept='video/*'
          onChange={(e) => {
            const file = e.target.files[0];
            const allowedTypes = [
              'video/mp4', 'video/mpeg', 'video/avi',
            ];
      
            if (file && !allowedTypes.includes(file.type)) {
              toast.error('Only video is allowed', {autoClose: 1500});
              e.target.value = ''; // Reset the file input
              return;
            }
            setDemoVideo(file); // Replace with setFile or setDemoVideo where necessary
          }}
          className="w-full mt-2 p-3 bg-slate-300"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
          className="w-full mt-2 p-3 bg-slate-300"
          placeholder="Live Preview Link of the Project"
          required
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          value={techStack}
          onChange={(e) => setTechStack(e.target.value)}
          className="w-full mt-2 p-3 bg-slate-300"
          placeholder="Write the Technology that used in this project"
          required
        />
      </div>
      <div className="w-full flex justify-center items-center mt-3">
        <button
          type="submit"
          className="px-5 py-3 text-xl font-semibold bg-amber-400 rounded-xl hover:text-white duration-200 hover:scale-105"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
  );
}

export default Modal;
