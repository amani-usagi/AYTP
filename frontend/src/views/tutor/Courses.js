import React, {useState, useEffect} from "react";
import { uuid } from 'uuidv4';

// components

import FormNewCourse from "../../components/Forms/NewCourse";
import CourseList from "../../components/Listings/CourseList";


function Courses() {

    const LOCAL_STORAGE_KEY = "Courses";
	const [courses, setCourses] = useState([]);

	const addCourseHandler = (course) => {
		console.log(course);
		setCourses([...courses, {id: uuid(), ...course }]);
	};

	const removeCourseHandler = (id) => {
		const newCourseList = Courses.filter((course) => {
			return course.id !== id;
		});
		setCourses(newCourseList);
	};

	useEffect(() => {
		const retriveCourses = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY));
		if (retriveCourses) setCourses(retriveCourses);
	}, []);

	useEffect(() => {
		localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(courses));
	}, [courses]);

    return (
    <>
    <div className="flex flex-wrap -mt-16">
        <div className="w-full xl:w-8/12 mb-12 px-4">
            <CourseList courses={courses} getCourseId={removeCourseHandler}/>
        </div>
        <div className="w-full lg:w-4/12 mb-12 px-4">
            <FormNewCourse addCourseHandler={addCourseHandler}/>
        </div>
    </div>
    </>
    );
};

export default Courses;
