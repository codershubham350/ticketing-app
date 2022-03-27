import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };

  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <h1 style={{ marginTop: '1rem' }}>Sign In</h1>
        <div className='form-group'>
          <label className='form-label' style={{ marginTop: '1rem' }}>
            Email Address
          </label>
          <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label className='form-label' style={{ marginTop: '1rem' }}>
            Password
          </label>
          <input
            placeholder='Password'
            style={{ marginBottom: '1rem' }}
            vlaue={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
          />
        </div>
        {errors}
        <button style={{ marginTop: '2rem' }} className='btn btn-primary'>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
