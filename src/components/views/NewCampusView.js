/*==================================================
NewCampusView.js

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

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();
  const [errors, setErrors] = useState({});

  // Handle form validation
  const validateForm = () => {
    const errors = {};

    if (!props.name || typeof props.name !== 'string') {
      errors.name = 'Please enter a valid name.';
    }

    if (!props.address || typeof props.address !== 'string' || props.address.length < 5) {
      errors.address = 'Please enter a valid address.';
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

  // Render a New Campus view with an input form
  return (
    <div>
      <h1>New Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
              Add a Campus
            </Typography>
          </div>
          <form style={{ textAlign: 'center' }} onSubmit={handleSubmitForm}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Name: </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter campus name"
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Address: </label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Enter campus address"
            />
            {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
            <br />
            <br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL: </label>
            <input type="text" name="imageUrl" onChange={handleChange} placeholder="Enter image URL" />
            <br />
            <br />
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Description: </label>
            <input type="text" name="description" onChange={handleChange} placeholder="Enter description" />
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

export default NewCampusView;


           
