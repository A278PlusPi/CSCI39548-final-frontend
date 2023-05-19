/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";
import { deleteCampus } from "../../store/actions/actionCreators";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props;
  const { deleteCampus } = props;

  // Render a single Campus view with list of its students
  //   Single Campus View
  // 3. can navigate to the Single Campus View, and
  // ○ see details about a single campus, with all data fields, including enrolled students (if any)
  // ○ see an informative message if no students are enrolled at that campus
  // ○ navigate to the Single Student View and see any student's information
  // ○ add new/existing students to the campus (e.g., via link/button)
  // ○ delete students from the campus (e.g., via link/button)
  // ○ delete the campus
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <p>{campus.imageUrl}</p>

      {campus.students.length > 0 ? (
        campus.students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
            </div>
          );
        })
      ) : (
        <div>"No students enrolled in this school" </div>
      )}
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
      {/* ○ navigate to the Edit Campus View and edit the campus information */}
      {/* <Link to={`editcampus`}>
        <button>Edit campus</button>
      </Link> */}
      {/* <button onClick={() => deleteCampus(campus.id)}>Delete</button> */}
      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default CampusView;
