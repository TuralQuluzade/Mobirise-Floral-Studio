import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../redux/reducers/basketReducers'

const Basket = () => {
    const deleteProd=async(id)=>{
        dispatch(deleteBasketThunk(id))
    }
    const dispatch = useDispatch()

    const data = useSelector(state => state.basket.product)
    const loading = useSelector(state => state.basket.loading)
    const error = useSelector(state => state.basket.rejected)

    useState(() => {
        dispatch(getBasketThunk())
    }, [])
    if (loading) return <span>Yuklenir...</span>
    if (error) return <span>Xeta Bas verdi</span>
  return (
    <div>
        {data && data.map(item=>{
            return(
                <div>
                     <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                    <button onClick={()=>{deleteProd(item._id)}}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default Basket