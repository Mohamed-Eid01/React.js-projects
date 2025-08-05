import { useState, type ChangeEvent } from "react";
import axios from "axios";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [progress, setProgress] = useState(0);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  async function handleFileUpload(){
    if(!file)return;

    setStatus("uploading");
    setProgress(0);

    const formData =new FormData();
    formData.append('file', file);

    try{
        await axios.post("https://httpbin.org/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress:(ProgressEvent) =>{
            const progress = ProgressEvent.total ?  
            Math.round((ProgressEvent.loaded * 100 )/ ProgressEvent.total)
            :0;
            setProgress(progress);
          }
        });
        setStatus("success")
        setProgress(100);
    }catch{
        setStatus("error");
        setProgress(0);
    //error here
    };
  }

  return (
    <div className="max-w-md my-auto mx-auto p-6 bg-white rounded-lg shadow-md space-y-4 font-sans">
      <label className="block">
        <span className="block mb-2 text-sm font-medium text-gray-700">
          Choose a file 
        </span>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-600 file:text-white
          hover:file:bg-blue-700 transition"
        />
      </label>

      {file && (
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm text-gray-700 space-y-1">
          <p>
            <span className="font-semibold">File name:</span> {file.name}
          </p>
          <p>
            <span className="font-semibold">Size:</span>{" "}
            {(file.size / 1024).toFixed(2)} KB
          </p>
          <p>
            <span className="font-semibold">Type:</span> {file.type}
          </p>
        </div>
      )}

      {status === "uploading" && (
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">{progress}% uploaded</p>
        </div>
      )}

      {file && status !== "uploading" && (
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          onClick={handleFileUpload}
        >
          Upload
        </button>
      )}

      {status == "success" && (
        <p className=" text-sm text-green-600">File Uploaded Successfully!</p>
      )}
      {status == "error" && (
        <p className=" text-sm text-red-600">
          Upload fialed, please try again.
        </p>
      )}
    </div>
  );
}
