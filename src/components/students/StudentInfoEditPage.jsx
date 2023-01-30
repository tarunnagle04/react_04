import React, { useState, useContext, useEffect } from 'react';
import './StudentsPage.css';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'
import { DataContext } from '../routerFolder/NavigationRouters';

const StudentInfoEditPage = () => {
    const context = useContext(DataContext);
    const data = useLocation();
    const navigate = useNavigate();

    const [state, setDetails] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    });

    useEffect(() => {
        if(data.state !== null) {
            setDetails({
                name: data.state.details.name,
                age: data.state.details.age,
                course: data.state.details.course,
                batch: data.state.details.batch
            })
        }
    }, [data])

    // let studentsDetails = [];
    const changeHandler = (e) => {
        setDetails({...state,[e.target.name]: e.target.value});
    }

    const submitInfo = () => {
        if(data.state === null) {
            context.dispatchUserEvent('ADD_USER', { newUser: state });
            navigate('/students');
        } else {
            const newState = context.entries.map((obj, index) => {
                if (index === data.state.id) {
                    let myObj = {...obj};
                    myObj['name'] = state.name;
                    myObj['age'] = state.age;
                    myObj['course'] = state.course;
                    myObj['batch'] = state.batch;
                    return myObj;
                }
                return obj;
            });
            context.dispatchUserEvent('EDIT_USER', { newUser: newState });
            navigate('/students');
        }
    }

    return (
        <div className="add-student-form">
            <div className='upper-form-control'>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter name" name="name" value={state.name} onChange={changeHandler}/>
                    <label for="floatingInput">Name</label>
                </div>

                <div class="form-floating">
                    <input type="number" class="form-control" id="floatingInput" placeholder="Enter age" name="age" value={state.age} onChange={changeHandler}/>
                    <label for="floatingInput">Age</label>
                </div>
            </div>

            <div className='upper-form-control'>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter course" name="course" value={state.course} onChange={changeHandler}/>
                    <label for="floatingInput">Course</label>
                </div>

                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter batch" name="batch" value={state.batch} onChange={changeHandler}/>
                    <label for="floatingInput">Batch</label>
                </div>
            </div>

            <div className='form-buttons'>
                <Link to="/students"><button className='cancel-btn add-btn'>Cancel</button></Link>
                <button className='add-btn' onClick={submitInfo}>{data.state === null ? 'Submit' : 'Update'}</button>
            </div>
        </div>
    )
}

export default StudentInfoEditPage