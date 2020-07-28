import React from 'react'

function TableRow( {list} ){
console.log('TableRow:',list)
const [id, {first_name,last_name,city,province}] = list

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{first_name} {last_name}</td>
            <td>{city}, {province}</td>
        </tr>
    )
}

export default TableRow