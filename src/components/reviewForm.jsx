import {useState} from "react"
import { generateReview } from '../api/fetchProducts';

const ReviewForm = (products) => {

    const [selectProduct, setSelectedProduct] = useState(null);
    const [review, setReview] = useState(null)
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const onFormSubmit = async(e) => {
        e.preventDefault();

        const data = {review: review, product: selectProduct}
        try{
            isLoading(true);
            await generateReview(data)

        } catch(e){
            setError(e);
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div>
            {error && <div className="error">{error}</div>}
            <form onSubmit={onFormSubmit}>
                <label htmlFor="product">Select a product:</label>
                <select name="product" onChange={(e) => setSelectedProduct(e.target.value)}>
                    {products.map((pr) => <option value={pr.id}>{pr.name}</option>)}
                </select>
                <label htmlFor="review">Review:</label>
                <input onChange={(e)=> setReview(e.target.value)} value={review} />
            </form>
        </div>
    )
}

export default ReviewForm