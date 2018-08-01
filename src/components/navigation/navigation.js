import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from '../header/header';
import ContactPage from '../contactPage/contactPage';
import Skills from '../skills/skills';
import Weather from '../weatherPage/weatherPage'
import './navigation.css';


const Navigation = () => {
    return (

        <BrowserRouter>
            <div className="table">

                <Route path="/" exact component={Header} />
                <Route path="/contactsPage" exact component={ContactPage} />
                <Route path="/weather" exact component={Weather} /> 
                <Route path="/skills" exact component={Skills} />   
                <div class="container">

                    <table class="table table-light table-hover">
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
                                <th><Link to="/skills" className="link"> SKILLS </Link></th>
                                <th></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th><Link to="/contactsPage" className="link"> CONTACTS </Link></th>
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