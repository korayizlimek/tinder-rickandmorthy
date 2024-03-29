import axios from "axios";
import React, { useEffect, useState } from "react";
import { getEpisode } from "../services/api";

function Episode({ episode }) {
  console.log("episodessssss", episode);
  const [episodeName, setEpisodeName] = useState();
  useEffect(() => {
    axios
      .get(episode)
      .then((res) => setEpisodeName(res.data.name))
      .catch((err) => console.log("Episode Card Detail Error : ", err));
    axios.get();
    getEpisode(episode);
  }, [episode]);

  return <div>{episodeName}</div>;
}

export default Episode;
