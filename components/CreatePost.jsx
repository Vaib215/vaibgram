'use client'
import { Client, Databases, ID, Storage } from 'appwrite';
import React, { useState } from 'react';
import { FaImage, FaTimes } from 'react-icons/fa';

const CreatePost = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [text, setText] = useState('');

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };


  const handleCreatePost = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append('images', image);
    });
    const client = new Client();
    client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64727e5c326384d927f5');
    const storage = new Storage(client);
    // upload the images to the storage by running a loop
    selectedImages.map((image) => {
      storage.createFile('647a498248d44e4bc3cd',ID.unique(),image).then((response) => {
        console.log(response);
        // console.log(`https://cloud.appwrite.io/v1/storage/buckets/647a498248d44e4bc3cd/files/${response.$id}/view?project=64727e5c326384d927f5`)
        setText('');
        setSelectedImages([]);
      }).catch((error) => {
        console.log(error);
      });
    });
    // const databases = new Databases(client);
    // const promise = await databases.createDocument('64727fdf6a5058d3b626', '64727fe97bd40741431d',
    //   ID.unique(),
    //   {
    //     text,
    //     // send the url of the image to the database
    //     images
    //   }
    // );
    // promise.then((response) => {
    //   console.log(response);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

  return (
    <div className="card shadow-xl mx-auto max-w-2xl compact bg-base-200">
      <form className="card-body">
        <div className="form-control">
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Post something..." className="textarea text-xl h-24 textarea-bordered"></textarea>
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
          <button onClick={handleCreatePost} className="w-fit card-action btn btn-sm btn-primary">POST</button>
        </div>
      </form>
      {selectedImages.length > 0 && (
        <div className="card-footer top-full px-4 pb-4 bg-base-200 rounded-xl">
          <ul className="flex flex-wrap gap-8 mx-2">
            {selectedImages.map((image, index) => (
              <li key={index} className="flex relative items-center card bg-base-100">
                <button className="absolute right-1 top-1 btn btn-error btn-circle btn-xs bg-opacity-50" onClick={() => handleRemoveImage(index)}>
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
