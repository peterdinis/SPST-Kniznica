import React, { useState } from "react";
import app, {storage} from "../../lib/firebase-config"

const FileUploadComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = storage().ref();
      const fileRef = storageRef.child(`uploads/${file.name}`);
      const uploadTask = fileRef.put(file);

      uploadTask.on(
        "state_changed",
        null,
        (error: unknown) => {
          console.error("Error uploading file:", error);
        },
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploadComponent;