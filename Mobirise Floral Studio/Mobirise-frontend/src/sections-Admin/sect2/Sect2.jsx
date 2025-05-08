import React, { useState } from 'react'
import styles from "./Sect2.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductThunk, getProductThunk } from '../../redux/reducers/productReducers'
const Sect2 = () => {
    const deleteItem=async(id)=>{
        dispatch(deleteProductThunk(id))
    }
    const dispatch = useDispatch()

    const data = useSelector(state => state.product.product)
    const loading = useSelector(state => state.product.loading)
    const error = useSelector(state => state.product.error)
    console.log(data);

    useState(async() => {
        dispatch(getProductThunk())
    }, [])
    if (loading) return <span>Yuklenir ...</span>
    if (error) return <span>Xeta Bas verdi</span>
    return (
        <div>
            {data && data.map(item => {
                return (
                    <div className={styles.data}>
                        <img src={item.image} alt="" />
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        <button onClick={()=>{deleteItem(item._id)}}>Delete Item</button>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Sect2