import WithLogging from '../HOC/WithLogging.jsx'
import CourseListRow from './CourseListRow.jsx'
import './CourseList.css'

function CourseList({ courses = [] }) {
  return (
    <>
      <table id='CourseList'>
        <thead>
          { courses.length === 0 ? (
              <CourseListRow isHeader={true} textFirstCell='No course available yet' />
            ) : (
              <>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
              </>
            )
          }
        </thead>
        <tbody>
          {
            courses.map(course => {
              return <CourseListRow 
                key={course.id}
                isHeader={false}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default WithLogging(CourseList)