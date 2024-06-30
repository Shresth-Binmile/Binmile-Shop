import localforage from "localforage"

export const clearCart = () => {
    localforage.clear()
    window.location.reload()
}