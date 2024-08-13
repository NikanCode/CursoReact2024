import React from "react";
import UserCard from './UserCard'

const  UserList = () => {

    const users = [

        {id:1, name:'Juan Perez', email:'jperez@example.com', avatar:'https:\\via.placeholder.com/140'},
        {id:2, name:'Pedro Perez', email:'pperez@example.com', avatar:'https:\\via.placeholder.com/140'},
        {id:3, name:'Maria Perez', email:'mperez@example.com', avatar:'https:\\via.placeholder.com/140'}
    ];

    return (
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {users.map (user =>(
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
};

export default UserList;