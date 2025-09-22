enum Role {
  ADMIN,
  SUPER_ADMIN,
  USER,
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password?: string;
  age?: number;
  picture?: string;
  role: Role;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  posts: IPost[];
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  isFeatured: boolean;
  tags: string[];
  view: number;
  authorId: number;
  author: IUser;
}
