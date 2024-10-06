import { useState } from 'react';

const CustomAlert = ({ message, type ,open ,setOpen }) => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    // setShowAlert(false);s
    setOpen(false)
  };

  if (!open) {
    return null;
  }
console.log( "alert running");
  return (
    <div className={`fixed top-30 right-4 p-4 rounded-md shadow-md ${type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
      <div className="flex items-center">
        <span className="mr-2">{message}</span>
        <button onClick={closeAlert} className="text-gray-500 hover:text-gray-700">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
