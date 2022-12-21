import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarData from './SidebarData';
import Loading from '../../../components/Loading/Loading';

const SidebarMenu = () => {
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios
            .get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(function (response) {
                setUserList(response.data);
                setLoading(false)
            });
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className="bg-dark p-2" style={{height:'100vh', overflow:'auto', margin:'auto'}}>
            {
                userList?.map(user=> <SidebarData 
                    key={user.id}
                    user={user}
                ></SidebarData>)
            }
        </div>
    );
};

export default SidebarMenu;