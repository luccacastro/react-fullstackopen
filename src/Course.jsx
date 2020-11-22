import React, { Component } from 'react'


const Course = ({courses}) =>{
    let sum = 0
    return (
        <div>
            {courses.map(course => 
                <div>
                    <h2>{course.name}</h2>
                    {course.parts.map(item => {
                        sum = course.parts.map(x => x.exercises).reduce((x,y) => x + y)
                        return (
                            <ul>
                                <li>{item.name} : {item.exercises}</li>
                            </ul>    
                            )
                        }  
                    )}
                    <p>total of {sum} exercises</p>
                </div>
            )}
        </div>
    )
        
}

export default Course