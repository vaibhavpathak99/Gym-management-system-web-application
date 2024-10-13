import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import gymImage from './gymImage/add.jpg';
import { message } from 'antd';  // Import Ant Design message component

function Create() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [messageApi, contextHolder] = message.useMessage(); // Setup message API
  const navigate = useNavigate();

  // Success message function
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'User successfully added!',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/users', value)
      .then(res => {
        console.log(res);
        success();  // Trigger success message on successful response
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div 
      className="d-flex flex-column justify-content-center align-items-center w-100 vh-100" 
      style={{
          backgroundImage: `url(${gymImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h1>Add Users</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Enter the name'
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                name='email'
                className='form-control'
                placeholder='Enter email'
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
            </div>

            <div className='mb-2'>
              <label htmlFor='phone'>Phone</label>
              <input
                type='text'
                name='phone'
                className='form-control'
                placeholder='Enter the number'
                value={value.phone}
                onChange={(e) => setValue({ ...value, phone: e.target.value })}
              />
            </div>

            {/* Ant Design context holder for message */}
            {contextHolder}

            <button className='btn btn-success' type="submit">Submit</button>
            <button className='btn btn-primary ms-3' onClick={() => navigate('/')}>Back</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
