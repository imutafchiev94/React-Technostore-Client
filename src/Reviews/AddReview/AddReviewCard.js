import styles from './AddReviewCard.module.css';
const AddReviewCard = () => {
    return (
        <div className="col-sm-12">
		<p className={styles.reviewText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
			<p className={styles.reviewText}><b>Write Your Review</b></p>
									
									<form action="#" className={styles.reviewForm}>
									
											<input type="text" className={styles.reviewTitle} placeholder="Title"/>
                                            
										<textarea name="" className={styles.reviewContent} ></textarea>
										<button type="button" className="btn btn-default pull-right">
											Submit
										</button>
									</form>
								</div>
    )
}

export default AddReviewCard;