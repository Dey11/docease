interface User {
  //   _id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
  profilePic: string;
}

interface File {
  //   _id: string;
  fileName: string;
  fileType: string;
  user: string;
  filePath: string;
  size?: number;
  createdAt: string;
}

export { User, File };
