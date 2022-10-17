import React from 'react';


function User(props) {

    return (<>

        <div className='userinfo'>{props.user.firstName} &nbsp; {props.user.lastName}</div>
        <div className='userinfo'>{props.user.phone}</div>
        <div className='userinfo'>{props.user.email}</div>
        <div className='userinfosmall'>{props.user.bloodGroup}</div>
        <div className='userinfosmall'>{props.user.age}</div>
        <div className='userinfosmall'>{props.user.weight}</div>

    </>
    )

}

export default User;