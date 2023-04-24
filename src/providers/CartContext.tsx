import { createContext, useEffect, useState } from "react";
import { api } from "../services/Api";

interface ICartProviderProps {
    children: React.ReactNode;
}

interface ICard {
    id: string,
    name: string,
    category: string,
    price: string,
    img: string
}

interface ICartContext {
    editModal: boolean,
    seteditModal: React.Dispatch<React.SetStateAction<boolean>>,
    listProducts: ICard[]
}

export const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: ICartProviderProps) => {

    const [editModal, seteditModal] = useState(false)

    const [listProducts, setlistProducts] = useState<ICard[]>([])

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN')
        const userProducts = async () => {
            try {
                const { data } = await api.get('/products', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setlistProducts(data)

            } catch (error) {
                console.log(error)

            }
        }
        userProducts()

    }, [])

    return <CartContext.Provider value={{ editModal, seteditModal, listProducts }}>{children}</CartContext.Provider>
}