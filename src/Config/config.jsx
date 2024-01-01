import { Client,Account,Databases,Storage } from 'appwrite'; 
const client = new Client(); 
client
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject('659258abe06f4b4540de') 
//   .setKey('ddc3248ee8e1f6a587b00fcddde6ecbdeac95decc8317f549371c276b65ca8cce988c58a37d42602634de4cc2b50c08a63f84e4495d675db344d34da555642e672534721783d7deeb18a2c566b55c60efa7fa85818ee4271caa5c66ac584f0995a47ac8927c186ba604d0fa861ed7b4288049c974dc1da7a3c3b78ff9fcf281e'); // Replace with your Appwrite API key
export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client);
