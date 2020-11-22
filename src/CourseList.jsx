import React, { Component } from 'react'


const CourseList = ({courseList}) => {
    return(
        <div>
            {courseList.map(item => {
                return(
                    <ul>
                        <li>{item.name} : {item.exercises}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default CourseList