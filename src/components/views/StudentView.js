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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* {student.campus.name !== null ? (
        <>
          <h1>{student.firstname + " " + student.lastname}</h1>
          <h3>{student.campus.name}</h3>
          <div key={student.campus.id}>
            <Link to={`/campuses/${student.campus.id}`}>
              <h2>{student.campus.name}</h2>
            </Link>
          </div>
        </>
      ) : (
        <div>"student is not enrolled in any campus!</div>
      )} */}
      <h1>{student.firstname + " " + student.lastname}</h1>
      <p>{student.campus.name}</p>
      <p>{student.email}</p>
      <p>{student.gpa}</p>
      <Link to={`/editstudent/${student.id}`}>
        <button>Edit</button>
      </Link>
      <img
        src={student.imageUrl}
        alt="Student Pic"
        style={{ width: "500px", height: "auto" }}
      />
    </div>
  );
};

export default StudentView;
