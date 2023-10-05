import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Admin.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const AdminLogin = ({ adminLogin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define validation schema using Yup
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

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
      const staticAdminEmail = 'admin@gmail.com';
      const staticAdminPassword = 'admin123';

      if (values.email === staticAdminEmail && values.password === staticAdminPassword) {
        alert('Login Successful');
        navigate('/admin');
      } else {
        alert('Login failed');
      }
    },
  });
  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className='n'>
      <div className='kk'>
        <form className='pp' onSubmit={formik.handleSubmit}>
          <h2 className='text-center text-warning'>ADMIN</h2>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${
                formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${
                formik.touched.password && formik.errors.password ? 'is-invalid' : ''
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="invalid-feedback">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            className="btn btn-outline-warning btn-block mb-4 w-100"
            type="submit"
          >
            SIGN IN
          </button>
          <div className="text-center">
            {/* <p>Not a member? <Link to='/user/register'>Register</Link></p> */}
            <button className='btn btn-outline-primary admin ' onClick={handleButtonClick}>User login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
