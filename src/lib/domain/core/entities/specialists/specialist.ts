import { ILocality } from "../localityEntity"

export interface Specialist{
    id: number | string
    name: string
    firstLastName: string | undefined
    secondLastName: string | undefined
    direction: string
    birthDate: string
    sex: number
    country: string
    curp: string
    aboutMe: string
    phone: string
    image: string | undefined
    status: number | string
    specialties: Specialty[]
    localities: ILocality[]
    rating: number | undefined
}

export interface Specialty{
    id: number | string
    name: string
    certificate: string
    institution: string
    principal: boolean
}