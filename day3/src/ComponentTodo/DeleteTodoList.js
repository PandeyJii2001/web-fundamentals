import React from 'react';
import { Button } from 'antd';

function DeleteTodoList(props) {

    return (
        <div>
            <Button className='useerinfo1btn useerinfo1btndelete'
                onClick={() => {
                    props.Deleteproject(props.project.id)
                }}>Delete</Button>
        </div>
    )

}

export default DeleteTodoList;