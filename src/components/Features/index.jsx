'use client';
import styles from './style.module.scss';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const features = [
    {
        number: "01",
        title: "IA que fecha por você",
        desc: <>Responde em <em>3 segundos.</em> Qualifica com perguntas inteligentes. Faz <em>7 follow-ups</em> automáticos. Agenda a reunião. Você só aparece pra fechar. Um vendedor <em>24/7</em> sem salário, sem CLT, sem férias.</>,
        accent: true,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2"/>
            </svg>
        ),
    },
    {
        number: "02",
        title: "Site que o Google ama",
        desc: <>PageSpeed <em>90+ garantido.</em> Grade A no GTMetrix. SEO embutido no código. Enquanto seu concorrente paga agência pra corrigir site lento, o seu já nasce <em>rápido e ranqueado.</em></>,
        accent: false,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
        ),
    },
    {
        number: "03",
        title: "Tráfego que paga a conta",
        desc: <>Google Ads onde cada real é rastreado até o <em>contrato assinado.</em> Sem IA, você paga o clique e reza. Com IA, você paga o clique e <em>fecha.</em> A diferença é o que acontece depois do clique.</>,
        accent: false,
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D1FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <path d="M7 17l4-8 4 4 5-9"/>
            </svg>
        ),
    },
]

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.12,
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1]
        }
    })
}

export default function Features() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-80px" });

    return (
        <div ref={container} className={styles.features}>
            <div className={styles.sectionLabel}>
                <p>Por que a DUOLAB</p>
                <div className={styles.line}></div>
            </div>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.card} ${feature.accent ? styles.accentCard : ''}`}
                        variants={cardVariants}
                        custom={index}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className={styles.iconContainer}>
                            {feature.icon}
                        </div>
                        <span className={styles.number}>{feature.number}</span>
                        <h3 className={styles.title}>{feature.title}</h3>
                        <p className={styles.desc}>{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
