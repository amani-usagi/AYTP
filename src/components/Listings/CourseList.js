import React from 'react';
import NewCourses from '../Cards/CardNewCourse'

const CourseList = (props) => {
    console.log(props);

    const deleteCourseHandler = (id) => {
        props.getCourseId(id);
    };

    const renderCourseList = props.courses.map((courses) => {
        return(
            <NewCourses courses={courses} clickHandler={deleteCourseHandler} key={ courses.id }></NewCourses>
        );
    });
    return (
        <div>
            {renderCourseList}
        </div>
    );
};

export default CourseList;