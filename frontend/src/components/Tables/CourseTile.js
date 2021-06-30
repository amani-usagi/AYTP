import React from 'react';
import profile from '../../assets/img/bprofile.svg';

const CourseTile = (props) => {
    const {id, cname, cnumber, date, about } = props.course;
    return(
        <>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <img src={profile} className="h-12 w-12 bg-white rounded-full border -mt-10 mr-2 -ml-2" alt="..." ></img>{" "}
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">{cname} <span>{cnumber}</span></p>
                    
                    <p className="text-sm font-normal text-gray-600 dark:text-gray-200"> {about} </p>
                    <p className="text-xs font-light text-gray-400 dark:text-gray-200"> {date ?? "3-May-2022"} </p>
                    <div>
                        <i className="fas fa-edit text-xs mr-1" style={{color:"blue"}}></i>
                        <i className="fa fa-trash text-xs" aria-hidden="true" onClick={() => props.removeCourse(id)} style={{color:"red"}}></i>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default CourseTile; 