import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loding, setLoding] = useState("false");

    async function fetchData(tag) {
        setLoding(true);

        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imageSource = data.data.images.downsized_large.url;
        // console.log(data);
        setGif(imageSource);
        setLoding(false);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return {gif, loding, fetchData}
};

export default useGif;
