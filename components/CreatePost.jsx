'use client'
import React, { useState } from 'react';
import { FaImage, FaTimes } from 'react-icons/fa';

const CreatePost = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div className="card relative shadow-xl mx-auto max-w-2xl compact bg-base-200">
      <div className="card-body">
        <div className="form-control">
          <textarea placeholder="Post something..." className="textarea text-xl h-24 textarea-bordered"></textarea>
        </div>
        <div className="flex mt-2 justify-between items-center">
          <div className="form-control">
            <label className="btn btn-ghost ar-1 btn-circle" htmlFor="image">
              <FaImage size={24} />
            </label>
            <input
              type="file"
              id="image"
              placeholder="Image"
              className="hidden input input-bordered"
              onChange={handleImageChange}
              multiple
            />
          </div>
          <button className="w-fit card-action btn btn-sm btn-primary">POST</button>
        </div>
      </div>
      {selectedImages.length > 0 && (
        <div className="card-footer absolute top-full p-4 bg-base-200 rounded-xl mt-4">
          <ul className="flex flex-wrap gap-2">
            {selectedImages.map((image, index) => (
              <li key={index} className="flex relative items-center card bg-base-100 mx-4 mb-2">
                <button className="absolute right-1 top-1 btn btn-error btn-circle btn-xs bg-opacity-30" onClick={() => handleRemoveImage(index)}>
                  <FaTimes size={16} />
                </button>
                <img src={URL.createObjectURL(image)} className='w-32 h-32 object-cover rounded-xl' alt={image.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
