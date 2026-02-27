import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';

interface WishlistState {
    items: Product[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    isInWishlist: (productId: string) => boolean;
    clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) =>
                set((state) => ({
                    items: state.items.some(i => i.id === product.id)
                        ? state.items
                        : [...state.items, product]
                })),
            removeItem: (productId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.id !== productId)
                })),
            clearWishlist: () => set({ items: [] }),
            isInWishlist: (productId) => get().items.some(item => item.id === productId),
        }),
        {
            name: 'sanwariya-wishlist-storage',
        }
    )
);
