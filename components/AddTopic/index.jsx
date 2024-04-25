"use client";

import React from "react";
import { useState } from "react";
const AddTopic = () => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const data = {
      title,
      description,
    };

    const response = await fetch("http://localhost:4000/topics", {
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(data), 
    });

    if (!response.ok) {
      console.error("Error sending data:", await response.text());
      return; 
    }

    console.log("Data sent successfully!");

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border px-8 py-2"
        type="text"
        placeholder="add title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border px-8 py-2"
        type="text"
        placeholder="add title"
      />
      <button type="submit" className="bg-green-400 w-fit px-3 py-2">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
