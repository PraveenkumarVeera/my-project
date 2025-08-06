import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function AwsS3() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:4000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("✅ Upload success:", res.data);
      alert(`File uploaded! Key: ${res.data.key}`);
    } catch (err) {
      console.error("❌ Upload error:", err.response?.data || err.message);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Image Upload</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
      <br /><br />
      <p>{message}</p>
    </div>
  );
};


export default AwsS3