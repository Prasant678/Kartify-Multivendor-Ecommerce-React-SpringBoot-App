export const UploadToCloudinary = async (pics: any) => {
    const cloud_name = "dxjfdmmvd";
    const upload_preset = "Kartify_Ecommerce";

    if (pics) {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", upload_preset);
        data.append("cloud_name", cloud_name);

        const response = await fetch("https://api.cloudinary.com/v1_1/dxjfdmmvd/upload",{
            method: "POST",
            body: data
        })

        const fileData = await response.json();
        return fileData.url;
    } else {
        console.log("Error: Pics Not Found");
    }
}