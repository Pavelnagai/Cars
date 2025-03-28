import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface IUser {
 id: number;
 chatId: number;
 firstName: string;
 lastName: string;
 username: string;
}

export const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users');
                setUsers(response.data);
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;

    return (
        <div>
            <h2>Список пользователей бота</h2>
            <ul>
                {users.map((user: IUser) => (
                    <li key={user.id}>
                        <p>ID: {user.chatId}</p>
                        <p>Имя: {user.firstName} {user.lastName}</p>
                        <p>Username: @{user.username}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
