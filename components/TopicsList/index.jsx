"use client";

import React from "react";
import { useState, useEffect } from "react";

const TopicsList = () => {
  const [ topics, setTopics ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/topics", {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("error");
        const data = await res.json();
        setTopics(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {topics.map((t) => (
        <div>{t.title}{t.description}</div>
      ))}
    </div>
  );
};

export default TopicsList;
