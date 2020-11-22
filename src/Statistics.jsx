import React, { } from 'react'


const Statistics = ({good,neutral, negative}) => {
    if( good || neutral || negative){
    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>Good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>Negative</td>
                    <td>{negative}</td>
                </tr>
                <tr>
                    <td>All</td>
                    <td>{good+negative+neutral}</td>
                </tr><tr>
                    <th>Company</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>Good</td>
                    <td>{good}</td>
                </tr>
                <tr>
                    <td>Neutral</td>
                    <td>{neutral}</td>
                </tr>
                <tr>
                    <td>Negative</td>
                    <td>{negative}</td>
                </tr>
                <tr>
                    <td>All</td>
                    <td>{good+negative+neutral}</td>
                </tr>
                </tbody>
                
            </table>

            <table>
                <tbody>
                <tr>
                    <td>Average</td>
                    <td>{((good*1)+(neutral*0)+(negative*-1))/3}</td>
                </tr>
                <tr>
                    <td>Percentage</td>
                    <td>{(good)/(good+neutral+negative)}</td>
                </tr>
                </tbody>
                
            </table>
        </div>
    )
    }
    return(
        <h4>No Data</h4>
    )
    
   
}

export default Statistics