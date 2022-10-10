
export interface DogModel {
    id: number;
    name: string;
    breed: string;
    gender: string;
    castrated: boolean;
    color: string;
    birth_date: Date;
    description: string;
    image_url: string;
}

export interface DogValues extends Omit<DogModel, "id"> {}