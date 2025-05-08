import React, { useState } from 'react'
import styles from "./Sect3.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../redux/reducers/productReducers'
import axios from 'axios'
const Sect3 = () => {
    const addToCart = async (data) => {
        const res = await axios.post("http://localhost:5000/basket/", data)
        const result = res.data
        console.log(result);
        
        alert(`${result.name} sebete elave olundu`)
    }
    const addToWish = async (data) => {
        const res = await axios.post("http://localhost:5000/wish/", data)
        const result = res.data
        console.log(result);
        
        alert(`${result.name} istek listine  elave olundu`)
        if(result.id==item._id){
            alert("Mehsul Onsuzda basketde var")
            return
        }
    }
    const dispatch=useDispatch()

    const data = useSelector(state=>state.product.product)
    const loading = useSelector(state=>state.product.loading)
    const error = useSelector(state=>state.product.error)
    console.log(data);
    
    useState(()=>{
        dispatch(getProductThunk())
    },[])
    if(loading) return <span>Yuklenir ...</span>
    if(error) return <span>Xeta Bas verdi</span>
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.texts}>
                <span>Devoted to wonderful beauty</span>
                <h1>Flowers Pricing</h1>
            </div>
            <div className={styles.datas}>
            {data && data.map(item=>{
            return(
                <div className={styles.data}>
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <h3>{item.price}</h3>
                    <button onClick={()=>{addToCart(item)}}>Add To Card</button>
                    <button onClick={()=>{addToWish(item)}}>Add To Wish</button>
                </div>
            )
        }).slice(0,6)}
            </div>
        </div>
    </div>
  )
}

export default Sect3