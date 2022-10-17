import React, { PureComponent } from 'react';
import { Button, Form, Input, Space, DatePicker } from 'antd';
import moment from 'moment';

class UpdateTodoList extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            updatetodoshow: '',
            ProjectTitle: '',
            ProjectStatus: '',
            ProjectOwner: '',
            DueDate: ''
        }
    };

    enterprojectTitle = (e) => {
        let val = e.target.value;
        this.setState({ ProjectTitle: val });
    }

    enterprojectStatus = (e) => {
        let val = e.target.value;
        this.setState({ ProjectStatus: val });
    }

    enterprojectOwner = (e) => {
        let val = e.target.value;
        this.setState({ ProjectOwner: val });
    }


    enterdueDate = (date, dateString) => {
        this.setState({ DueDate: dateString })
    };



    render() {
        let dateFormatList = ['DD-MM-YYYY', 'DD-MM-YY'];

        let updateprojectdetails =
            <div className='formformate'>
                <Form>
                    <div className='fformitemedit' >
                        <span className='formitemname'>Project Title :</span>
                        <Input className='forminput' defaultValue={this.props.project.projectTitle}
                            placeholder='Enter project title' name="name"
                            onChange={this.enterprojectTitle} />
                    </div>
                    <div className='fformitemedit'>
                        <span className='formitemname'>Project Status :</span>
                        <Input className='forminput' defaultValue={this.props.project.projectStatus}
                            placeholder='Enter Project Status' name="name"
                            onChange={this.enterprojectStatus} />
                    </div>
                    <div className='formitemedit'>
                        <span className='formitemname'>Project Owner :</span>
                        <Input className='forminput'
                            placeholder="Enter project owner name" defaultValue={this.props.project.projectOwner}
                            name="name" onChange={this.enterprojectOwner} />
                    </div>

                    <div className='formitemedit'>
                        <span className='formitemname'>Due Date :</span>
                        <Space direction="vertical" >
                            <DatePicker className='forminput' format={dateFormatList}
                                defaultValue={moment(this.props.project.dueDate, dateFormatList[0])}
                                placeholder="Pick-up due date" onChange={this.enterdueDate}
                            />
                        </Space>

                    </div>



                    <div className='formitemedit'>
                        <Button className='Adduserbtn' style={{ margin: "30px" }}
                            onClick={() => {


                                let projectdetails = {
                                    projectTitle: this.state.ProjectTitle,
                                    projectStatus: this.state.ProjectStatus,
                                    projectOwner: this.state.ProjectOwner,
                                    dueDate: this.state.DueDate,
                                }

                                //console.log(userdetails.userName);

                                if (projectdetails.projectTitle === '' || projectdetails.projectStatus === '' ||
                                    projectdetails.projectOwner === '' || projectdetails.dueDate === '') {
                                    alert("Please fill all the required detail");

                                }
                                else {


                                    this.props.Editproject(projectdetails, this.props.project.id);

                                    this.setState({
                                        ProjectTitle: projectdetails.projectTitle,
                                        ProjectStatus: projectdetails.projectStatus,
                                        ProjectOwner: projectdetails.projectOwner,
                                        DueDate: projectdetails.dueDate,
                                    })

                                    this.setState({ updatetodoshow: '' });

                                }
                            }}>Update</Button>

                        <Button className='Adduserbtn' style={{ backgroundColor: "red" }}
                            onClick={() => {

                                this.setState({
                                    ProjectTitle: this.props.project.projectTitle,
                                    ProjectStatus: this.props.project.projectStatus,
                                    ProjectOwner: this.props.project.projectOwner,
                                    DueDate: this.props.project.dueDate,
                                })

                                this.setState({ updatetodoshow: '' });
                            }}>Cancel</Button>
                    </div>

                </Form>
            </div>

        return (
            <>
                <Button className='useerinfo1btn'
                    onClick={() => {
                        this.setState({
                            ProjectTitle: this.props.project.projectTitle,
                            ProjectStatus: this.props.project.projectStatus,
                            ProjectOwner: this.props.project.projectOwner,
                            DueDate: this.props.project.dueDate,
                        })
                        this.setState({ updatetodoshow: updateprojectdetails })
                    }}>Edit</Button>

                <span className='showuseredit'>{this.state.updatetodoshow}</span>
            </>
        )
    }
}

export default UpdateTodoList;