import './App.css';
import { useState, useEffect } from 'react';
import { fetchDataFromApi } from '../api/fetchProducts';
import {ReviewForm} from './components/reviewForm'


function App() {

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false);


  const fetchData = async () => {
    return await fetchDataFromApi();
  }

  const renderProduct = (product) => {
    return (
      <li key={product.id}>
      <div>{product.name}</div>
      <ul>
        {product.reviews.map((review) => <li key={review}>{review}</li>)}
      </ul>
      </li>
    )
  }


  useEffect(() => {
    try{
      setLoading(true);
      const data = fetchData()
      setProducts(data)
    }
    catch(e){
      setError(e)
    }
    finally{
      setLoading(false)
    }
  
  },[])


  return (
    <div className="App">
      {error && <div className='error'>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      <button onClick={()=> setShowForm(!showForm)}>Create Review</button>
      {showForm && <ReviewForm />}
      <ul>
        {products.map((product) => renderProduct(product))}
      </ul>
    </div>
  );
}

export default App;
