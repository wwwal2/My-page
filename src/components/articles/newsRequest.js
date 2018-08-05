import React from 'react';
import { Fetch } from 'react-request';
import AllNews from './allNews';

const NewsRequest = (props) => {
     
  const currentDate = () => {
    let a = new Date();
    return (a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate())
  }

      return (
        
        <div>                                  
            <div>
                <Fetch url={`https://newsapi.org/v2/everything?q=${props.passInput}&from=${currentDate()}&sortBy=popularity&apiKey=7d482593d89942c2b779e36b36986ada`}>
                  {({ fetching, failed, data }) => {
                    if (fetching) {
                      return <div>Loading data...</div>;
                    }
          
                    if (failed) {
                      return <div> REJECTED </div>;
                    }
          
                    if (data) {
                      
                      return (
                        <div>
                            <AllNews passFromRequest={data}/>
                        </div>
                      );
                    }
                    
                    return null;
                  }}
                </Fetch>
              </div>
        </div>
      );
    }
  
  
  export default NewsRequest;