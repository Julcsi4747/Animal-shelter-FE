export interface UserModel {
    name: string;
    id: number;
    email: string;
    imageUrl: string;
    role: string;
}

export interface UserFormValues extends Omit<UserModel, "id" | "role"> {}
