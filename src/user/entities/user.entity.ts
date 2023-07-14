export class User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: Role;
}

enum Role {
  USER,
  ADMIN,
}
