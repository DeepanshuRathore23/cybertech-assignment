import Link from "next/link";
import { auth } from "@/auth";
import Image from "next/image";

export default async function Navbar() {
    const session = await auth();

    return (
      <nav className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="text-blue-700 font-bold text-2xl">
            <Link href='/'>
                LinkedIn
            </Link>
        </div>
        <div className="flex space-x-6 text-gray-700">
            {session?.user ? (
                <Link href='/dashboard'>
                    <Image src='/user.png' alt="user image" height={40} width={40}/>
                </Link>
                    
                ) : (
                    <Link href='/login'>
                        <button className="border border-blue-700 text-blue-700 px-4 py-1 rounded-full hover:bg-blue-50 hover:cursor-pointer">
                        Sign in
                        </button>
                    </Link>
                )
            }
          
        </div>
      </nav>
    );
  }
  