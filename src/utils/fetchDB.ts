import localforage from "localforage";
import { dbDataType } from "../interfaces/dbDataType";

export const fetchDB = async () => {
    try {
        const allItems:dbDataType[] = []

        await localforage.iterate((value, key)=>{
            allItems.push({ key, value });
        })
        return allItems

    } catch (error) {
        console.error('Error fetching items from IndexedDB:', error);
        throw error;
    }
}