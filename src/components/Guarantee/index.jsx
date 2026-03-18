'use client';
import styles from './style.module.scss';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }
}

export default function Guarantee() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-80px" });

    return (
        <motion.section
            ref={container}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={styles.guarantee}
        >
            <div className={styles.inner}>
                <div className={styles.icon}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D1FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M9 12l2 2 4-4"/>
                    </svg>
                </div>
                <h2 className={styles.title}>Garantia DUOLAB</h2>
                <p className={styles.desc}>
                    Site entregue com PageSpeed abaixo de 90? Refazemos sem custo.
                    IA não respondeu em até 5 segundos? Ajustamos até funcionar.
                    Sem letras miúdas. Sem asterisco. O risco é nosso, não seu.
                </p>
                <div className={styles.badges}>
                    <span>PageSpeed 90+ garantido</span>
                    <span>IA configurada em 7 dias</span>
                    <span>Suporte direto no WhatsApp</span>
                </div>
            </div>
        </motion.section>
    )
}
