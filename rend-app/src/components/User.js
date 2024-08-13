import React from "react";

const User = React.memo(({user})=>{
    return (
        <div class="user">
            <p>{user.name}</p>
        </div>
    );
});

export default User;