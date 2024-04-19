import React, { useState } from "react";
import axios from "axios";

const ImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle"); // 'idle', 'uploading', 'success', 'error'

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) return;

    // Basic file size validation (adjust limit as needed)
    if (imageFile.size > 10 * 1024 * 1024) {
      // 10 MB
      setUploadStatus("error");
      alert("Image size cannot exceed 10 MB.");
      return;
    }

    setSelectedImage(imageFile);
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    setUploadStatus("uploading");

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await axios.post(
        "http://localhost:3000/api/upload/image",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadStatus("success");
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      setUploadStatus("error");
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploadStatus === "uploading"}>
        {uploadStatus === "idle"
          ? "Upload Image"
          : uploadStatus === "uploading"
          ? "Uploading..."
          : "Upload Failed"}
      </button>
      {uploadStatus === "success" && <p>Image uploaded successfully!</p>}
    </div>
  );
};

export default ImgUpload;
