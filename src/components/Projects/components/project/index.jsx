'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, category}) {

    return (
        <div className={styles.project}>
            <h2>{title}</h2>
            <p>{category}</p>
        </div>
    )
}
