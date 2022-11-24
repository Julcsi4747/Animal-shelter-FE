export interface ApplyModel {
    id: number;
    userId: number;
    dogId: number;
    introduction: string;
    accepted: boolean;
}

export interface ApplyFormValues extends Omit<ApplyModel, "id" | "accepted" | "userId" | "dogId" > {}