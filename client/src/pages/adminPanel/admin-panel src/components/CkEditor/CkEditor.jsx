import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const TextFields = () => {
    const [header, setHeader] = useState('');
    const [shortText, setShortText] = useState('');
    const [longText, setLongText] = useState('');

    return (
        <div>
            <h1>Text Input Form</h1>

            {/* Header Field */}
            <div>
                <label>Header:</label>
                <input
                    type="text"
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                    placeholder="Enter header here"
                />
            </div>

            {/* Short Text Field */}
            <div>
                <label>Short Text:</label>
                <CKEditor
                    editor={ClassicEditor}
                    data={shortText}
                    config={{
                        toolbar: ['bold', 'italic', 'link','underline'], // Limit options
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setShortText(data);
                    }}
                />
            </div>

            {/* Long Text Field */}
            <div>
                <label>Long Text:</label>
                <CKEditor
                    editor={ClassicEditor}
                    data={longText}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setLongText(data);
                    }}
                />
            </div>

            {/* Output Preview */}
            <div>
                <h3>Preview:</h3>
                <h4>{header}</h4>
                <div dangerouslySetInnerHTML={{ __html: shortText }} />
                <div dangerouslySetInnerHTML={{ __html: longText }} />
            </div>
        </div>
    );
};

export default TextFields;
