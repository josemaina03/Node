import { Router } from "express";
import {updateProduct,addProduct,getProducts,deleteProduct} from '../Controllers'

const router=Router()
router.get('',getProducts)
// router.get('/:id',getProduct)
router.post('',addProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

export default router