import Post from "./post";
import {posts} from '../lib/placeholder-data'

export default function Main() {
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
  