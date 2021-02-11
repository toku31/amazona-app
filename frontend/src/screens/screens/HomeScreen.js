import React, { useEffect } from 'react'
// import axios from 'axios'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const productList = useSelector(state => state.productList);
  const dispatch = useDispatch()
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get('/api/products');
  //       setLoading(false);
  //       setProducts(data);
  //     } catch(error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  }, [dispatch])
  return (
    <div>
      {loading? (<LoadingBox></LoadingBox>) : error? (<MessageBox variant="danger">{error}</MessageBox>) : 
      ( <div className="row center">
        {products.map((product)=>(
          <Product key={product._id} product={product} ></Product>
        ))}
      </div>
      )} 
    </div>  
  );
}
