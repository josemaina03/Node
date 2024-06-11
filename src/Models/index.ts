import {Request} from 'express'

export interface Products{
    id:number
    title:string
    description:string
    price:number
}


export interface AddProducts{
    title:string
    description:string
    price: number  
}


export interface TypedBody extends Request{
    body:AddProducts
}

