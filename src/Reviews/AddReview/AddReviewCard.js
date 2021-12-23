import styles from './AddReviewCard.module.css';
import * as productService from '../../services/productService';
import {useNavigate} from 'react-router-dom';
const AddReviewCard = ({productId}) => {

	const navigate = useNavigate();

	const addReview = (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		let title = formData.get('title');
		let content = formData.get('content');
		console.log(formData);
		productService.addReview(productId, {title, content})
		.then(result => {
			navigate(`/details/${productId}`);
		})
	}

    return (
        <div className="col-sm-12">
		<p className={styles.reviewText}>Here you can write review for this product</p>
			<p className={styles.reviewText}><b>Write Your Review</b></p>
									
									<form method="Post" className={styles.reviewForm} onSubmit={addReview}>
									
										<input type="text" name="title" className={styles.reviewTitle} placeholder="Title"/>
                                            
										<textarea  name="content" className={styles.reviewContent} ></textarea>
										<button type="submit" className="btn btn-default pull-right">
											Submit
										</button>
									</form>
								</div>
    )
}

export default AddReviewCard;