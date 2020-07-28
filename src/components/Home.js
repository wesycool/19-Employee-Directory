import React from "react";
import TableRow from './TableRow'

function Home( {list} ) {
    console.log(list)
  return (
    <div className="container">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(list).map( ([key,value]) => <TableRow list={[Number(key)+1,value]} /> )}
            </tbody>
        </table>
    </div>
  );
}

export default Home;