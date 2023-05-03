"use client";
import { useState } from "react";

export default function HomePage() {
  const [file, setFile] = useState(null);

  function handleChange(e){
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-zinc-950 p-5">
        <label className="text-4x1 text-center my-4">Upload file:</label>
        <input
        className="bg-zinc-900 p-2 text-zinc-100 rounded block mb-2"
          type="file"
          onChange={handleChange}
        ></input>

        <button disable={!file} className="bg-green-500 text-zinc-100 p-2 rounded block w-full disabled:opacity-50" type="submit">Upload</button>
      </form>
      {
        file && (
          <div className="bg-zinc-950 p-5">
            <p className="text-4x1 text-center my-4">File preview:</p>
            <img src={URL.createObjectURL(file)} className="max-w-xs" />
          </div>
        )
      }
    </div>
  );
}
