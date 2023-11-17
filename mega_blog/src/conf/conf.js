const conf = {

    // key value pair

    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseID: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_COLLECION_ID),
    appwriteBuckectID: String(import.meta.env.VITE_BUCKET_ID)
}

export default conf;