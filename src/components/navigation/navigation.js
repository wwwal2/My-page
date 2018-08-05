import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from '../header/header';
import Skills from '../skills/skills';
import Weather from '../weatherPage/weatherPage';
import Articles from '../articles/articles';
import './navigation.css';


const Navigation = () => {
    return (

        <BrowserRouter>
            <div className="table">

                <Route path="/" exact component={Header} />
                <Route path="/articles" exact component={Articles} /> 
                <Route path="/weather" exact component={Weather} /> 
                <Route path="/skills" exact component={Skills} />   
                <div className="container">

                    <table className="table table-light table-hover">
                        <tbody>
                            <tr>
                                <th></th>
                                <th><Link to="/" className="link"> HOME </Link> </th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th><Link to="/weather" className="link"> WEATHER APP </Link></th>
                                <th></th>
                                
                            </tr>
                            <tr>
                                <th></th>
                                <th><Link to="/articles" className="link"> WORLD WIDE NEWS </Link></th>
                                <th></th>
                                
                            </tr>
                            <tr>
                                <th></th>
                                <th><Link to="/skills" className="link"> DETAILS AND CONTACTS </Link></th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default Navigation;
