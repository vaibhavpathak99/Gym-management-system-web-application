import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import gymImage from './gymImage/admin.jpg'; 

function Read() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Fetch data from API
        axios.get('http://localhost:3000/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div 
            className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light' 
            style={{
                backgroundImage: `url(${gymImage})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='w-50 border bg-white shadow px-3 pb-3 rounded'>
                <h3>Detail of User</h3>
                <div className='mb-2'>
                    <strong>Name: {data.name}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Email: {data.email}</strong>
                </div>
                <div className='mb-3'>
                    <strong>Phone: {data.phone}</strong>
                </div>
                <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
    );
}

export default Read;
