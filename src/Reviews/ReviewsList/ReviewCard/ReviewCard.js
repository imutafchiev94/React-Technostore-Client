import styles from './ReviewCard.module.css';
const ReviewCard = ({review}) => {
    return (
        <div className={styles.review}>
        <div className="row">
            <div className="col-md-3">
                <img className={styles.authorImage} src="https://res.cloudinary.com/hellios94/image/upload/v1638213618/Technostore/user_ie0xk8.png" alt="author"/>
            </div>
            <div className="col-md-9">
                <p>{review.title}</p>
                <p>{review.content}</p>
            </div>
        </div>
        </div>
    )
}

export default ReviewCard