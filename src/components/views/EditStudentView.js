import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#cff',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#00f',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#ccf',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
  const {handleChange, handleSubmit } = props;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div>
      <h1>Edit Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Roboto Mono, Consolas, Courier, sans-serif', fontSize: '20px', color: '#00f'}}>
              Edit Student
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" onChange ={(e) => handleChange(e)} defaultValue={props.student.firstname}required/>
            <br/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" onChange ={(e) => handleChange(e)} defaultValue={props.student.lastname}required/>
            <br/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input type="text" name="email" onChange ={(e) => handleChange(e)} defaultValue={props.student.email}required/>
            <br/>
            <br/>


            <label style= {{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="number" min= "0.0" max= "4.0" step="0.001" name="gpa" onChange ={(e) => handleChange(e)} defaultValue={props.student.gpa}/>
            <br/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus ID: </label>
            <input type="number" min= "1" name="campusId" onChange ={(e) => handleChange(e)} defaultValue={props.student.campusId}required/>
            <br/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Image URL: </label>
            <input type="text" name="imageUrl" onChange ={(e) => handleChange(e)} defaultValue={props.student.imageUrl}/>
            <br/>
            <br/>

            <button type="submit">
              Update
            </button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default EditStudentView; 