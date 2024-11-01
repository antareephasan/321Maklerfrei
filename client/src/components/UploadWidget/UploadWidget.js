import React, { useEffect, useRef } from 'react'

const UploadWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;

        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
            uploadPreset:  process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        }, function (error, result) {
            console.log(result);
        })
    }, [])

    return (
        <button onClick={() => widgetRef.current.open()}>
            upload
        </button>
    )
}

export default UploadWidget;