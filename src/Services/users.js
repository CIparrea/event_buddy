import api from "./apiConfig.js";
import { jwtDecode } from "jwt-decode";

export const signUp = async (credentials) => {
  console.log("Credentials:", credentials);
  try {
    const resp = await api.post("/users/sign-up", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    console.error("Error signing up: ", error);
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/users/sign-in", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    console.error("Error signing in: ", error);
  }
};

export const verifyUser = async () => {
  try {
    const resp = await api.get("/users/verify");
    return resp.data;
  } catch (error) {
    console.error("Error verifying user: ", error);
  }
};

export const getSavedEvents = async () => {
  try {
    const resp = await api.get("/users/saved-events");
    return resp.data;
  } catch (error) {
    console.error("Error getting saved events: ", error);
  }
};

export const updateSavedEvents = async (eventId) => {
  try {
    const resp = await api.put(`users/saved-event/${eventId}`);
    localStorage.getItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    console.error("Error updating saved events: ", error);
  }
};

export const updateUser = async (updatedUserData) => {
  try {
    const resp = await api.put(`/users/update-user`, updatedUserData);
    return resp.data;
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    const resp = await api.delete(`/users/${id}`);
    return resp.data;
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};