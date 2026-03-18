'use client';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import styles from './style.module.scss';

const stats = [
    { number: "3s", label: "Resposta no WhatsApp", perk: "Responde de madrugada" },
    { number: "800+", label: "Negócios atendidos", perk: "Não pede demissão" },
    { number: "90+", label: "PageSpeed ou refaz grátis", perk: "Não chega atrasada" },
    { number: "R$0", label: "De salário pro vendedor IA", perk: "Não tira férias" },
]

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    })
}

export default function Numbers() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-50px" });

    return (
        <div ref={container} className={styles.numbers}>
            <div className={styles.grid}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className={styles.stat}
                        variants={itemVariants}
                        custom={index}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <span className={styles.value}>{stat.number}</span>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.perk}>✓ {stat.perk}</span>
                    </motion.div>
                ))}
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}
