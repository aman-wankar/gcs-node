// Import the Google Cloud Storage library
const { Storage } = require('@google-cloud/storage');

// Path to your service account key file
// const serviceKey = './path/to/your-service-account-key.json';

// Creates a client
const storage = new Storage();
/*
    {
  keyFilename: serviceKey,
  projectId: 'your-google-cloud-project-id',
}
  */

// Name of the bucket you want to list files from
const bucketName = 'bucket-aman';

async function listFiles() {
  try {
    
    // Get the list of files in the bucket
    const [files] = await storage.bucket(bucketName).getFiles();
    console.log('Files:');
    files.forEach((file) => {
      console.log(file.name);
    });
  } catch (err) {
    console.error('Error listing files:', err);
  }
}

// Run the function
listFiles();
