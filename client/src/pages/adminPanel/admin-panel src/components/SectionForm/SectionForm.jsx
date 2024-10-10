import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'; // Ensure axios is imported

const SectionForm = ({
    onSubmit, // Submission logic passed as prop
    initialFormData = {},
    existingData,
    fields, // Pass the fields dynamically with types
    formTitle = 'Section Form', // Option for custom title
}) => {
    const navigate = useNavigate();

    const defaultFormData = {
        ...initialFormData, // Merges with any provided initial data
         // Initialize tags if not provided
    };

    const [formData, setFormData] = useState(defaultFormData);
    const [imagePreview, setImagePreview] = useState(defaultFormData?.ImgUrl || null);
    const [videoPreview, setVideoPreview] = useState(defaultFormData?.video_url || null);
    const [newTag, setNewTag] = useState('');
console.log( "fomrData",initialFormData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleMediaChange = (e) => {
        const file = e.target.files[0];
        const { name } = e.target;
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (name === 'ImgUrl') {
                    setImagePreview(reader.result);
                } else if (name === 'video_url') {
                    setVideoPreview(reader.result);
                }
                setFormData((prevData) => ({ ...prevData, [name]: file })); // Set file
            };
            reader.readAsDataURL(file);
        } else {
            if (name === 'ImgUrl') {
                setImagePreview(null);
            } else if (name === 'video_url') {
                setVideoPreview(null);
            }
            setFormData((prevData) => ({ ...prevData, [name]: null }));
        }
    };

    const baseUrl=import.meta.env.VITE_API_BASE_URL
    const uploadImage = async () => {
        if (formData.ImgUrl) { // Adjusted to use the correct field name
            const data = new FormData();
            data.append('image', formData.ImgUrl);
            try {
                const response = await axios.post(`${baseUrl}image/upload`, data, {
                    withCredentials: true,
                });
                return response.data.imgUrl; // Adjust based on your API response structure
            } catch (error) {
                console.error('Error uploading the file', error);
                return null; // Return null if there's an error
            }
        }
        return null; // Return null if no image is uploaded
    };

    const uploadVideo = async () => {
        if (formData.video_url) { // Adjusted to use the correct field name
            const data = new FormData();
            data.append('image', formData.video_url);
            try {
                const response = await axios.post(`${baseUrl}image/upload`, data, {
                    withCredentials: true,
                });
                return response.data.imgUrl; // Adjust based on your API response structure
            } catch (error) {
                console.error('Error uploading the video', error);
                return null; // Return null if there's an error
            }
        }
        return null; // Return null if no video is uploaded
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const finalData = { ...formData };

        // Upload image if changed
        if (formData.ImgUrl && formData.ImgUrl !== defaultFormData?.ImgUrl) {
            const uploadedImageUrl = await uploadImage();
            console.log( "uploadedImageUrl",uploadedImageUrl);
            if (uploadedImageUrl) {
                finalData.ImgUrl = uploadedImageUrl;
            }
        } else {
            finalData.ImgUrl = defaultFormData?.ImgUrl || null;
        }

        // Upload video if changed
        if (formData.video_url && formData.video_url !== defaultFormData?.video_url) {
            const uploadedVideoUrl = await uploadVideo();
            if (uploadedVideoUrl) {
                finalData.video_url = uploadedVideoUrl;
            }
        } else {
            finalData.video_url = defaultFormData?.video_url || null;
        }

        try {
            await onSubmit(finalData); // Custom submit logic with uploaded media URLs
            // navigate('/admin/results');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error.response?.data?.extraDetails[0] || 'Submission failed');
        }
    };

    const addTag = () => {
        if (newTag.trim() !== '') {
            const formattedTag = newTag.trim().replace(/,/g, '|'); 
            setFormData((prevData) => ({
                ...prevData,
                tags: prevData.tags ? prevData.tags + ',' + formattedTag.trim() : formattedTag.trim(),
            }));
            setNewTag('');
        }
    };

    const removeTag = (index) => {
        setFormData((prevData) => ({
            ...prevData,
            tags: prevData.tags.split(',').filter((_, i) => i !== index).join(','),
        }));
    };

    useEffect(() => {
        if (existingData) {
            setFormData({ ...defaultFormData, ...existingData });
            setImagePreview(existingData.ImgUrl);
            setVideoPreview(existingData.video_url);
        }
    }, [existingData]);

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl pl-4 font-semibold text-gray-800 mb-4">
                {formTitle}
            </h2>
            <div className="space-y-6">
                {fields.map((field) => {
                    const { name, label, type = 'text', placeholder = '', isNumber = false } = field;
                    return (
                        <div key={name} className="mb-6">
                            <label className="mb-2 block text-black dark:text-white">{label}</label>
                            {type === 'textarea' ? (
                                <textarea
                                    name={name}
                                    value={formData[name] || ''}
                                    onChange={handleChange}
                                    rows={6}
                                    placeholder={placeholder}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                />
                            ) : type === 'file' ? (
                                <div>
                                    <input
                                        type="file"
                                        name={name}
                                        accept={name === 'video_url' ? 'video/*' : 'image/*'}
                                        onChange={handleMediaChange}
                                        className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0  file:py-3 file:px-5 file:hover:bg-primary file:bg-primary file:bg-opacity-10 file:hover:bg-opacity-10 focus:border-primary  active:border-primary"
                                    />
                                    {name === 'ImgUrl' && imagePreview && (
                                        <div className="mt-4">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="w-full h-48 object-cover rounded-md"
                                            />
                                        </div>
                                    )}
                                    {name === 'video_url' && videoPreview && (
                                        <div className="mt-4">
                                            <video
                                                controls
                                                src={videoPreview}
                                                className="w-full h-48 object-cover rounded-md"
                                            />
                                        </div>
                                    )}
                                </div>
                            ) : type === 'tags'?
                            (fields.some((field) => field.name === 'tags') && (
                                <div className="mb-6">
                                  
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            id="newTag"
                                            name="newTag"
                                            value={newTag}
                                            onChange={(e) => setNewTag(e.target.value)}
                                            className="w-full placeholder:text-black rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                            placeholder="Add a tag..."
                                        />
                                        <button
                                            type="button"
                                            onClick={addTag}
                                            className="flex w-[80px] ml-2 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                                        >
                                            Add
                                        </button>
                                    </div>
                                    <div className="mt-4 flex flex-wrap">
                                        {formData.tags?.split(',').map((tag, index) => (
                                            tag.length > 0 && (
                                                <span key={index} className="bg-blue-200 inline-flex items-center px-3 py-1 bg-gray-200 rounded-full text-gray-700 mr-2 mt-2">
                                                    {tag}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeTag(index)}
                                                        className="ml-2 text-red-500"
                                                    >
                                                        &times;
                                                    </button>
                                                </span>
                                            )
                                        ))}
                                    </div>
                                </div>
                            ))
                            
                            :(
                                <input
                                    type={isNumber ? 'number' : type}
                                    name={name}
                                    value={formData[name] || 0}
                                    onChange={handleChange}
                                    placeholder={placeholder}
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                />
                            )}
                        </div>
                    );
                })}

                {/* Tag Handling */}
                {/* {fields.some((field) => field.name === 'tags') && (
                    <div className="mb-6">
                        <label htmlFor="tags" className="mb-2 block text-black dark:text-white">Tags</label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                id="newTag"
                                name="newTag"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                className="w-full placeholder:text-black rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                placeholder="Add a tag..."
                            />
                            <button
                                type="button"
                                onClick={addTag}
                                className="flex w-[80px] ml-2 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                            >
                                Add
                            </button>
                        </div>
                        <div className="mt-4 flex flex-wrap">
                            {formData.tags?.split(',').map((tag, index) => (
                                tag.length > 0 && (
                                    <span key={index} className="inline-flex items-center px-3 py-1 bg-gray-200 rounded-full text-gray-700 mr-2 mt-2">
                                        {tag}
                                        <button
                                            type="button"
                                            onClick={() => removeTag(index)}
                                            className="ml-2 text-red-500"
                                        >
                                            &times;
                                        </button>
                                    </span>
                                )
                            ))}
                        </div>
                    </div>
                )}
                 */}

            </div>

            <button
                type="submit"
                className="mt-6 w-full rounded bg-primary p-3 font-medium text-white hover:bg-opacity-90"
            >
                Submit
            </button>
        </form>
    );
};

export default SectionForm;
