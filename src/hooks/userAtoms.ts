import { atom } from 'jotai'


export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

export const usersAtom = atom<User[]>([])
