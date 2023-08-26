import { useEffect, useRef, useState } from "react";
import CustomButon from "./CustomButon";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
export const UploadWidget = ({ setImageUrl }) => {
    const [photoUrl, setPhotoUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const uploadButton = (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            {loading ? <LoadingOutlined /> : <UploadOutlined />}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                Choisir
            </div>
        </div>
    );
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "zetrey-inc",
                uploadPreset: "maVoix",
            },
            (error, result) => {
                if (result.event === "success") {
                    console.log(result.info.url);
                    setPhotoUrl(result.info.url);
                    setImageUrl(result.info.url);
                }
                console.log(result);

                // if (result.event === "success") {
                //     console.log(result.info.url);
                // }
            }
        );
    }, []);
    return (
        <div
            onClick={() => widgetRef.current.open()}
            style={{
                width: "6rem",
                height: "6rem",
                borderRadius: "25%",
                background: "grey",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {photoUrl ? (
                <img
                    style={{
                        width: "5rem",
                        height: "5rem",
                        borderRadius: "25%",
                        objectFit: "cover",
                    }}
                    src={photoUrl}
                />
            ) : (
                uploadButton
            )}
        </div>
    );
};
