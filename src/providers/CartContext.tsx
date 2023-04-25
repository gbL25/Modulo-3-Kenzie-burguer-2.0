import { createContext, useEffect, useState } from "react";
import { api } from "../services/Api";
import { toast } from "react-toastify";

interface ICartProviderProps {
    children: React.ReactNode;
}

export interface ICard {
    id: string,
    name: string,
    category: string,
    price: number,
    img: string,

}

interface ICardCart extends ICard {
    quantity: number
}

interface ICartContext {
    editModal: boolean,
    seteditModal: React.Dispatch<React.SetStateAction<boolean>>,
    listProducts: ICard[],
    currentSale: ICardCart[],
    setCurrentSale: React.Dispatch<React.SetStateAction<ICardCart[]>>,
    addToCart: (product: ICard) => void,
    removeProduct: (productId: any) => void

}

export const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: ICartProviderProps) => {

    const [editModal, seteditModal] = useState(false)

    const [currentSale, setCurrentSale] = useState<ICardCart[]>([])

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

            } catch (error: any) {
                toast.error(error)

            }
        }
        userProducts()

    }, [])

    const addToCart = (product: ICard) => {
        const index = currentSale.findIndex(item => item.id === product.id);
        if (index > -1) {
            const updatedCart = [...currentSale];
            updatedCart[index].quantity += 1;
            setCurrentSale(updatedCart);
        } else {
            setCurrentSale([...currentSale, { ...product, quantity: 1 }]);
        }
    }

    const removeProduct = (productId: any) => {
        const list = currentSale.filter(product => product.id !== productId)
        setCurrentSale(list)
    }


    return <CartContext.Provider value={{ editModal, seteditModal, listProducts, currentSale, addToCart, setCurrentSale, removeProduct }}>{children}</CartContext.Provider>
}

