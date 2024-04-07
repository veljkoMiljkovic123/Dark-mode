import React, { useEffect, useState } from 'react'
import PostService from '../services/postService'
import SingleCard from './SingleCard'
import LoadingComponent from './LoadingComponent'

function ProductsComponent() {
    const[allProducts,setAllProducts] = useState([])
    const[isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        PostService.getAllProducts()
         .then(res=>{
            setAllProducts(res.data.products)
            setIsLoading(true)
         })
         .catch(err=>console.log(err))
      },[])

  return  <div>
    {isLoading?<div className='bg-slate-300 dark:bg-black/50'>
    <div className='container mx-auto'>
    <h2>All my products</h2>
    <div className='flex flex-wrap gap-6 justify-center'>
    {allProducts.map((el,i)=>{
        return <SingleCard key={i} el={el}/>
    })}
    </div>
    </div>
  </div>:<LoadingComponent />}
  </div>
  
}

export default ProductsComponent