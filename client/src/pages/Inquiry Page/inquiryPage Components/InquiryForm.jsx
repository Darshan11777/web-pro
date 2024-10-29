import React, { useState } from 'react'

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        budget: "",
        attachment: "",
        message: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      console.log( "formData",formData);

        // State to store the file name
  const [fileName, setFileName] = useState("");

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file selected
    if (file) {
      setFileName(file.name); // Set the file name in state
      setFormData({ ...formData, attachment: file }); // Update the formData with the file
    } else {
      setFileName(""); // Reset the file name if no file is selected
      setFormData({ ...formData, attachment: "" }); // Update the formData with an empty value
    }
    handleInputChange(e); // Call the original input change handler if needed
  };
  return (
      <div className=" mx-auto py-[100px] container">
         {/* Form Section */}
     <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
       {/* Form Fields with Floating Labels */}
       {[
  { name: "firstName", label: "First name", type: "text" },
  { name: "lastName", label: "Last name", type: "text" },
  { name: "phoneNumber", label: "Phone number", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "budget", label: "Budget", type: "text" },
  { name: "attachment", label: "Attachment", type: "file" },
  { name: "message", label: "Your message", type: "text" },
].map(({ name, label, type }, index) => {
  return name === "attachment" ? (
    <div className="relative z-0" key={index}>
    <input
      type={type}
      name={name}
      id="attachment" // Associate the label with the input
      className={`hidden`}
      onChange={handleFileChange} // Handle file change event
    />
    <label
      htmlFor="attachment" // Associate the label with the input
      className="cursor-pointer block w-full border-b-[1px] border-[#453B57] bg-transparent p-2 text-gray-500"
    >
      {fileName || "Attach File"} {/* Display file name or fallback to 'Attach File' */}
    </label>
  </div>
  ) : (
    <div className={`relative z-0 ${name === "message" ? "col-span-2" : ""}`} key={index}>
      <input
        type={type}
        name={name}
        className="peer block w-full appearance-none border-b-[1px] border-[#453B57] bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-transparent"
        placeholder=" "
        value={formData[name]}
        onChange={handleInputChange}
        id={name + index}
      />
      <label
        htmlFor={name + index}
        className={`absolute capitalize cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-1 ${
          formData[name] ? "scale-75 -translate-y-4" : "translate-y-2"
        } left-2 text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
      >
        {label}
      </label>
    </div>
  );
})}


        {/* Message Field */}
         {/* <div className="relative z-0 sm:col-span-2">
           <textarea
             name="message"
             className="peer block w-full appearance-none border-b-[1px] border-[#453B57] bg-transparent rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-transparent "
             placeholder=" "
             value={formData.message}
             onChange={handleInputChange}
             id="message" // Add an id to associate the label with the textarea
           />
           <label
             htmlFor="message" // Associate the label with the textarea
             className={`absolute duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-gray-50 px-1 ${
               formData.message ? 'scale-75 -translate-y-4' : 'translate-y-2'
             } left-2 text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
           >
             Your message
           </label>
         </div> */}
         
     </form>

     {/* Submit Button */}
     <div className="mt-8 text-center">
       <button className="text-xl font-semibold text-white bg-red-500 py-3 px-10 rounded-lg hover:bg-red-600 transition">
         Send Enquiry
       </button>
     </div>
   </div>
  )
}
// import React, { useState } from 'react';

// export default function InquiryForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     budget: '',
//     attachment: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="mx-auto py-[100px] container">
//       {/* Form Section */}
//       <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {/* Form Fields with Floating Labels */}
//         {[
//           { name: 'firstName', label: 'First name', type: 'text' },
//           { name: 'lastName', label: 'Last name', type: 'text' },
//           { name: 'phoneNumber', label: 'Phone number', type: 'text' },
//           { name: 'email', label: 'Email', type: 'email' },
//           { name: 'budget', label: 'Budget', type: 'text' },
//           { name: 'attachment', label: 'Attachment', type: 'file' },
//         ].map(({ name, label, type }, index) => (
//           <div className="relative z-0" key={index}>
//             <input
//               type={type}
//               name={name}
//               className="peer block w-full appearance-none border-b-[1px] border-[#453B57] bg-transparent p-2 focus:outline-none focus:ring-2 focus:ring-transparent"
//               placeholder=" "
//               value={formData[name]}
//               onChange={handleInputChange}
//               id={name} // Add an id to associate the label with the input
//             />
//             <label
//               htmlFor={name} // Associate the label with the input
//               className={`absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-1 ${
//                 formData[name] ? 'scale-75 -translate-y-4' : 'translate-y-2'
//               } left-2 text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
//             >
//               {label}
//             </label>
//           </div>
//         ))}

//         {/* Message Field */}
//         <div className="relative z-0 sm:col-span-2">
//           <textarea
//             name="message"
//             className="peer block w-full appearance-none border-b-[1px] border-[#453B57] bg-transparent rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-transparent h-32"
//             placeholder=" "
//             value={formData.message}
//             onChange={handleInputChange}
//             id="message" // Add an id to associate the label with the textarea
//           />
//           <label
//             htmlFor="message" // Associate the label with the textarea
//             className={`absolute duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-50 px-1 ${
//               formData.message ? 'scale-75 -translate-y-4' : 'translate-y-2'
//             } left-2 text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4`}
//           >
//             Your message
//           </label>
//         </div>
//       </form>

//       {/* Submit Button */}
//       <div className="mt-8 text-center">
//         <button className="text-xl font-semibold text-white bg-red-500 py-3 px-10 rounded-lg hover:bg-red-600 transition">
//           Send Enquiry
//         </button>
//       </div>
//     </div>
//   );
// }
