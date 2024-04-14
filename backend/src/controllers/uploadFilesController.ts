import { Request, Response } from "express";
import upload from "../middleware/multerMiddleware";
import sharp from 'sharp';
import fs from 'fs';
import {uploadToCloudinary} from "../utils/cloudinary"
import File from '../models/file.model' 

export const uploadPdf = (req: Request, res: Response) => {};

export const uploadImage = async (req: Request, res: Response) => {
  const { width, height, minKb, maxKb } = req.body;

  if (!req.file) {
      return res.status(400).send("No file uploaded.");
  }

  try {
      console.log(req.file)
      const { path,originalname } = req.file; // Get the path of the uploaded file

      // Read the file buffer from the uploaded file path
      console.log('Reading file buffer...');
      const fileBuffer = fs.readFileSync(path);
      console.log('File buffer read.');


      // Resize the image
      console.log('Resizing image...');
      const resizedImageBuffer = await sharp(fileBuffer)
          .resize({ width: parseInt(width), height: parseInt(height), fit: 'inside' })
          .toBuffer();
      console.log('Image resized.');


      // Compress the image to the target file size range
      console.log('Compressing image...');

  const compressedImageBuffer:Buffer | undefined = await compressToTargetSize(resizedImageBuffer, parseInt(minKb), parseInt(maxKb));
      console.log('Image compressed.');
      
      if (compressedImageBuffer) {
        const username = "test"; // Assuming you have a user object in the request
        const cloudinaryResponse = await uploadToCloudinary(originalname, username, compressedImageBuffer);

        const file = new File({
            fileName: originalname,
            fileType: 'image', // Assuming all uploaded files are images
            user: '661abbe5c0dd9a5ec012229e', // Assuming you have a user object in the request
            filePath: cloudinaryResponse.secure_url,
            size: compressedImageBuffer.length,
            createdAt: new Date()
          
        });
        await file.save();
        res.json({ message: 'Image uploaded successfully.', cloudinaryResponse });

    } else {
        // Handle the case where compression failed
        console.error('Error compressing image.');
    }


      // Send the compressed image in the response
      
  
        // Get metadata of the resized and compressed image
        // const metadata = await sharp(compressedImageBuffer).metadata();

        // // Construct the response object
        // const responseObject = {
        //   image: compressedImageBuffer?.toString('base64'), // Convert image buffer to base64 string
      
        //     size: metadata.size,
        //     width: metadata.width,
        //     height: metadata.height
        // };

        // Send the response
        // res.json(responseObject);
  } catch (error) {
      console.error('Error processing image:', error);
      res.status(500).send('Internal Server Error');
  }
};

const compressToTargetSize = async (imageBuffer: Buffer, minKb: number, maxKb: number) => {
  let quality = 80;
  let compressedImageBuffer: Buffer | undefined;
  const maxIterations = 20; // Limit the number of compression iterations

  // Perform iterative compression until the image size falls within the specified range
  for (let i = 0; i < maxIterations; i++) {
      // Recompress the image without specifying quality (not applicable for PNG)
      compressedImageBuffer = await sharp(imageBuffer).png().toBuffer();
      
      const imageSizeKb = compressedImageBuffer.length / 1024;
      if (imageSizeKb >= minKb && imageSizeKb <= maxKb) {
          // If the image size is within the target range, break out of the loop
          break;
      }
  }

  return compressedImageBuffer;
};


export const uploadDocs = (req: Request, res: Response) => {};
