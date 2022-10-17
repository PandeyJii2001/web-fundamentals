import React from 'react';
import { Button } from 'antd';

function DelButton(props) {

    return (
        <div>
            <Button className='useerinfo1btn useerinfo1btndelete'
                onClick={() => {
                    props.deleteuser(props.user.id)
                }}>Delete</Button>
        </div>
    )

}

export default DelButton;