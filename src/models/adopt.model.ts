
export interface DogModel {
    id: number;
    name: string;
    breed: string;
    gender: string;
    castrated: boolean;
    color: string;
    birthDate: Date;
    description: string;
    imageUrl: string;
    adopted: boolean;
}

export interface DogFormValues extends Omit<DogModel, "id" | "adopted"> {}