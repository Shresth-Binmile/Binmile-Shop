import { createContext } from "react"
import { dbDataType } from "../interfaces/dbDataType"
import { CardDataInterface } from "../interfaces/CardDataTypes"

export const cartItems = createContext<dbDataType[]>([])

export const productItems = createContext<CardDataInterface[]>([])