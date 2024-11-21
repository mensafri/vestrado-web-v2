"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
	id: number;
	name: string;
	price: number;
	points: number;
	size: string;
	quantity: number;
	image: string;
};

type CartContextType = {
	cartItems: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
	updateCartItem: (
		id: number,
		key: keyof CartItem,
		value: string | number,
	) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const addToCart = (item: CartItem) => {
		setCartItems((prevItems) => [...prevItems, item]);
	};

	const removeFromCart = (id: number) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const updateCartItem = (
		id: number,
		key: keyof CartItem,
		value: string | number,
	) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, [key]: value } : item,
			),
		);
	};

	return (
		<CartContext.Provider
			value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};
