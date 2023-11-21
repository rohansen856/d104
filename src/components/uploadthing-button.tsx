"use client"

import { UploadButton } from "@/lib/uploadthing"

export function UploadImageButton({ className }: { className: string }) {
    return (
        <UploadButton
            className={className}
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res)
                alert("Upload Completed")
            }}
            onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`)
            }}
            appearance={{
                button: "bg-secondary",
                container: "bg-transparent",
            }}
        />
    )
}
