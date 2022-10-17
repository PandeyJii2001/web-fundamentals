import React, { PureComponent } from 'react';
import { Button, Form, Input } from 'antd';

class EditButton extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            updateusershow: '',
            FirstName: '',
            LastName: '',
            Phone: '',
            Email: '',
            Bloodgroup: '',
            Age: '',
            Weight: ''
        }
    };

    enterfirstname = (e) => {
        let val = e.target.value;
        this.setState({ FirstName: val });
    }

    enterlastname = (e) => {
        let val = e.target.value;
        this.setState({ LastName: val });
    }


    enterphone = (e) => {
        let val = e.target.value;
        this.setState({ Phone: val });
    }

    enteremail = (e) => {
        let val = e.target.value;
        this.setState({ Email: val });
    }

    enterebloodgroup = (e) => {
        let val = e.target.value;
        this.setState({ Bloodgroup: val });
    }

    enterage = (e) => {
        let val = e.target.value;
        this.setState({ Age: val });
    }

    enterweight = (e) => {
        let val = e.target.value;
        this.setState({ Weight: val });
    }



    render() {


        let updateuserdetails =
            <div className='formformate'>
                <Form>
                <div className='formitemedit' >
                    <span className='formitemname'>First Name :</span>
                    <Input className='forminput' defaultValue={this.props.user.firstName} 
                    placeholder='Enter first name' name="name"
                    onChange={this.enterfirstname} />
                </div>
                <div className='fformitemedit'>
                    <span className='formitemname'>Last Name :</span>
                    <Input className='forminput' defaultValue={this.props.user.lastName} 
                    placeholder='Enter last name' name="name"
                   onChange={this.enterlastname} />
                </div>
                <div className='formitemedit'>
                    <span className='formitemname'>Phone no :</span>
                    <Input className='forminput' style={{ width: '100%' }} 
                    placeholder="+91 7484977543" defaultValue={this.props.user.phone} 
                        name="name" onChange={this.enterphone} />
                </div>
                    
                <div className='formitemedit'>
                    <span className='formitemname'>Email :</span>
                    <Input className='forminput' name="name" defaultValue={this.props.user.email} 
                    placeholder="Enter email" onChange={this.enteremail} />
                </div>
                    
                <div className='formitemedit'>
                    <span className='formitemname'>Blood Group :</span>
                    <Input className='forminput' name="name" defaultValue={this.props.user.bloodGroup} 
                    placeholder="Enter Blood Group" onChange={this.enterebloodgroup} />
                </div>
                    
                <div className='formitemedit'>
                    <span className='formitemname'>Age :</span>
                    <Input className='forminput' name="name" placeholder=" Enter age " 
                    defaultValue={this.props.user.age} type="number" onChange={this.enterage} />
                </div>
                    
                <div className='formitemedit'>
                    <span className='formitemname'>Weight :</span>
                    <Input className='forminput' name="name" placeholder="password" 
                    defaultValue={this.props.user.weight} type="number" onChange={this.enterweight} />
                </div>
                  <div className='formitemedit'>  
                    <Button className='Adduserbtn' style={{margin :"30px"}}
                        onClick={() => {


                            let userdetails = {
                                firstName: this.state.FirstName,
                                lastName: this.state.LastName,
                                phone: this.state.Phone,
                                email: this.state.Email,
                                bloodGroup: this.state.Bloodgroup,
                                age: this.state.Age,
                                weight: this.state.Weight
                            }

                            //console.log(userdetails.userName);

                            if (userdetails.firstName === '' || userdetails.phone === '' ||
                                userdetails.email === '' || userdetails.age === '' ||
                                userdetails.weight === '' || userdetails.bloodGroup === '') {
                                alert("Please fill all the required detail");

                            }
                            else {


                                this.props.edituser(userdetails, this.props.user.id);

                                this.setState({
                                    FirstName: userdetails.firstName,
                                    LastName :userdetails.lastName,
                                    Phone: userdetails.phone,
                                    Email: userdetails.email,
                                    Bloodgroup: userdetails.bloodGroup,
                                    Age: userdetails.age,
                                    Weight: userdetails.weight
                                })

                                this.setState({ updateusershow: '' });

                            }
                        }}>Update</Button>
 
                    <Button className='Adduserbtn' style={{backgroundColor : "red"}}
                    onClick={() => {
                        
                        this.setState({
                            FirstName: this.props.user.firstName,
                            LastName: this.props.user.lastName,
                            Phone: this.props.user.phone,
                            Email: this.props.user.email,
                            Bloodgroup: this.props.user.bloodGroup,
                            Age: this.props.user.age,
                            Weight: this.props.user.weight
                        })

                        this.setState({ updateusershow: '' });
                    }}>Cancel</Button>
                   </div>

                </Form>
            </div>

        return (
                <>
                <Button className='useerinfo1btn'
                onClick={() => { 
                    this.setState({
                        FirstName: this.props.user.firstName,
                        LastName: this.props.user.lastName,
                        Phone: this.props.user.phone,
                        Email: this.props.user.email,
                        Bloodgroup: this.props.user.bloodGroup,
                        Age: this.props.user.age,
                        Weight: this.props.user.weight
                    })
                    this.setState({ updateusershow: updateuserdetails })
                }}>Edit</Button>

                <span className='showuseredit'>{this.state.updateusershow}</span>
            </>
        )
    }
}

export default EditButton;


/*
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

function EditButton (props) {


    const[Updateusershow, setUpdateusershow] = useState('');

    const[FirstName, setFirstName] = useState('');
    const[LastName, setLastName] = useState('');
    const[Phone, setPhone] = useState('');
    const[Email, setEmail] = useState('');
    const[Bloodgroup, setBloodgroup] = useState('');
    const[Age, setAge] = useState('');
    const[Weight, setWeight] = useState('');



   const enterfirstname = (e) => {
        let val = e.target.value;
        setFirstName(val);
    }

   const enterlastname = (e) => {
        let val = e.target.value;
        setLastName(val);
    }


    const enterphone = (e) => {
        let val = e.target.value;
        setPhone(val);
    }

   const enteremail = (e) => {
        let val = e.target.value;
        setEmail(val);
    }

    const enterebloodgroup = (e) => {
        let val = e.target.value;
        setBloodgroup(val);
    }

   const enterage = (e) => {
        let val = e.target.value;
        setAge(val);;
    }

    const enterweight = (e) => {
        let val = e.target.value;
        setWeight(val);
    }


        let updateuserdetails =
            <div>
                <Form>
                    <label>
                       First Name :
                        <Input defaultValue={props.user.firstName} placeholder='Enter first name' name="name"

                            onChange={enterfirstname} />
                    </label>
                    <label>
                       Last Name :
                        <Input defaultValue={props.user.lastName} placeholder='Enter last name' name="name"

                            onChange={enterlastname} />
                    </label>
                    <label>
                        Phone no. :
                        <Input style={{ width: '100%' }} placeholder="+91 7484977543"
                            defaultValue={props.user.phone} name="name"
                            onChange={enterphone} />
                    </label>
                    <label>
                        Email :
                        <Input name="name" defaultValue={props.user.email} placeholder="Enter email"
                            onChange={enteremail} />
                    </label>
                    <label>
                        Blood Group :
                        <Input name="name" defaultValue={props.user.bloodgroup} placeholder="Enter Blood Group"
                            onChange={enterebloodgroup} />
                    </label>
                    <label>
                        Age :
                        <Input placeholder=" Enter age " defaultValue={props.user.age}
                            type="number" onChange={enterage} />
                    </label>
                    <label>
                        Weight :
                        <Input placeholder="password" defaultValue={props.user.weight}
                            type="number" onChange={enterweight} />
                    </label>
                    <Button
                        onClick={() => {


                            let userdetails = {
                                firstName: FirstName,
                                lastName: LastName,
                                phone: Phone,
                                email: Email,
                                bloodgroup: Bloodgroup,
                                age: Age,
                                weight: Weight
                            }

                            //console.log(userdetails.userName);

                            if (userdetails.firstName === '' || userdetails.phone === '' ||
                                userdetails.email === '' || userdetails.age === '' ||
                                userdetails.weight === '' || userdetails.bloodgroup === '') {
                                alert("Please fill all the required detail");

                            }
                            else {


                                props.edituser(userdetails, props.id);

                                setFirstName(userdetails.firstName);
                                setLastName(userdetails.lastName);
                                setEmail(userdetails.email);
                                setBloodgroup(userdetails.bloodgroup);
                                setPhone(userdetails.phone);
                                setAge(userdetails.age);
                                setWeight(userdetails.weight);
                                
                                setUpdateusershow('');

                            }
                        }}>Update</Button>

                    <Button onClick={() => {
                        
                        setFirstName(props.user.firstName);
                                setLastName(props.user.lastName);
                                setEmail(props.user.email);
                                setBloodgroup(props.user.bloodgroup);
                                setPhone(props.user.phone);
                                setAge(props.user.age);
                                setWeight(props.user.weight);
                        
                        setUpdateusershow('');
                    }}>Cancel</Button>


                </Form>
            </div>

        return (
            <div>
                <Button onClick={() => {
setFirstName(props.user.firstName);
setLastName(props.user.lastName);
setEmail(props.user.email);
setBloodgroup(props.user.bloodgroup);
setPhone(props.user.phone);
setAge(props.user.age);
setWeight(props.user.weight);
                   

                    setUpdateusershow(updateuserdetails);
                }}>Edit</Button>

                <div>{Updateusershow}</div>
            </div>
        )
    //}
}

export default EditButton;
*/