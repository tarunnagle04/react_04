import React, {useContext} from 'react';
import './StudentsPage.css';
import { Link } from 'react-router-dom';
import { DataContext } from '../routerFolder/NavigationRouters';

const StudentsTable = () => {
    const context = useContext(DataContext);

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    {context.entries.map((x,i) => 
                        <tr key={i}>
                            <td>{x.name}</td>
                            <td>{x.age}</td>
                            <td>{x.course}</td>
                            <td>{x.batch}</td>
                            <td><Link to={`/students-desc/${i + 1}`} state={{details: x, id: i}}>Edit</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable