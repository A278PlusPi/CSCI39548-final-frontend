import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { EditStudentView } from '../views';
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname:"",
      email: "", 
      gpa: 0.0, 
      campusId: null,
      imageUrl: "",
      redirect: false, 
      redirectId: null,
    };
  }


  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    let changeStudent = {
        firstname: this.state.firstname, 
        lastname:this.state.lastname,
        email: this.state.email, 
        gpa: this.state.gpa, 
<<<<<<< HEAD
        campusId: this.props.student.campusId,
        // id: this.props.student.campusId,
        imageUrl: this.props.student.imageUrl
=======
        campusId: this.state.campusId,
        imageUrl: this.state.imageUrl,
        id: this.props.student.id
>>>>>>> main
      };

    await this.props.editStudent(changeStudent)

    // Update state, and trigger redirect to show the new student
    this.setState({
        firstname: "", 
        lastname:"",
        email: "", 
        gpa: 0.0, 
        imageUrl: "",
        redirect: true, 
        redirectId: this.props.student.id

    });
  }

  componentDidMount(){
    this.props.fetchStudent(this.props.student.id)
    this.setState({
        firstname: this.props.student.firstname, 
        lastname:this.props.student.lastname,
        email: this.props.student.email, 
        gpa: this.props.student.gpa, 
        campusId: this.props.student.campusId,
        imageUrl: this.props.student.imageUrl,
        redirect: false, 
        redirectId: null
    })
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />

        <EditStudentView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}    
          student={this.props.student}
          editStudent={this.props.editStudent}
          fetchStudent={this.props.fetchStudent}
        />
      </div>          
    );
  }
}

// The following input argument is passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapState = (state) => {
    return {
        student: state.student
    }
}

const mapDispatch = (dispatch) => {
    return({
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (student) => dispatch(fetchStudentThunk(student))
    })
}

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(EditStudentContainer); 