/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus, deleteCampus, deleteStudent} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>

      <div style={{ display: 'flex', gap: '10px' }}> 
        <Link to={`/editcampus/${campus.id}`}><button>Edit</button></Link>
        <Link to={`/campuses`}>
        <button onClick={()=>deleteCampus(campus.id)}>Delete</button>
        </Link>
        <Link to={`/newstudent`}><button>Add</button></Link>
      </div>

      {campus.students.length === 0 ? (
        <p>No students</p>
      ) : (
      campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
              <h3>{name}</h3>
            </Link>
            <Link to={`/students`}>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </Link>             
          </div>
        );
      })
      )}

      <img src={campus.imageUrl} alt="Campus Pic" style={{ width: '500px', height: 'auto' }}/>
    </div>
  );
};

export default CampusView;