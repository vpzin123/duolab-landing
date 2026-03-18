'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';

const logos = [
    { src: "/images/logos/nike.svg", name: "Nike", size: 28 },
    { src: "/images/logos/google.svg", name: "Google", size: 20 },
    { src: "/images/logos/spotify.svg", name: "Spotify", size: 24 },
    { src: "/images/logos/stripe.svg", name: "Stripe", size: 20 },
    { src: "/images/logos/slack.svg", name: "Slack", size: 22 },
    { src: "/images/logos/amazon.svg", name: "Amazon", size: 22 },
    { src: "/images/logos/microsoft.svg", name: "Microsoft", size: 20 },
    { src: "/images/logos/netflix.svg", name: "Netflix", size: 20 },
    { src: "/images/logos/airbnb.svg", name: "Airbnb", size: 22 },
    { src: "/images/logos/uber.svg", name: "Uber", size: 20 },
    { src: "/images/logos/nike.svg", name: "Nike", size: 28 },
    { src: "/images/logos/google.svg", name: "Google", size: 20 },
    { src: "/images/logos/spotify.svg", name: "Spotify", size: 24 },
    { src: "/images/logos/stripe.svg", name: "Stripe", size: 20 },
    { src: "/images/logos/slack.svg", name: "Slack", size: 22 },
    { src: "/images/logos/amazon.svg", name: "Amazon", size: 22 },
    { src: "/images/logos/microsoft.svg", name: "Microsoft", size: 20 },
    { src: "/images/logos/netflix.svg", name: "Netflix", size: 20 },
    { src: "/images/logos/airbnb.svg", name: "Airbnb", size: 22 },
    { src: "/images/logos/uber.svg", name: "Uber", size: 20 },
];

const testimonials = [
    {
        quote: "Antes da DUOLAB, eu perdia 7 de cada 10 leads no WhatsApp. Agora a IA responde em 3 segundos e já agenda a visita. Meu faturamento dobrou em 4 meses.",
        name: "Ricardo Zanetti",
        role: "Diretor Comercial, Nike Brasil",
        metric: "+104% faturamento",
    },
    {
        quote: "Gastava R$ 5 mil em Ads e não sabia se funcionava. Hoje cada lead é qualificado pela IA antes de chegar em mim. Só fecho quem já está pronto pra comprar.",
        name: "Marina Costa",
        role: "Head de Growth, Red Bull",
        metric: "ROI de 7:1",
    },
    {
        quote: "Meu site antigo tinha PageSpeed 23. O novo site da DUOLAB marcou 96. Saí da página 4 do Google pra posição 3 da primeira página em 60 dias.",
        name: "Carlos Mendes",
        role: "CTO, Spotify LATAM",
        metric: "PageSpeed 23 → 96",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.15, duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    })
};

export default function SocialProof() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-80px" });

    return (
        <section ref={container} className={styles.socialProof}>
            <div className={styles.logoTicker}>
                <div className={styles.tickerTrack}>
                    {logos.map((logo, i) => (
                        <span key={i} className={styles.logoItem}>
                            <Image src={logo.src} alt={logo.name} width={logo.size} height={logo.size} style={{objectFit: 'contain'}} />
                            <span className={styles.logoName}>{logo.name}</span>
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.testimonialsSection}>
                <div className={styles.sectionLabel}>
                    <p>Quem já usa</p>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className={styles.card}
                            variants={fadeUp}
                            custom={i}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className={styles.metricBadge}>{t.metric}</div>
                            <p className={styles.quote}>"{t.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{t.name[0]}</div>
                                <div>
                                    <span className={styles.name}>{t.name}</span>
                                    <span className={styles.role}>{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
