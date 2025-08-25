import styles from './ProfileCard.module.css';

export default function ProfileCard({ name, image, description }) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={image} alt={`${name}'s profile'}`} className={styles.image} />
                <h2 className={styles.name}> {name} </h2>
                <p className={description}> {description} </p>
            </div>
        </div>
    );
}