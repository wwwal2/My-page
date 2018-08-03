import React from 'react';
import ImageFail1 from '../image/imageFail1';
import ImageFail2 from '../image/imageFail2';

const hrStyle = {
    borderTop: '1px solid #8c8b8b',
    borderBottom: '1px solid #fff'
}



const OnReject = () => {
      return (
       <div>
           <div><h5>Your browser blocks an application due to HTTPS security rules...</h5></div>
           <div><p>
               If you have <strong>Chrome</strong> browser, please do the following:<br/>
               click on the "shield" icon in a top-right corner<br/>
               <ImageFail2/> <br/>
               and tap "Load unsafe scripts" <br/> </p>
               <hr style={hrStyle}></hr>
               <p>
               For <strong>Firefox</strong> browser, click on the "lock" icon on top-left corner<br/>
               <ImageFail1/> <br/>
               push the big arrow button and click "Disable protection for now" 
               </p></div>    
           <div></div>
           <div></div>


       </div>
      );
    }
  
  
  export default OnReject;