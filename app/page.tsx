import { Client, Databases } from 'appwrite';
import CreatePost from '../components/CreatePost';

export default async function Home() {
  const client = new Client();

  client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64727e5c326384d927f5');

  const databases = new Databases(client);
  const { documents: posts } = await databases.listDocuments('64727fdf6a5058d3b626','64727fe97bd40741431d');
  return (
    <main className='flex-1 p-4 bg-base-100'>
      <CreatePost />
    </main>
  );
}