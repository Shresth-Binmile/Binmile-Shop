import localforage from "localforage"
import { handlerType } from "../interfaces/handlerType"

export const addHandler = ({indx, products}:handlerType) => {
    localforage.setItem(products[indx].title, products[indx])
}