/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none',
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px',
  },
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();
  const [errors, setErrors] = useState({});

  // Handle form validation
  const validateForm = () => {
    const errors = {};

    if (!props.firstname || typeof props.firstname !== 'string') {
      errors.firstname = 'Please enter a valid first name.';
    }

    if (!props.lastname || typeof props.lastname !== 'string') {
      errors.lastname = 'Please enter a valid last name.';
    }

    if (!props.email || typeof props.email !== 'string') {
      errors.email = 'Please enter a valid email.';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      handleSubmit(e);
    }
  };

  // Render a New Student view with an input form
  return (
    <div>
      <h1>New Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
              Add a Student
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={handleSubmitForm}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name: </label>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              placeholder="Enter first name"
            />
            {errors.firstname && <span style={{ color: 'red' }}>{errors.firstname}</span>}
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name: </label>
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              placeholder="Enter last name"
            />
            {errors.lastname && <span style={{ color: 'red' }}>{errors.lastname}</span>}
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus Id: </label>
            <input
              type="text"
             
              name="campusId"
              onChange={handleChange}
              placeholder="Enter campus ID"
            />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email : </label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL : </label>
            <input
              type="text"
              name="imageUrl"
              onChange={handleChange}
              placeholder="Enter image URL"
            />
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA : </label>
            <input
              type="text"
              name="gpa"
              onChange={handleChange}
              placeholder="Enter GPA"
            />
            {errors.gpa && <span style={{ color: 'red' }}>{errors.gpa}</span>}
            <br />
            <br />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewStudentView;
