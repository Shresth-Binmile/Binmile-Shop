import axios from "axios"

const api:string = 'https://fakestoreapi.com/products'

export const ApiHandler = async() => {
    try {
        const apiData = await axios.get(api)
        
        // console.log(apiData.data)

        return apiData.data
    } catch (error) {
        console.log("Error Message: ", error)
    }
}