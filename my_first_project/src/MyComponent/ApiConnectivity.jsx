import axios from "axios";
import React, { useState, useEffect } from "react";

function ApiConnectivity() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return(
    <>
    <table border={1} cellPadding={10} cellSpacing={0} width={"100%"} style={{color:"red"}}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) =>{
                    return(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            </tr>
                    )
                })
            }
        </tbody>
        </table>
    </>
  )
}
export default ApiConnectivity;