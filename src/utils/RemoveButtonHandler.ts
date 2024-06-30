import localforage from "localforage"
import { handlerType } from "../interfaces/handlerType"

export const removeHandler = async({indx, products}:handlerType) => {
    try {
        await localforage.removeItem(products![indx].title)
        console.log('success')
    } catch (error) {
        console.log(error)
    }
}

export const removeHandlerCart = async({indx, cartProducts}:handlerType) => {
    try {
        await localforage.removeItem(cartProducts![indx].value.title)
        console.log('success')
    } catch (error) {
        console.log(error)
    }
}