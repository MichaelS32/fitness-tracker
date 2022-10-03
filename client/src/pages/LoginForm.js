import React, { useState, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const ref = useRef(null);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main>
      <div>
        <div>
          <h4>Login</h4>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                ref={ref}
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
                value={formState.email}
                autoComplete="current-email"
              />
              <input
                ref={ref}
                placeholder="Your password"
                name="email"
                type="password"
                id="password"
                onChange={handleChange}
                value={formState.password}
                autoComplete="current-password"
              />
              <button type="submit">
                Submit
              </button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
