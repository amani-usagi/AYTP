import React, {useState, useEffect} from "react";
import { uuid } from 'uuidv4';

// components

import FormNewCourse from "../../components/Forms/NewCourse";
import CardCourse from "../../components/Cards/CardNewCourse";
import CourseTile from '../../components/Tables/CourseTile';


function Courses() {

    const LOCAL_STORAGE_KEY = "Courses";
	const [courses, setCourses] = useState([]);

	const addCourseHandler = (course) => {
		console.log(course);
		setCourses([...courses, {id: uuid(), ...course}]);
	};

	const removeCourseHandler = (id) => {
		const newCourseList = courses.filter((course) => {
			return course.id !== id;
		});
		setCourses(newCourseList);
	};

	useEffect(() => {
		const retriveCourses = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY ));
		if (retriveCourses) setCourses(retriveCourses);
	}, []);

	useEffect(() => {
		localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(courses));
	}, [courses]);

    return (
    <>
		<div className="flex flex-wrap -mt-16">
			<div className="w-full xl:w-8/12 mb-12 px-4">
				<CardCourse>
					{courses.map((c) => {
						return <CourseTile course={c} removeCourse={removeCourseHandler}/>
					})}
				</CardCourse>
			</div>
			<div className="w-full lg:w-4/12 mb-12 px-4">
				<FormNewCourse addCourseHandler={addCourseHandler}/>
			</div>
		</div>
    </>
    );
};

export default Courses;
