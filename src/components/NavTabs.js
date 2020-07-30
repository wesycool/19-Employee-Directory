import React, { useState , useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import TableRow from './TableRow'
import Home from './Home'
import employees from '../employees.json'
import './navtabs.css'

function NavTabs(props) {
  const location = useLocation();
  const [ tableManager, setList ] = useState( employees )
  console.log( `[App] tableManager:`, tableManager )

  // onClick Button Function to Filter Employee List
  function updateFilter(){
    // Name Filter
    const getName = document.querySelector('#name').value.trim()
    const splitName = getName.split(/[\s,]+/)

    const getFirstName =  employees.filter( ({first_name}) => first_name.toLowerCase().indexOf( splitName[0].toLowerCase() )>-1 )
    const getLastName =  employees.filter( ({last_name}) => last_name.toLowerCase().indexOf( splitName[0].toLowerCase() )>-1 )
    const concatFirstLastName = [...getFirstName, ...getLastName].filter((item, pos) => [...getFirstName, ...getLastName].indexOf(item) === pos)
    
    const getFirstLastName = (splitName.length > 1)? employees.filter( ({last_name}) => last_name.toLowerCase().indexOf( splitName[1].toLowerCase() )>-1 ) : concatFirstLastName
    const filterName = concatFirstLastName.filter( name => getFirstLastName.includes(name))

    // Location Filter
    const getLocation = document.querySelector('#location').value.trim()
    const splitLocation = getLocation.split(/[\s,]+/)

    const getCity =  employees.filter( ({city}) => city.toLowerCase().indexOf( splitLocation[0].toLowerCase() )>-1 )
    const getProvince =  employees.filter( ({province}) => province.toLowerCase().indexOf( splitLocation[0].toLowerCase() )>-1 )
    const concatCityProvince = [...getCity, ...getProvince].filter((item, pos) => [...getCity, ...getProvince].indexOf(item) === pos)

    const getCityProvince = (splitLocation.length > 1)? employees.filter( ({province}) => province.toLowerCase().indexOf( splitLocation[1].toLowerCase() )>-1 ) : concatCityProvince
    const filterLocation = concatCityProvince.filter( location => getCityProvince.includes(location))
    

    // Search Filter on Both Name and Location Combination
    const filterNameLocation = filterName.filter( list => filterLocation.includes(list) )
    const filterLocationName = filterLocation.filter( list => filterName.includes(list) )
    const filterSearch = [...filterNameLocation, ...filterLocationName].filter((item, pos) => [...filterNameLocation, ...filterLocationName].indexOf(item) === pos)
    console.log('filterSearch',filterSearch)
    setList(filterSearch)
  }

  // Sort List - function works but seems to have a lag. sometimes it sorts and sometimes it doesn't
  function sortList(event){
    const sortList = tableManager.sort( (a,b) => {
        const condition = a[event.target.id] > b[event.target.id]
        return (condition - !condition)
    } )
    console.log('sortList',sortList)
    setList(sortList)
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                <h2 style={{color:'black'}}><i className="far fa-address-book"></i> Employee Directory</h2>
            </Link>
            <div className="navbar-collapse justify-content-end">
                <form className="form-inline">
                    <input className="form-control mr-sm-2 col-form-label-lg" type="search" placeholder="e.g. John Smith" aria-label="name" id="name"/>
                    <input className="form-control mr-sm-2 col-form-label-lg" type="search" placeholder="e.g. Toronto, Ontario" aria-label="location" id="location"/>
                    <button className="btn btn-secondary my-2 my-sm-0 btn-lg" type="button" onClick={updateFilter}><i className="fas fa-search"></i> <span id="searchBtn">Search</span></button>
                </form>
            </div>
        </nav>

        {/* <Home list={tableManager} sort={sort}></Home> */}

        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name <i className="fas fa-sort-alpha-down" id='last_name' onClick={sortList}></i></th>
                        <th scope="col">Location <i className="fas fa-sort-alpha-down" id='city' onClick={sortList}></i></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(tableManager).map( ([key,value]) => <TableRow key={key} list={[Number(key)+1,value]} /> )}
                </tbody>
            </table>
        </div>
    </div>

  );
}

export default NavTabs;
