
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
}

export interface DogValues extends Omit<DogModel, "id"> {}