import React, { useState, useEffect } from 'react';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://ankara.hostingasp.pl/api/contacts');
                const data = await response.json();
                setUsers(data); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); 
    }, []); 

    return (
        <div>
            <h2>Users List</h2>
            <table>
                {users.map(user => (
                    <tr>
                        <td>id: {user.id} name: {user.firstName}, {user.lastName}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default UsersList;