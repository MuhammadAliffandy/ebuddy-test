
export interface User {
    id?: string;
    name: string;
    email : string;
    address?:string;
    createdAt:FirebaseFirestore.FieldValue;
    updatedAt:FirebaseFirestore.FieldValue;
}