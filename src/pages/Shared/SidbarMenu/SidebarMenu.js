import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarData from './SidebarData';
import Loading from '../../../components/Loading/Loading';
import { CgUserList } from "react-icons/cg";

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
        <div className="bg-dark p-3" style={{height:'100vh', overflow:'auto', margin:'auto'}}>
            <div className='d-flex'>
                <CgUserList className='text-primary mb-4' style={{fontSize:'24px'}}></CgUserList>
                <div className='mx-2'>
                    <h5 className="text-light">User List</h5>
                </div>
            </div>
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