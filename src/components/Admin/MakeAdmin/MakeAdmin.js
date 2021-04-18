import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import SideBar from '../../shared/SideBar/SideBar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { handleSubmit } = useForm();
    const[admin,setAdmin]=useState(null)

    const onSubmit = data => {
        const adminPanel = {
           admin:admin
        };
        const url = `http://localhost:3002/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminPanel)
        })
            .then(res => console.log('server side response', res))
    };

    const handleChange = (e) => {
        if (e.target.name === 'admin') {
            setAdmin(e.target.value)
        }
    }
    return (
        <div className="row">
            <SideBar />
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, top: 50, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-center">Make Admin</h5>
                <Form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Col} >
                        <Form.Label>Admin Email</Form.Label>
                        <Form.Control type="email" name="admin" placeholder="Enter admin email" onChange={handleChange} />
                    </Form.Group>

                    <button className="btn btn-success mx-3" type="submit">
                        Submit
                   </button>
                </Form>
            </div>
        </div >
    );
};

export default MakeAdmin;