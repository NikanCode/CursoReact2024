import React,{useMemo} from "react";
import User from './User'
import '../styles/styles.css'

const UserList = () => {
    const users = useMemo(()=>[
        {id:1, name: 'Juan Perez' },
        {id:2, name: 'Pedro Perez' },
        {id:3, name: 'Maria Lopez' },

    ],[]);

    return (
        <div className="user-list">
            {users.map(user => (
                <User key={user.id} user ={user} />
            ))}
        </div>
    );
};

export default UserList;
