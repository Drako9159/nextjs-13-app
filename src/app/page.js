"use client";

export default function HomePage() {
  return (
    <div>
      <form>
        <label>Upload file:</label>
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
          }}
        ></input>

        <button>Upload</button>
      </form>
    </div>
  );
}
