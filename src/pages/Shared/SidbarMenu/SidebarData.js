import React from 'react';

const SidebarData = ({user}) => {
    console.log(user)
    const {Bio} =user;
    const {username} = user.profile;
    return (
        <div>
            <h1 className='text-white'>{username}</h1>
        </div>
    );
};

export default SidebarData;