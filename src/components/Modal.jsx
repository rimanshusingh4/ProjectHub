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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for sending files
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('thumbnail', thumbnail); // File input
    formData.append('file', file); // File input

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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Modal content */}
      <div className="container bg-white rounded-3xl flex flex-col justify-center items-end p-7 border shadow-md w-4/5 max-w-lg">
        <div className="w-full flex justify-end items-end">
          <button
            className="px-3 py-2 rounded-full text-xl text-white bg-red-600 hover:text-amber-500 duration-200 hover:scale-105"
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>
        <div className="w-full text-amber-500">
          <div className="title my-4 text-center text-3xl font-osw">
            <h1>Add Project</h1>
          </div>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
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
            <input
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
              Project Thumbnail (Supported format:- jpg, jpeg, png)
            </p>
            <input
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
              className="w-full mt-2 p-3 bg-slate-300"
              required
            />
          </div>
          <div className="w-full">
            <p className="text-amber-500 text-md mt-2">Project Zip File</p>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full mt-2 p-3 bg-slate-300"
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
