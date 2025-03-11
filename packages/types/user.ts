
export interface User {
    id?: string;
    name: string;
    email : string;
    address?:string;
    password?:string;
    totalAverageWeightRatings: any,
    numberOfRents: number,
    recentlyActive?: any,
    score?: number,
    createdAt:any;
    updatedAt:any;
}