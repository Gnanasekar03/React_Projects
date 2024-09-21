import React, { useEffect, useRef, useState } from 'react';
import cards_data from "../../assets/cards/Cards_data.js";
import "./TitleCard.css";
import { Link } from 'react-router-dom';



const TitleCard = ({title,category}) => {

  const[apiData,setApiData]=useState([]);
  const cardsref=useRef();

  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODM4MmJhZTkxZjllNjVjY2I3MjBmODIxNDc2YzkzZSIsIm5iZiI6MTcyNjc3MjkzNC40NTg2ODIsInN1YiI6IjY2ZWE2ZDUxNTE2OGE4OTZlMTFmM2RmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kUG52NKl_nRpfGerlgMaJdeDPan3g-iQSyT6VgA4PzA'
    }
  };
  


  const handleWheel=(event)=>{
    event.preventDefault();
    cardsref.current.scrollLeft+=event.deltaY;
  }
  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsref.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className='title-Cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsref}>
        {apiData?.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}

      </div>
      
    </div>
  )
}

export default TitleCard
