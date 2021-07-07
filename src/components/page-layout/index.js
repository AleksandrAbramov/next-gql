import React from 'react'
import styles from './styles.module.scss'

const PageLayout = ({children})=>{
    return (
        <div className={styles.mainWrapper}>{children}</div>
    )
}

export default PageLayout