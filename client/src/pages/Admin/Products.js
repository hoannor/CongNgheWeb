import React, {useState, useEffect} from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import toast from 'react-hot-toast'
const Products = () => {
    const [product, setProducts] = useState([])

    // get all products
    const getAllProducts = async () => {
        try {
            const [data] = await axios.get('/api/v1/product/get-product')
            setProducts(data.products)
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout title='All Products'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu />

            </div>
            <div className='col-md-9'>
                <h1 className='text-center'>All Products List</h1>
            </div>
        </div>
    </Layout>
  )
}

export default Products