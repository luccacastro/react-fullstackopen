import React, { Component } from 'react'
import CourseList from './CourseList'

const Course = ({courses}) =>{
    let sum = 0
    return (
        <div>
            {courses.map(course => 
                <div>
                    <h2>{course.name}</h2>
                    <CourseList courseList={course.parts}/>
                    <p>total of {sum} exercises</p>
                </div>
            )}
        </div>
    )
        
}

export default Course