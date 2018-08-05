import React from 'react';


const NewsItem = ({passToItem}) => {
  
  return (
      <div style={{borderBottom: "2px solid grey"}}>
         <div><h4>{passToItem.title}</h4></div>
         <div><h5>{passToItem.author}</h5></div>
         <div><p>{passToItem.description}</p></div>
          <a href={passToItem.url}> Follow the original article </a>

      </div>
    );
  
}

export default NewsItem;