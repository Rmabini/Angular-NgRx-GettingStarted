import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction('[Product] Set Current Product', props<{currentProductId: number}>());

export const clearCurrentProduct = createAction('[Product] Clear Current Product');

export const initializeCurrentProduct = createAction('[Product] Initialize Current Product');

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction('[Product] Load Success',props<{products: Product[]}>());

export const loadProductFailure = createAction('[Product] Load Failure', props<{error: string}>());

export const updateProduct = createAction('[Product] Update Product', props<{product: Product}>());

export const updateProductSuccess = createAction('[Product] Update Product Success', props<{product: Product}>());

export const updateProductFailure = createAction('[Product] Update Product Failure', props<{error: string}>());

export const createProduct = createAction('[Product] Create Product', props<{product: Product}>());

export const createProductSuccess = createAction('[Product] Create Product Success', props<{product: Product}>());

export const createProductFailure = createAction('[Product] Create Product Failer', props<{error: string}>());

export const deleteProduct = createAction('[Product] Delete Product',props<{idToDelete: number}>());

export const deleteProductSuccess = createAction('[Product] Delete Product Success', props<{idToDelete: number}>());

export const deleteProductFailure = createAction('[Product] Delete Product Failure', props<{error:string}>());



