import React from "react";
import TableRow from './TableRow'


function Home( {list,sortList} ) {

  return (
    <div className="container">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" id='last_name' onClick={sortList}>Name <i className="fas fa-sort-alpha-down"></i></th>
                    <th scope="col" id='city' onClick={sortList}>Location <i className="fas fa-sort-alpha-down"></i></th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(list).map( ([key,value]) => <TableRow key={key} list={[Number(key)+1,value]} /> )}
            </tbody>
        </table>
    </div>
  );
}

export default Home;