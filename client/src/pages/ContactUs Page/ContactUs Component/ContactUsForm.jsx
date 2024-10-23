// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send data to backend)
//     console.log(formData);
//   };

//   return (
//     <div className="container relative">
//       <form onSubmit={handleSubmit} className="flex flex-col items-start pl-20 w-full max-md:pl-5 max-md:max-w-full">
        
//         {/* Input Fields: Name, Phone, Email in one line */}
//         <div className="flex flex-wrap gap-10 self-center mt-48 w-full text-gray-700 max-w-[1464px] max-md:mt-10 max-md:max-w-full">
          
//           {/* Name Field */}
//           <div className="flex flex-col flex-1 whitespace-nowrap">
//             <label className="self-start text-lg font-semibold">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-2 w-full border border-gray-700 py-2 px-4 rounded"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           {/* Phone Number Field */}
//           <div className="flex flex-col flex-1">
//             <label className="self-start text-lg font-semibold">Phone number</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="mt-2 w-full border border-gray-700 py-2 px-4 rounded"
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="flex flex-col flex-1">
//             <label className="self-start text-lg font-semibold">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-2 w-full border border-gray-700 py-2 px-4 rounded"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//         </div>

//         {/* Message Field */}
//         <div className="mt-10 w-full max-w-[1464px]">
//           <label className="ml-1 text-4xl font-semibold text-gray-700">Your Message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Enter your message"
//             className="mt-2 w-full border border-gray-700 py-4 px-4 rounded resize-none h-32"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-between items-center mt-20 w-full max-w-[1464px] max-md:flex-col">
//           <button
//             type="submit"
//             className="text-3xl font-semibold text-white bg-rose-500 px-6 py-3 rounded-full max-md:w-full max-md:mt-10"
//           >
//             Send message
//           </button>

//           {/* Image container: Half image shown outside the container */}
//           <div className="relative">
//             <div className="flex justify-center items-center h-48 w-48 rounded-full border border-gray-500 overflow-hidden relative right-[-100px] max-md:right-[-50px]">
//               <img
//                 src="https://via.placeholder.com/150"  // Replace with your image URL
//                 alt="placeholder"
//                 className="object-cover h-full w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

import React, { useState, useRef } from 'react';

const FloatingLabelInput = ({ label, type, placeholder, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current.focus(); // Focus the input when label is clicked
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 whitespace-nowrap ">
      <div
        onClick={handleFocus} // Add onClick to label to focus input
        className={`self-start transition-all duration-200  text-[#453B57] font-[400] text-[26px] ${
          isFocused || value ? 'translate-y-[10px] scale-75  ' : 'translate-y-[40px] '
        }`}
      >
        {label}
      </div>
      <input
        ref={inputRef} // Attach the ref to the input
        type={type}
        // placeholder={placeholder}
        className={`mt-2 border-b border-gray-700 h-10 px-2 focus:outline-none focus:border-gray-700 ${
          isFocused || value ? '' : 'placeholder-transparent'
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={onChange}
      />
      <div className="shrink-0 mt-2 h-px bg-gray-700" />
    </div>
  );
};


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here (e.g., send data to backend)
  };

  return (
    <div className=' relative mb-[100px] mt-[100px]' >
        <div className="container relative ">
      <form onSubmit={handleSubmit} className="flex flex-col items-start pl-20 w-full max-md:pl-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 self-center w-full text-gray-700 max-w-[1464px] max-md:mt-10 max-md:max-w-full">
          <FloatingLabelInput
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => handleChange({ target: { name: 'name', value: e.target.value } })}
          />
          <FloatingLabelInput
            label="Phone number"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={(e) => handleChange({ target: { name: 'phoneNumber', value: e.target.value } })}
          />
          <FloatingLabelInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleChange({ target: { name: 'email', value: e.target.value } })}
          />
        </div>

        {/* Message Field */}
        <div className="mt-10 w-full max-w-[1464px] grid grid-cols-3">
          
<FloatingLabelInput
            label="message"
            type="tel"
            placeholder="Enter your message"
            value={formData.message}
            onChange={(e) => handleChange({ target: { name: 'message', value: e.target.value } })}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-between items-center mt-20 w-full max-w-[1464px] max-md:flex-col">
          <button
            type="submit"
            className="text-3xl font-semibold text-white bg-rose-500 px-6 py-3 rounded-full max-md:w-full max-md:mt-10"
          >
            Send message
          </button>

         
        </div>
      </form>
      </div>
       {/* Image container: Half image shown outside the container */}
    
            <div className= " absolute bottom-0 flex justify-center items-center h-48 w-48 rounded-full border border-gray-500 overflow-hidden  right-[-100px] max-md:right-[-50px]">
              <img
                src="https://via.placeholder.com/150" // Replace with your image URL
                alt="placeholder"
                className="object-cover h-full w-full"
              />
              <div className="flex flex-col justify-center items-start px-20 py-16 rounded-full border border-solid border-zinc-500">
            <div className="flex flex-col justify-center items-start px-16 py-14 rounded-full border border-solid border-zinc-500 max-md:pl-5">
              <div className="flex flex-col justify-center items-end px-12 py-16 max-w-full rounded-full border border-solid border-zinc-500 w-[241px] max-md:pl-5">
                <div className="flex shrink-0 w-full rounded-full border border-solid border-zinc-500 h-[205px]" />
              </div>
            </div>
          </div>
            </div>
          
    </div>
  );
};

export default ContactForm;
