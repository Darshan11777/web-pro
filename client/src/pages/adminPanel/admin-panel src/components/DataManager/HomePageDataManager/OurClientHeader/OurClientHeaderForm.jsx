// OurClientHeaderDataForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const OurClientHeaderDataForm = ({ existingData }) => {
    const navigate = useNavigate(); 
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const initialFormData = {
        section_name: '',
        header: '',
        description: '',
        highlighted_word: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${baseUrl}section/header/our-client`, formData);
            navigate('../');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error.response?.data?.message || 'Error submitting form');
        }
    };

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const res = await axios.get(`${baseUrl}section/header/our-client`);
                const headerData = res.data[0];

                setFormData({
                    section_name: headerData.section_name,
                    header: headerData.header,
                    description: headerData.description,
                    highlighted_word: headerData.highlighted_word,
                });
            } catch (error) {
                console.error('Error fetching header:', error);
            }
        };
        fetchHeader();
    }, []);

    return (
        <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
                {existingData ? 'Update Header' : 'Add New Header'}
            </h2>
            <div className="space-y-6">
                <div className="mb-6">
                    <label className="mb-2 block text-black">Section Name</label>
                    <input
                        type="text"
                        name="section_name"
                        value={formData.section_name}
                        onChange={handleChange}
                        placeholder="Type your section name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                </div>
                <div className="mb-6">
                    <label className="mb-2 block text-black">Header</label>
                    <input
                        type="text"
                        name="header"
                        value={formData.header}
                        onChange={handleChange}
                        placeholder="Type your header"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                </div>
                <div className="mb-6">
                    <label className="mb-2 block text-black">Highlighted Header Text</label>
                    <input
                        type="text"
                        name="highlighted_word"
                        value={formData.highlighted_word}
                        onChange={handleChange}
                        placeholder="Type your highlighted word"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                </div>
                <div className="mb-6">
                    <label className="mb-2 block text-black">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Type your description"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                    Update Header
                </button>
            </div>
        </form>
    );
};

export default OurClientHeaderDataForm;
