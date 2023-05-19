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
      {student.campus.name !== null ? (
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
      )}
      <div> edit student view </div>
    </div>
  );
};

export default StudentView;
