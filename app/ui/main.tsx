'use client'
import { useEffect, useState } from "react";
import Post from './post';

type Post = {
    user_id: string,
    profilename: string,
    profileimage: string,
    description: string
}

export default function Main() {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        async function getPosts() {
            const res = await fetch('/api/fetch');
            const data = await res.json();
            // console.log("Posts at main.tsx: ", data);
            setPosts(data);
        }

        getPosts();
    }, []);

    return (
        <>
            <div>
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
        </>
    );    
}
  