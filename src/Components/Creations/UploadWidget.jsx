import { useEffect, useRef } from "react";

const UploadWidget = ({ setImageURL, newCreation, setNewCreation }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dnqfg86zq",
        uploadPreset: "tvnkzgjx",
      },
      function (error, result) {
        if (result && result.event === "success") {
          const uploadedURL = result.info.secure_url;
          console.log(uploadedURL);
          setImageURL(uploadedURL);
          setNewCreation({
            ...newCreation,
            image: uploadedURL,
          });
        } else if (error) {
          console.error("Error uploading image:", error);
        }
      }
    );
  }, []);

  return (
    <button onClick={() => widgetRef.current.open()} className="add-image-btn">
      Add Image
    </button>
  );
};

export default UploadWidget;
