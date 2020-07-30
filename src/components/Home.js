import React from "react";
import TableRow from './TableRow'


// this whole function doesn't seem to work
// I think this works but the sort function is just laging
function Home( {list,sort} ) {

    console.log(sort)

  return (
    <div className="container">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name <button type="button"  id='last_name' onClick={sort} >sort</button></th>
                    <th scope="col" >Location<button type="button"  id='city' onClick={sort} >sort</button></th>
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