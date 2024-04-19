import { v2 as cloudinary, UploadApiResponse } from "cloudinary"; // Import UploadApiResponse type

// Other imports and configurations...
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadToCloudinary = async (
  imageName: string,
  username: string
) => {
  const fileType = imageName.split(".")[1];
  const fileNameWithDate = imageName.split(".")[0];
  const date = fileNameWithDate.split("_")[0];
  const fileName = fileNameWithDate.split("_")[1];
  var res;

  cloudinary.uploader.upload(
    `./public/images/${imageName}`,
    {
      public_id: fileName,
      use_asset_folder_as_public_id_prefix: true,
      asset_folder: `${username}/${fileType}`,
      // use_filename_as_display_name: true,
    },
    function (error, result) {
      if (error) {
        throw error;
      }
      console.log(result);
      res = result;
    }
  );

  return res;
};

// export const uploadToCloudinary = async (imageName: string, username: string, fileBuffer: Buffer): Promise<UploadApiResponse> => {
//   const fileType = imageName.split(".")[1];
//   const fileName = imageName.split(".")[0];

//   try {
//     return new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream({
//         folder: `${username}/${fileType}`,
//         public_id: fileName,
//         resource_type: "auto",
//       }, (error: any, result: any) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       });

//       stream.end(fileBuffer);
//     });
//   } catch (error) {
//     console.error('Error uploading image to Cloudinary:', error);
//     throw error;
//   }
// };

// uploadToCloudinary("img.png", "dey");

// First we take the file in our backend using multer, from the user.
// File is saved in the public/images folder.
// Then we upload the image to Cloudinary using the uploadToCloudinary function.
// The image is uploaded to a folder named after the user's username and the image is named after the image name.
// Then we return the response to the user that the file has been uploaded. Save the image URL in the database.
