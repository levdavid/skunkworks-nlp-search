import React, { useState } from 'react';
import AWS from 'aws-sdk'
import Button from '@leafygreen-ui/Button';
import Icon from '@leafygreen-ui/Icon';


const S3_BUCKET = 'skunkworksnlpsearch';
const REGION = 'us-east-1';


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

const UploadImageToS3WithNativeSdk = () => {

    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }


    return (
        <div>
            <h1>Please select the image to upload</h1>
            <div>Native SDK File Upload Progress is {progress}% </div>
            <input type="file" accept="image/*, application/pdf" onChange={handleFileInput} />
            <Button as="button" type="submit" baseFontSize={13} darkMode={true} variant="primary" leftGlyph={<Icon glyph="Upload" />} onClick={() => uploadFile(selectedFile)}> Upload to S3 </Button>
        </div>
    )
}

export default UploadImageToS3WithNativeSdk;