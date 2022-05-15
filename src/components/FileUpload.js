import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const FileUpload = () => {
    const [image, setImage] = useState({ preview: "", data: "" });
    const [status, setStatus] = useState("");
    const url = "http://localhost:5000/api/image";
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("file", image.data);
        const res = await Axios.post(url, {
            body: formData,
        });
        if (res) setStatus(res.statusText);
    };

    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
    };

    return (
        <div>
            <h1>Upload to image</h1>
            {image.preview && (
                <img src={image.preview} width="100" height="100" />
            )}
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={handleFileChange} />
                <button type="submit">Submit</button>
                {status && <h4>{status}</h4>}
            </form>
        </div>
    );
};

export default FileUpload;
