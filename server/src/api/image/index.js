import express from 'express';

import AWS from 'aws-sdk';

import multer from 'multer';

import { ImageModel } from '../../database/allModel';

import { s3Upload } from '../../utils/s3';

const Router = express.Router();

//multer congigure
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
*Route  /
*Des    Get Image details
*Params _id
*Access Public
*Method POST
*/

Router.get('/:_id', async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);

        return res.json({ image });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
*Route  /
*Des    Upload given image to s3 bucket and save file link to mongoDB
*Params _id
*Access Public
*Method POST
*/

Router.post('/', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;

        const bucketOptions = {
            Bucket: "zomato-clone-devtown-10567",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", //Access Control Lists
        };

        const uploadImage = await s3Upload(bucketOptions);


        const dbUpload = await ImageModel.create({
            images: [
                {
                    location: uploadImage.Location,
                }
            ]
        });
        return res.status(200).json({ dbUpload });
    } catch (error) {
        return res.status(200).json({ error: error.message })
    }

})

export default Router;