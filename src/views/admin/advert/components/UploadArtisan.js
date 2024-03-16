// Chakra imports
import { useDropzone } from "react-dropzone";
import "./style.css"; // Import the CSS file for styling
import React, { useState } from "react";

export default function UploadArtisan({ businessName, onFileChange, ...rest }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    console.log("File Picked");
    setUploadedFiles(acceptedFiles);
    onFileChange(uploadedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
    multiple: true,
  });

  return (
    <div className="upload-container">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <p>Drag and drop file here or click to browse</p>
        )}
      </div>

      <div className="file-list">
        <h3>Uploaded File:</h3>
        {uploadedFiles.length > 0 ? (
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <span>{file.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No file uploaded</p>
        )}
      </div>
    </div>
  );
}
