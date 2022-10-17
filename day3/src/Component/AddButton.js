import React, { useState } from 'react';
import { Form, Button, Input } from "antd";

function AddButton(props) {

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const [Bloodgroup, setBloodgroup] = useState('');
    const [Age, setAge] = useState('');
    const [Weight, setWeight] = useState('');

    const enterfirstname = (e) => {
        let val = e.target.value;
        setFirstName(val);

    }

    const enterlastname = (e) => {
        let val = e.target.value;
        setLastName(val);

    }

    const enterphoneno = (e) => {
        let val = e.target.value;
        setPhone(val);
    }

    const enteremail = (e) => {
        let val = e.target.value;
        setEmail(val);
    }

    const enterbloodgroup = (e) => {
        let val = e.target.value;
        setBloodgroup(val);
    }

    const enterage = (e) => {
        let val = e.target.value;
        setAge(val);
    }

    const enterweight = (e) => {
        let val = e.target.value;
        setWeight(val);
    }

    let Id=0;
    return (
        <div className='formformate'>
            <Form>
                <div className='formitem'>
                    <span className='formitemname'>First Name :</span>
                    <Input className='forminput' value={FirstName} placeholder='Enter first name'
                        name="name" onChange={enterfirstname} />
                </div>

                <div className='formitem'>
                    <span className='formitemname'>Last Name :</span>
                    <Input className='forminput' value={LastName} placeholder='Enter last name'
                        name="name" onChange={enterlastname} />
                </div>

                <div className='formitem'>
                    <span className='formitemname'>Phone no. :</span>
                    <Input className='forminput' style={{ width: '100%' }} placeholder="+91 7484977543"
                        value={Phone} name="name" type="number" onChange={enterphoneno} />
                </div>

                <div className='formitem'>
                    <span className='formitemname'>Email :</span>
                    <Input className='forminput' name="name" value={Email} placeholder="Enter Email"
                        type="email" onChange={enteremail} />
                </div>
                <div className='formitem'>
                    <span className='formitemname'>Blood Group :</span>
                    <Input className='forminput' value={Bloodgroup} placeholder="Enter Blood Group"
                        name="name" onChange={enterbloodgroup} />
                </div>
                <div className='formitem'>
                    <span className='formitemname'>Age :</span>
                    <Input className='forminput' placeholder=" Enter age " value={Age}
                        type="number" onChange={enterage} />
                </div>
                <div className='formitem'>
                    <span className='formitemname'>Weight :</span>
                    <Input className='forminput' placeholder=" Enter weight " value={Weight}
                        type="number" onChange={enterweight} />
                </div>
                <div className='formitem'>
                    <Button className='Adduserbtn'
                        onClick={() => {
                            let userdetails = {
                                firstName: FirstName,
                                lastName: LastName,
                                phone: Phone,
                                email: Email,
                                bloodGroup: Bloodgroup,
                                age: Age,
                                weight: Weight,
                                 id: Id+1
                            }
                            if (userdetails.firstName === '' || userdetails.phone === '' ||
                                userdetails.email === '' || userdetails.age === '' ||
                                userdetails.weight === '' || userdetails.bloodGroup === '') {
                                alert("Please fill all the required detail")
                            }
                            else {

                                props.Adduser(userdetails);
                                setFirstName('');
                                setLastName('');
                                setEmail('');
                                setBloodgroup('');
                                setPhone('');
                                setAge('');
                                setWeight('');


                            }
                        }}>Add</Button>

                </div>

            </Form>
        </div>)

}

export default AddButton;