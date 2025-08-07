export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    profileImage: string,
    bio: string
}

export type Post = {
    user_id: string,
    profileName: string,
    profileImage: string,
    description: string
}