// import { create } from 'zustand'

import { create } from "zustand"

type ModalType = 'login' | 'signup'

interface AuthModalStore {
    isOpen: boolean
    openSignUpModal: () => void
    closeModal: () => void
}

export const useAuthModal = create<AuthModalStore>((set) => ({
    isOpen: false,
    openSignUpModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false }),
}))

