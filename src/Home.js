import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import gymImage from './gymImage/gym-member.jpg';

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();  // Correctly initialize useNavigate

    useEffect(() => {
        // Fetch data from API
        axios.get('http://localhost:3000/users')
            .then(res => {
                console.log(res.data);  // Log the response data for debugging
                setData(res.data);  // Update state with API data
            })
            .catch(err => {
                console.error('Error:', err.response ? err.response.data : err.message);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            axios.delete('http://localhost:3000/users/' + id)
                .then(res => {
                    // After deletion, filter out the deleted user from the state to update the UI
                    setData(prevData => prevData.filter(user => user.id !== id));
                    console.log("User deleted successfully");
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div 
            className='d-flex flex-column justify-content-center align-items-center w-100 vh-100' 
            style={{
                backgroundImage: `url(${gymImage})`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='w-75 bg-white border shadow p-4 rounded'>
                <div className='d-flex justify-content-between mb-3'>
                    <h1 style={{paddingLeft:'320px'}}>List of Gym Members</h1>
                    <Link 
    to="/create" 
    className="btn" 
    style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        textDecoration: 'none',
        fontSize: '26px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        cursor: 'pointer'
    }}
    onMouseEnter={e => e.target.style.backgroundColor = 'darkgreen'}
    onMouseLeave={e => e.target.style.backgroundColor = 'green'}
>
    Add
</Link>

                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th class="border border-slate-300 ...">#</th>
                            <th class="border border-slate-300 ...">ID</th>
                            <th class="border border-slate-300 ...">Name</th>
                            <th class="border border-slate-300 ...">Email</th>
                            <th class="border border-slate-300 ...">Phone</th>
                            <th class="border border-slate-300 ...">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, index) => (
                            <tr key={index}>
                                <td class="border border-slate-300 ...">{index + 1}</td>
                                <td class="border border-slate-300 ...">{d.id}</td>
                                <td class="border border-slate-300 ...">{d.name}</td>
                                <td class="border border-slate-300 ...">{d.email}</td>
                                <td class="border border-slate-300 ...">{d.phone}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-primary me-2'>Read</Link>
                                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={() => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
