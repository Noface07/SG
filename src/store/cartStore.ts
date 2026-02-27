import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';

export interface CartItem extends Product {
    cartItemId: string; // unique ID for the item in cart
}

interface CartState {
    items: CartItem[];
    isDrawerOpen: boolean;
    addItem: (product: Product) => void;
    removeItem: (cartItemId: string) => void;
    clearCart: () => void;
    openDrawer: () => void;
    closeDrawer: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            isDrawerOpen: false,
            addItem: (product) =>
                set((state) => ({
                    items: [...state.items, { ...product, cartItemId: crypto.randomUUID() }],
                    isDrawerOpen: true
                })),
            removeItem: (cartItemId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.cartItemId !== cartItemId)
                })),
            clearCart: () => set({ items: [] }),
            openDrawer: () => set({ isDrawerOpen: true }),
            closeDrawer: () => set({ isDrawerOpen: false }),
        }),
        {
            name: 'sanwariya-cart-storage',
            partialize: (state) => ({ items: state.items }), // Only persist items
        }
    )
);
