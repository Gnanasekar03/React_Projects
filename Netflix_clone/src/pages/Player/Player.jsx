import React, { useEffect, useState } from 'react';
import "./Player.css";
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  
  const navigate=useNavigate();
  const {id}=useParams();


  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeOf:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODM4MmJhZTkxZjllNjVjY2I3MjBmODIxNDc2YzkzZSIsIm5iZiI6MTcyNjc3MjkzNC40NTg2ODIsInN1YiI6IjY2ZWE2ZDUxNTE2OGE4OTZlMTFmM2RmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUG52NKl_nRpfGerlgMaJdeDPan3g-iQSyT6VgA4PzA'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  console.log("response");
  
  


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width="90%" height="90%"  src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" allowFullScreen frameBorder="0"></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
   
  )
}

export default Player
