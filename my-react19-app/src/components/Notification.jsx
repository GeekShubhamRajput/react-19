import styles from "../Notification.module.css"

export const Notification = ({children, type="success"}) => {
  return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>
}
