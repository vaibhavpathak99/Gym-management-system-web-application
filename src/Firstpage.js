import React from 'react';
import gymImage0 from './gymImage/workout.jpg' //first image
import gymImage1 from './gymImage/firstpage.jpg'; // Second image
import gymImage2 from './gymImage/firstpage2.jpg'; // third image
import { Pie } from '@ant-design/plots';
import { Link, useNavigate } from 'react-router-dom';

function FirstPage() {
  const [data, setData] = React.useState([]);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  React.useEffect(() => {   // usedantd design
    setTimeout(() => {
      setData([
        { type: 'Available Trainer', value: 27 },
        { type: 'MALE', value: 25 },
        { type: 'FEMALE', value: 18 },
        { type: 'COACH', value: 15 },
        { type: 'MANAGER', value: 10 },
      ]);
    }, 1000);
  }, []);

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      position: 'right',
    },
    radius: 1, // Full circular chart
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add any authentication logic if required
    // For now, we just redirect to the home page
    navigate('/home'); // Navigate to Home.js
  };

  return (
    <>
      {/* First div with the first image */}
      <div
        style={{
          backgroundImage: `url(${gymImage0})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          position: 'relative',
        }}
      >
        {/* Text overlay section */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '48px', marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#DE3163' }}>
            Welcome to Vaibhav Fitness
          </h1>
          <p style={{ fontSize: '20px', maxWidth: '600px', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
            Your journey to a healthier and stronger you starts here. Join our community and transform your body with the
            best facilities and expert trainers.
          </p>
        </div>
          
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '10px',
            backgroundColor: 'rgba(255, 235, 205, 0.8)', // Transparent background for text visibility
          }}
        >
          <Link to="/Concat" style={{ textDecoration: 'none', color: 'inherit', fontSize: '25px' }}>CONTACT</Link>
          <Link to="/triner"style={{textDecoration: 'none', color: 'inherit', fontSize: '25px'}}>TRAINER AVAILABLE</Link>
          <Link to="/price"style={{textDecoration: 'none', color: 'inherit', fontSize: '25px'}}>DISCOUNT</Link>
        </div>
      </div>

      {/* Login Form Section */}
     
      <div
        style={{
          backgroundImage: `url(${gymImage1})`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f0f0f0', // Light background for contrast
        }}
      >
        
        
        <div
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: '300px',
            zIndex: 0, // Behind the warning text
          }}
        > 
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#DE3163',
                color: '#fff',
                padding: '10px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                width: '100%',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Second div with the second image and pie chart */}
      <div
        style={{
          display: 'flex',
          height: '100vh',
          backgroundColor: '#f0f0f0', // Light background for contrast
        }}
      >
        {/* Left side: Image with services list */}
        <div
          style={{
            flex: '1',
            display: 'flex', // Enable flexbox
            alignItems: 'center', // Center items vertically
            justifyContent: 'center', // Center items horizontally
            backgroundImage: `url(${gymImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100%',
            position: 'relative', // Set relative position for absolute elements inside
          }}
        >
          {/* Services List */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional background for visibility
              padding: '10px',
              borderRadius: '5px', // Rounded corners
              textAlign: 'center', // Center text within the box
              width: '500px',
            }}
          >
            <h4>Services</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Remove default padding */}
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Yoga Classes</li>
              <li>Weight loss</li>
              <li>Weight gain</li>
              <li>Nutritional Guidance</li>
            </ul>
          </div>
        </div>

        {/* Right side: Pie chart */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div style={{ width: '50%' }}>
            <Pie {...config} />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: '#2c2c2c',
          color: '#fff',
          padding: '40px 0',
          textAlign: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              flex: '1 1 300px',
              marginBottom: '20px',
            }}
          >
            <h4 style={{ marginBottom: '15px', fontSize: '18px' }}>About Us</h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Vaibhav Fitness offers state-of-the-art facilities, expert trainers, and a friendly environment to help you reach your fitness goals.
            </p>
          </div>
          <div
            style={{
              flex: '1 1 300px',
              marginBottom: '20px',
            }}
          >
            <h4 style={{ marginBottom: '15px', fontSize: '18px' }}>Opening Hours</h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Mon-Fri: 6 AM - 10 PM</p>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Sat-Sun: 8 AM - 8 PM</p>
          </div>
          <div
            style={{
              flex: '1 1 300px',
              marginBottom: '20px',
            }}
          >
            <h4 style={{ marginBottom: '15px', fontSize: '18px' }}>Contact Us</h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Email: info@vaibhavfitness.com</p>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Phone: +91-1234567890</p>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Location: 123 Fitness St, Mumbai, India</p>
          </div>
        </div>
        <p style={{ marginTop: '20px', fontSize: '12px', color: '#ccc' }}>© 2024 Vaibhav Fitness. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default FirstPage;
