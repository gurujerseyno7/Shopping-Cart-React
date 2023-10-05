import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addLogin } from '../../Slices/LoginSlice';
import './SignIn.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const SignIn = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Reuse the same validation schema as in the sign-up component
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}$/,
        'Invalid email format'
      )
      .required('Email is required'),
      password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Initialize Formik with the same validation schema
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const loggedInUser = user.find(
        (e) => e.email === values.email && e.password === values.password
      );
      console.log(loggedInUser);
      dispatch(addLogin(loggedInUser));

      if (loggedInUser) {
        alert('Login successful');
        navigate('/products');
      } else {
        alert('Login failed');
      }
    },
  });

  const handleButtonClick = () => {
    navigate('/admin/login');
  };
  return (
    <div className='h'>
      <div className='kk'>
        <form className='pp text-' onSubmit={formik.handleSubmit}>
          <h2 className='text-center text-warning'>Login</h2>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${formik.errors.password ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>
          <button className="btn btn-outline-warning btn-block mb-4 w-50" type="submit">
            Sign in
          </button>
          <div className="text-center">
            <p>
              Not a member? <Link to='/user/signup'>Register</Link>
            </p>
            <button className='btn btn-outline-primary admin ' onClick={handleButtonClick}>Admin login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
