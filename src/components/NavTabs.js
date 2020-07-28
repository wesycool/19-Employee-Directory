import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Home from './Home'
import employees from '../employees.json'

function NavTabs(props) {
  const location = useLocation();
  const [ tableManager, setList ] = useState( employees )
  console.log( `[App] tableManager:`, tableManager )


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                <h2 style={{color:'black'}}><i className="far fa-address-book"></i> Employee Directory</h2>
            </Link>
            <div className="navbar-collapse justify-content-end">
                <form className="form-inline">
                    <input className="form-control mr-sm-2 col-form-label-lg" type="search" placeholder="e.g. John Smith" aria-label="name"/>
                    <input className="form-control mr-sm-2 col-form-label-lg" type="search" placeholder="e.g. Toronto, Ontario" aria-label="location"/>
                    <button className="btn btn-secondary my-2 my-sm-0 btn-lg" type="button"><i className="fas fa-search"></i> <span id="searchBtn">Search</span></button>
                </form>
            </div>
        </nav>

        <Home list={tableManager}/>
    </div>

  );
}

export default NavTabs;
