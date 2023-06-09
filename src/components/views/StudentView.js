/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
const StudentView = (props) => {
  const { student, deleteStudent } = props;

  // Render a single Student view 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{display: 'inline-flex', alignItems: 'center'}}>
      <img src={student.imageUrl} alt="Student Pic" style={{ width: 'auto', height: '64px', paddingRight: '16px' }}/>
      <h1>{student.firstname + " " + student.lastname}</h1>
      </div>

      {student.campus ? (
        <Link to={`/campus/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
        </Link>
      ) : (
        <p>No campus</p>
      )}

      
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>

      <div style={{ display: 'flex', gap: '10px' }}> 
        <Link to={`/editstudent/${student.id}`}><button>Edit</button></Link>
        <Link to={`/students`}>
          <button className="delete" onClick={() => deleteStudent(student.id)}>Delete</button>
        </Link>
      </div>
    </div>
  );

};

export default StudentView;