"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const userCollection_1 = require("../repository/userCollection");
const fetchUsers = () => {
    try {
        return userCollection_1.userRepository.fetchUsers();
    }
    catch (error) {
        return error;
    }
};
const fetchUser = (params) => {
    try {
        return userCollection_1.userRepository.fetchUser(params);
    }
    catch (error) {
        return error;
    }
};
const createUser = (payload) => {
    try {
        return userCollection_1.userRepository.createUser(payload);
    }
    catch (error) {
        return error;
    }
};
const updateUser = (params, payload) => {
    try {
        return userCollection_1.userRepository.updateUser(params, payload);
    }
    catch (error) {
        return error;
    }
};
const emailExistChecked = (email) => {
    try {
        return userCollection_1.userRepository.emailExistChecked(email);
    }
    catch (error) {
        return error;
    }
};
exports.userServices = {
    fetchUser,
    fetchUsers,
    createUser,
    updateUser,
    emailExistChecked
};
