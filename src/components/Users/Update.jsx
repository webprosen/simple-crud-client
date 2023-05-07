import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            'method': 'PUT',
            'headers': {
                'content-type': 'application/json',
            },
            'body': JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/users');
            });
        form.reset();
    }

    return (
        <div>
            <h2>Update single user:</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" />
                <input type="text" name="email" defaultValue={loadedUser?.email} id="" />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;