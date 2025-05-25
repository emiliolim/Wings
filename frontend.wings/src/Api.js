import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
export const get_users = async () =>
{
    const response = await axios.get(`${API_URL}/users`);
    return response.data;      
};

export const add_user = async (formData) =>
{
    const response = await axios.post(`${API_URL}/users`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const update_user = async (id, formData) =>
{
    const response = axios.post(`${API_URL}/users/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};

export const delete_user = async (id) =>
{
    const response = axios.post(`${API_URL}/users/${id}`);
    return response.data;
};