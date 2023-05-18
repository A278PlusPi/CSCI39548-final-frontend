/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <p>{student.campus.name}</p>
      <p>{student.email}</p>
      <p>{student.gpa}</p>
      <Link to={`/editstudent/${student.id}`}><button>Edit</button></Link>
    </div>
  );

};

export default StudentView;