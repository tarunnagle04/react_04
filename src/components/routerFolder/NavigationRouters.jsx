import React, { useState } from 'react';
import HomePage from '../home/HomePage';
import StudentsPage from '../students/StudentsPage';
import ContactUs from '../contactUs/ContactUs';
import StudentInfoEditPage from '../students/StudentInfoEditPage';
import { Routes, Route } from 'react-router-dom';

export const DataContext = React.createContext("");

const NavigationRouters = () => {
    const [data, setData] = useState([]);

    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_USER':
                setData([ ...data, payload.newUser ]);
                return;
            case 'EDIT_USER':
                setData(payload.newUser);
                return;
            default:
                return;
        }
    };

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>  
            <Route path="/students" element={
                <DataContext.Provider value={{entries : data, dispatchUserEvent }}>
                    <StudentsPage/>
                </DataContext.Provider>
            }/>
            <Route path="/contact-us" element={<ContactUs/>}/>
            <Route path="/students-desc" element={
                <DataContext.Provider value={{entries : data, dispatchUserEvent}}>
                    <StudentInfoEditPage/>
                </DataContext.Provider>
            }/>
            <Route path="/students-desc/:id" element={
                <DataContext.Provider value={{entries : data, dispatchUserEvent}}>
                    <StudentInfoEditPage/>
                </DataContext.Provider>
            }/>
        </Routes>
    )
}

export default NavigationRouters;