import styles from "./CarDetails.module.css"

export default function CarDetails({ car } : { car: { id: number, manufacture: string, model: string, year: number, km:number } }) {
    return (
        <div key={car.id} className={styles.car_details}>
            <h3>{car.model} - {car.year}</h3>
            <p>Brand: {car.manufacture}</p>
            <p>Km: {car.km}</p>
        </div>
    )
}