import { db } from "../config/firebaseConfig";
import admin from "firebase-admin";

import { User } from "@my-monorepo/types";



const fetchUsers = async () => {
    const userCollection = db.collection("users").orderBy("score", "desc").limit(10);
    const data = (await userCollection
                .get()).docs
                .map(doc => ({
                    ...doc.data()
                }) 
    );
    return data;
}

const fetchUser = async ( params : string ) => {
    const id = params;

    const data : any = (await db.collection('users')
                .where('id', '==', id).get())
                .docs
                .map(doc => ({
                    ...doc.data()
                }))

    return data;
}

const createUser = async ( payload: User ) => {
    const { name , email, address,  } = payload;

    const docRef = db.collection('users'); 
    const id = docRef.doc().id
    const user : User = {
        id : id,
        name : name ?? '' ,
        email:email ?? '',
        address:address ?? '',
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp() ,
        recentlyActive:Math.floor(Date.now() / 1000) ,
        totalAverageWeightRatings:4.3 ,
        numberOfRents: Math.floor(Math.random() * (40 - 1 + 1)) + 1,
        score:0
    }

    const data = await docRef.add(user);
    return data;
}

const emailExistChecked = async (email: string) => {;

    const data = (await db.collection('users')
    .where('email', '==', email).get()).docs
    .map(doc => ({
        ...doc.data()
    }))[0]
    
    return data;

}

const updateUser = async ( params : string, payload: Partial<User>) => {
    
    const id = params;
    const { name , address , totalAverageWeightRatings, numberOfRents , recentlyActive} = payload
    
    const doc = await db.collection('users').where('id', '==', id).get();
    
    const currentDoc = doc.docs.map(doc => ({
        id: doc.id,
    }))[0];
    

    const w1 = 0.6, w2 = 0.3, w3 = 0.1;
    const score = (totalAverageWeightRatings * w1) + 
                  (numberOfRents || 4.3 * w2) + 
                  (recentlyActive * w3);


    const user : Partial<User> = {
        ...(name && { name }),
        ...(address && { address }),  
        updatedAt: admin.firestore.FieldValue.serverTimestamp() ,
        recentlyActive: Math.floor(Date.now() / 1000),
        score: score
    }

    await db.collection('users').doc(currentDoc.id).update(user);
    const data = await fetchUser(id)

    return data;
}

export const userRepository = {
    fetchUser,
    fetchUsers,
    createUser,
    updateUser,
    emailExistChecked,
}
