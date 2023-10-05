import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../../Slices/UserSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './SignUp.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const SignUp = ({ user }) => {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
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
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Dispatch your addUser action or any other logic here
      dispatch(addUser({ id: user.length + 1, ...values, cartitem: [] }));
     
    
      formik.resetForm(); // Reset form after submission
    navigate('/')
    },
  });

  return (
    <div className='k'>
      <div className='kk'>
        <form className='ppp' onSubmit={formik.handleSubmit}>
          <h3 className=' text-center text-danger '> Register </h3>
          <div className="form-outline">
            <label className="form-label " htmlFor="name">
              User Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="form-control"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-outline  mb-2">
            <label className="form-label text-left " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`form-control ${
                formik.touched.email && formik.errors.email ? 'is-invalid' : ''
              }`}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="invalid-feedback text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-outline mb-2">
            <label className="form-label  text-left" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="form-control"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error text-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-outline-danger btn-block mb-2 w-50"
          >
            Sign Up
          </button>
          <div className="text-center">
            <p>
              Already a member? <Link to='/'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
