import Image from 'next/image';
import { signOut } from '@/auth';

export default function Page() {
  // Mock posts (replace with actual fetch later)
  const posts = [
    { id: 1, title: 'My first post', content: 'This is the content of my first post.' },
    { id: 2, title: 'Another day, another post', content: 'Here’s something interesting I wrote.' },
  ];

  return (
    <main className="mt-[5vh] max-w-4xl mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <form action={async () => {
            'use server'
            await signOut({redirectTo: '/'});
        }}>
            <button
                className="text-sm text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-50"
                >
                Sign Out
            </button>
        </form>
        
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-6">
          <Image
            src="/user.png"
            alt="Profile Image"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">User name</h2>
            <p className="text-sm text-gray-500">user email</p>
            <p className="text-gray-700 mt-2">
              Passionate developer who loves building with Next.js & React.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Posts</h3>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-md shadow">
              <h4 className="text-lg font-bold text-gray-800">{post.title}</h4>
              <p className="text-gray-700 mt-1">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
