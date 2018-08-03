import React, { Component } from 'react';
import './skills.css';
import text from './text.json';


class Skills extends React.Component {

  
    render() {

      

      return (
        <div>
                <div className="contactsTitle">DETAILS AND CONTACTS</div>

                <div className="container-fluid" id="mainText">
                    <div className="row"> 
                        <div className="col-sm-1" ></div>
                        <div className="col-sm-4" > <h5>{text.message_page}</h5> </div>
                        <div className="col-sm-1" ></div>
                        <div className="col-sm-6" > <h5>{text.appTech}</h5></div>
                    </div>
                    <div className="row"> 
                        <div className="col-sm-1" ></div>
                        <div className="col-sm-4" >
                          
                          <p>App base: React <br/>
                              Styling: Bootstrap 4   <br/>
                              Router: react-router   <br/>
                              Requests: react-requests   <br/>
                              Deployment: Heroku</p>
                        </div>
                        <div className="col-sm-1" ></div>
                        <div className="col-sm-5" >
                            <p>{text.ageEtc} <br/>
                                <strong>Technology stack: </strong>{text.techStack} <br/>
                                <strong>English skill:</strong> fluent <br/>
                                <strong>Git account:</strong> https://github.com/wwwal2 <br/>
                                <strong>Email:</strong> smalex9@gmail.com <strong>Skype:</strong> www.ab.dd
                            </p>
                        <div className="col-sm-1" ></div>
                        </div>
                    </div>
                </div>
       
               

        </div>
      );
    }
  }
  
  export default Skills;
  