import config from "../config/config";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    storage;
    constructor(){

        this.client
        .setEndpoint(config.appwriteurl)
        .setProject(config.appwriteProjectId)
        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)
    }
    async createPost({title,description,slug,image,status,userId}){
        try {
            return await this.databases.createDocument(config.appwritedatabaseId,
                config.appwritecollectionId, 
               slug,{title,description,author,image,status,userId});
           
        }catch(error){
    throw error
}
    }
async updatePost(slug,{title,description,image,status}){
    try {
        return await this.databases.updateDocument(
            config.appwritedatabaseId,
            config.appwritecollectionId, 
            slug,
            {title,description,author,image,status});
       
    }catch(error){
throw error
}
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appwritedatabaseId,
                config.appwritecollectionId, 
                slug);
                return true
           
        }catch(error){
    throw error
    return false
}
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(config.appwritedatabaseId,
                config.appwritecollectionId, 
                slug);
           
        }catch(error){
    throw error
}
    }
    async getallPosts(){
        try {
            return await this.databases.listDocuments(config.appwritedatabaseId,
                config.appwritecollectionId, 
                [Query.equal("status","published")]);
           
        }catch(error){
    throw error
}
    }
    async fileUpload(file){
        try {
            return await this.storage.createFile(config.appwritebucketId,
                ID.unique(),
                file);
           
        }catch(error){
    throw error 
}
   
}
async deleteFile(id){
    try {
         await this.storage.deleteFile(config.appwritebucketId,
            id);
            return true
       
    }catch(error){
throw error

}
}
getFilePreview(id){
    return this.storage.getFilePreview( 
        config.appwritebucketId,
        id)
}
}

const service = new Service();
export default service