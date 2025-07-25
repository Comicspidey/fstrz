import { Button } from "../Button/Button";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbTitleWrapper}>
          <h1 className={styles.breadcrumbTitle}>wordpress.fstrz.com</h1>
          <span className={styles.breadcrumbLabel}>
            <span className={styles.breadcrumbLabelName}>PROD</span>
            <span className={styles.breadcrumbLabelStatus}>Optimized</span>
          </span>
        </div>
        <ul className={styles.breadcrumbList}>
          <li className={styles.breadcrumbListItem}>
            <a href="#" className={styles.breadcrumbLink}>Console</a>
          </li>
          <li className={styles.breadcrumbListItem}>
            <a href="#" className={styles.breadcrumbLink}>Projects</a>
          </li>
          <li className={styles.breadcrumbListItem}>
            <a href="#" className={styles.breadcrumbLink}>Websites</a>
          </li>
          <li className={styles.breadcrumbListItem}>
            <a href="#" className={styles.breadcrumbLink}>Configuration</a>
          </li>
          <li className={styles.breadcrumbListItem}>
           Activity Feed
          </li>
        </ul>
      </div>
      <div className={styles.actionGroup}>
        <Button variant="ghost" label="Activity Feed" />
        <Button variant="ghost" label="Applications" />
        <Button variant="ghost" label="Quick Action" />
      </div>
    </header>
  )
}