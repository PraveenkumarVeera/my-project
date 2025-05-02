import React, { useEffect, useRef, useState } from 'react'
import useFetchUsers from '../Hooks/FetchUserHook';
import { useNavigate} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Home() {
  const navigate = useNavigate();
// const { users, initFetchUsers } = useFetchUsers();
const { data: users, isLoading, isError } = useFetchUsers();
const [color,setColor] = useState('red');
const [submittedData, setSubmittedData] = useState(null);

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

  const handleSubmit = (values) => {
    console.log('Form submitted:', values);
    setSubmittedData(values);
  };

const inputRef = useRef(null);

console.log('render');

  // useEffect(() => {
  //   initFetchUsers();
  // }, []);
  // console.log('use',users);

  const handleInputLog = () => {
    console.log('Input Value:', inputRef.current.value);
  };
  
  const changeColor = () => {
      setColor(()=> color === 'red'?'blue':'red' )
  }

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error loading users</p>;
  
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:color}}>
      <input ref={inputRef} style={inputStyles} placeholder='Enter Name' />
      <button onClick={handleInputLog} >
        Log Input Value
      </button>
      <p style={{color:'white'}}>{inputRef.current?.value}</p>
      
      <button style={{ marginBottom: '20px' }} onClick={() => navigate('setting')}>Go to Setting</button>

      <button onClick={changeColor} style={{ marginBottom: '20px' }}>
         {color === 'red' ? 'Change to Blue' : 'Change to Red'} 
      </button>
      {users? users.map(item => (
        <div>
        <p style={{fontWeight:'bold'}}>Name : <span style={{color:'white'}}>{item?.name}</span></p>
        <p style={{fontWeight:'bold'}}>Email : <span style={{color:'white'}}>{item?.email}</span></p>
        </div>
      )):null}
      <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Email : </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label>Password : </label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button style={{display:'flex',justifySelf:'center'}} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>

    {submittedData && (
        <div style={greeting}>
          <h2>Hi!</h2>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <button onClick={() => setSubmittedData(null)}>Clear</button>
        </div>)}
    </div>
  )
}

const inputStyles = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  width: '250px',
  fontSize: '16px',
  marginTop:20
};

const greeting = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius:'5px',
}

export default Home;