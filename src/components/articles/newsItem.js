import React from 'react';
import { Link } from 'react-router-dom';


const NewsItem = ({passToItem}) => {
  
  return (
      <div style={{borderBottom: "2px solid grey"}}>
         <div><h4>{passToItem.title}</h4></div>
         <div><h5>{passToItem.author}</h5></div>
         <div><p>{passToItem.description}</p></div>
         <div><Link to={passToItem.url} className="link"> {passToItem.url} </Link></div>
      </div>
    );
  
}

export default NewsItem;