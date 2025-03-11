import { userRepository } from "../repository/userCollection"
import { User } from "@my-monorepo/types";

const fetchUsers = () => {
    try {
        return userRepository.fetchUsers();
    } catch (error) {
        return error;
    }
}

const fetchUser = (params: string) => {
    try {
        return userRepository.fetchUser(params);
    } catch (error) {
        return  error
    }
}

const createUser = (payload: User) => {
    try {
        return userRepository.createUser(payload);
    } catch (error) {
        return  error
    }
}

const updateUser = (params: string, payload: Partial<User>) => {
    try {
        return userRepository.updateUser(params,payload);
    } catch (error) {
        return error;
    }
}

const emailExistChecked = (email: string) => {
    try {
        return userRepository.emailExistChecked(email)
    } catch (error) {
        return error;
    }
}

export const userServices = {
    fetchUser,
    fetchUsers,
    createUser,
    updateUser,
    emailExistChecked
}