/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { fetchVideos } from "../services/api";

const VideoTutorials = () => {
  const [dish, setDish] = useState("");
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetchVideos(dish);
    setVideos(data.videos);
  };

  return (
    <div className="w-full max-w-lg p-4 mx-auto">
      <h2 className="mb-4 text-lg font-bold">Cooking Videos</h2>
      <input type="text" className="w-full p-2 border rounded" placeholder="Enter dish name..."
        value={dish} onChange={(e) => setDish(e.target.value)}
      />
      <button className="px-4 py-2 mt-4 text-white bg-red-500 rounded" onClick={getVideos}>
        Find Videos
      </button>

      <div className="mt-4">
        {videos.map((video, index) => (
          <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="block text-blue-500">
            {video.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoTutorials;
