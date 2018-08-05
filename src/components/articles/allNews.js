import React, {Component} from 'react';
import NewsItem from './newsItem'


    class AllNews extends Component {
    
      render() { 
        
        const parsedArrayItem = this.props.passFromRequest.articles.map((item) =>{
          return(
              <NewsItem passToItem={item} key={item.source.id}/>
          )});
        
          
          return (
            <div>             
              {parsedArrayItem}
            </div>
          );
      }
  }

export default AllNews;