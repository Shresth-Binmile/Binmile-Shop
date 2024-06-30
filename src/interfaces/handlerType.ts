import { CardDataInterface } from "./CardDataTypes"
import { dbDataType } from "./dbDataType"

export type handlerType = {
    indx: number,
    products?: CardDataInterface[]
    cartProducts?: dbDataType[]
}