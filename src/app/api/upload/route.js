import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(request) {
  let fileContents = null;
  let filePath = "";
  request.formData().then((formData) => {
    const file = formData.get("file");
    if(!file){/*
        return NextResponse.json(
            JSON.stringify({ error: "No file found in request" }),
        )*/
        //return new Response("No file found in request", { status: 400 })
    }

    filePath = path.join(process.cwd(), "public", file.name);
    file.arrayBuffer().then((buffer) => {
      fileContents = Buffer.from(buffer);
      writeFile(filePath, fileContents);
      console.log("File written to disk: " + filePath);
    });
  });

  return new Response("Uploading file!");
}
