import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishThunk, getWishThunk } from '../redux/reducers/wishReducers'


const Wish = () => {
    const deleteProd=async(id)=>{
        dispatch(deleteWishThunk(id))
        if(id=item._id){
            alert("data istek listesinde var")
            return
        }
    }
    const dispatch = useDispatch()

    const data = useSelector(state => state.basket.product)
    const loading = useSelector(state => state.basket.loading)
    const error = useSelector(state => state.basket.rejected)

    useState(() => {
        dispatch(getWishThunk())
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

export default Wish