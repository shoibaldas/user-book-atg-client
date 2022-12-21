import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

const SidebarData = ({user}) => {
    const {Bio, avatar, jobTitle, createdAt, id} =user;
    const {username, firstName, lastName, email} = user.profile;
    console.log(avatar)
    return (
        <ListGroup>
            <ListGroup.Item action variant="dark">
                <Link to={`/user-details-of/${id}`} className="text-decoration-none text-dark">
                    <div className="d-flex align-items-center">
                        <div>
                            <Avatar size="40" round={true} name={firstName+" "+lastName} maxInitials={2}/>
                        </div>
                        <div className='mx-2'>
                            <p style={{margin:'0'}}>{firstName} {lastName}</p>
                        </div>
                    </div>
                </Link>
            </ListGroup.Item> 
        </ListGroup>
    );
};

export default SidebarData;