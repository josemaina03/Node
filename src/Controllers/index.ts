import {Request, Response} from 'express'
import { Products, TypedBody } from '../Models'
const products: Array<Products> = []

export function getProducts(req:Request, res:Response){
    res.status(200).json(products)
}

export const addProduct=(req:TypedBody, res:Response)=>{

    let my_title:string = 'Health and Fitness'
    let my_description:string = 'Lightweighttt!!'
    let my_price:number = 1738
   
 const {title,description} = req.body
    let newProduct:Products={
        id:Math.floor(Math.random() * 10000),
        title:my_title,
        description:my_description,
        price:my_price
    }

    products.push(newProduct)
    res.status(201).json({message:"Todo Added Successfully"})
}

export function getTodo(req:Request<{id:string}>, res:Response){
    // we need an Id 
    const id = +req.params.id
    //get todo
    const product= products.find(x=>x.id===id)

    if(product!=undefined){
        return res.status(200).json(product)
    }
    return res.status(404).json({message:"Product Not Found"})
}

export function updateProduct(req:Request<{id:string}>, res:Response){
    // we need an Id 
    const id = +req.params.id
    //get todo
    const product= products.find(x=>x.id===id)
    const {title,description} = req.body
    if(product!=undefined){
            product.description=description
            product.title=title
        return res.status(200).json({message:`Product ${id} updated`})
    }
    return res.status(404).json({message:"Product Not Found"})
}


export const deleteProduct=(req:Request<{id:string}>, res:Response)=>{
    // we need an Id 
    const id = +req.params.id
    //get todo
    const index= products.findIndex(x=>x.id===id)

    if(index>=0){
        products.splice(index,1)
        return res.status(200).json({message:`Product ${id} deleted`})
    }
    return res.status(404).json({message:"Product Not Found"})
}


