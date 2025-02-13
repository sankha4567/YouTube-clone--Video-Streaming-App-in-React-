import React, { useEffect, useState } from 'react'
import { youtube_Api } from '../utils/Constants';
import Videocards ,{AdvideoCard} from './Videocards';
import { Link } from 'react-router-dom';
const Videocontainer = () => {
  const[videos,setVideos]=useState([]);
  useEffect(()=>{
  fetchData();
  },[]);
  const fetchData = async () =>{
    console.log("apifirst");
    const data=await fetch(youtube_Api);
     const json=await data.json();
     console.log(json?.items);
     setVideos(json?.items);
     console.log("apilast");
  }
  return (
    <div className='flex flex-wrap'>
      {videos.length > 0 &&<AdvideoCard info={videos[0]}/>}
      {
        videos?.map((video)=>{
          return (
          <Link to={"/watch?v=" + video.id} key={video.id}><Videocards  info ={video} /> </Link>
          );
        })
      }
     
    </div>
  )
}

export default Videocontainer
