import React, { useState } from 'react';
import { Form, Button, Input, DatePicker, Space } from "antd";

function AddInTodo(props) {

    const [projectTitle, setProjectTitle] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    const [projectOwner, setProjectOwner] = useState('');
    const [dueDate, setDueDate] = useState('');

    const enterprojectTitle = (e) => {
        let val = e.target.value;
        setProjectTitle(val);

    }

    const enterprojectStatus = (e) => {
        let val = e.target.value;
        setProjectStatus(val);

    }

    const enterprojectOwner = (e) => {
        let val = e.target.value;
        setProjectOwner(val);
    }

    const dateFormatList = ['DD-MM-YYYY', 'DD-MM-YY'];

    const enterdueDate = (date, dateString) => {
        setDueDate(dateString);
    };


    let Id = 0;
    return (
        <div className='formformate'>
            <Form>
                <div className='formitem'>
                    <span className='formitemname'>Project Title :</span>
                    <Input className='forminput' value={projectTitle} placeholder='Enter project title'
                        name="name" onChange={enterprojectTitle} />
                </div>

                <div className='formitem'>
                    <span className='formitemname'>Project Status :</span>
                    <Input className='forminput' value={projectStatus} placeholder='Enter project status'
                        name="name" onChange={enterprojectStatus} />
                </div>

                <div className='formitem'>
                    <span className='formitemname'>Project Owner :</span>
                    <Input className='forminput' style={{ width: '100%' }} placeholder="Enter project owner name"
                        value={projectOwner} name="name" onChange={enterprojectOwner} />
                </div>

                <div className='formitem'>
                    <span className='formitemname'>Due Date :</span>
                    <Space direction="vertical" >
                        <DatePicker className='forminput' format={dateFormatList}
                            placeholder="Pick-up due date" onChange={enterdueDate}
                        />
                    </Space>
                </div>


                <div className='formitem'>
                    <Button className='Adduserbtn'
                        onClick={() => {
                            let projectdetails = {
                                projectTitle: projectTitle,
                                projectStatus: projectStatus,
                                projectOwner: projectOwner,
                                dueDate: dueDate,
                                id: Id + 1
                            }
                            if (projectdetails.projectTitle === '' || projectdetails.projectStatus === '' ||
                                projectdetails.projectOwner === '' || projectdetails.dueDate === '') {
                                alert("Please fill all the required detail")
                            }
                            else {

                                props.Addproject(projectdetails);
                                setProjectTitle('');
                                setProjectStatus('');
                                setProjectOwner('');
                                setDueDate('');

                            }
                        }}>Add</Button>

                </div>

            </Form>
        </div>)

}

export default AddInTodo;