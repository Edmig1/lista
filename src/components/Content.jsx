import styles from './Content.module.css'
import Form from "./Form";

function Content () {
    return (
        <div className={styles.content}>
            <div>
                <p className={styles.title}>Monte sua Lista</p>
            </div>
            <div className={styles.cont}>
                <Form></Form>
            </div>
        </div>
    )
}

export default Content