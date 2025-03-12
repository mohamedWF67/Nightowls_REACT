import { Client,Databases } from 'appwrite';

const client = new Client();
client.setProject('67670bea000605a6dc74');

const databases = new Databases(client)

export {client,databases};