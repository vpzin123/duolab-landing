'use client';
import styles from './style.module.scss';
import { useRef, useState } from 'react';
import { useInView, motion, AnimatePresence } from 'framer-motion';

const cases = [
    {
        segment: "Clínica de Estética",
        problem: "Perdia 60% dos leads no WhatsApp porque só respondia no horário comercial.",
        result: "IA respondendo 24/7. Agendamentos automáticos sem intervenção humana.",
        metrics: [
            { label: "Faturamento", before: "R$ 28k", after: "R$ 67k", pctBefore: 35, pctAfter: 85 },
            { label: "Agendamentos/mês", before: "45", after: "138", pctBefore: 25, pctAfter: 80 },
            { label: "Leads perdidos", before: "60%", after: "0%", pctBefore: 60, pctAfter: 3 },
        ],
    },
    {
        segment: "Construtora",
        problem: "Gastava R$ 8k/mês em Ads mas o time demorava horas pra responder.",
        result: "IA qualifica em 30s e agenda visita técnica automaticamente.",
        metrics: [
            { label: "Custo por lead", before: "R$ 180", after: "R$ 42", pctBefore: 80, pctAfter: 20 },
            { label: "Visitas/mês", before: "12", after: "47", pctBefore: 20, pctAfter: 78 },
            { label: "Faturamento", before: "R$ 95k", after: "R$ 310k", pctBefore: 25, pctAfter: 90 },
        ],
    },
    {
        segment: "Restaurante Delivery",
        problem: "30 msgs por noite sem resposta. Apenas 80 pedidos/dia via WhatsApp.",
        result: "IA atende todos os pedidos, faz upsell e envia pro sistema.",
        metrics: [
            { label: "Pedidos/dia", before: "80", after: "195", pctBefore: 30, pctAfter: 82 },
            { label: "Ticket médio", before: "R$ 38", after: "R$ 52", pctBefore: 40, pctAfter: 70 },
            { label: "Entregas via app", before: "120", after: "291", pctBefore: 28, pctAfter: 85 },
        ],
    },
    {
        segment: "Escritório de Advocacia",
        problem: "Leads do Ads ficavam sem retorno por dias. 8 consultas/mês agendadas.",
        result: "IA faz triagem jurídica e agenda consulta inicial em minutos.",
        metrics: [
            { label: "Consultas/mês", before: "8", after: "34", pctBefore: 18, pctAfter: 75 },
            { label: "Tempo resposta", before: "6h", after: "3s", pctBefore: 85, pctAfter: 5 },
            { label: "Conversão de lead", before: "12%", after: "41%", pctBefore: 15, pctAfter: 55 },
        ],
    },
];

function BarChart({ metric, animate }) {
    return (
        <div className={styles.barChart}>
            <span className={styles.barLabel}>{metric.label}</span>
            <div className={styles.bars}>
                <div className={styles.barRow}>
                    <span className={styles.barTag}>Antes</span>
                    <div className={styles.barTrack}>
                        <motion.div
                            className={styles.barFillBefore}
                            initial={{ width: 0 }}
                            animate={animate ? { width: `${metric.pctBefore}%` } : { width: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                        />
                    </div>
                    <span className={styles.barValue}>{metric.before}</span>
                </div>
                <div className={styles.barRow}>
                    <span className={styles.barTag}>Depois</span>
                    <div className={styles.barTrack}>
                        <motion.div
                            className={styles.barFillAfter}
                            initial={{ width: 0 }}
                            animate={animate ? { width: `${metric.pctAfter}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        />
                    </div>
                    <span className={styles.barValueHighlight}>{metric.after}</span>
                </div>
            </div>
        </div>
    );
}

export default function UseCases() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-80px" });
    const [active, setActive] = useState(0);

    return (
        <section ref={container} className={styles.useCases}>
            <div className={styles.sectionLabel}>
                <p>Cases de uso</p>
                <div className={styles.line}></div>
            </div>

            <div className={styles.tabs}>
                {cases.map((c, i) => (
                    <button
                        key={i}
                        className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                        onClick={() => setActive(i)}
                    >
                        {c.segment}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    className={styles.caseCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className={styles.caseContent}>
                        <div className={styles.caseLeft}>
                            <div className={styles.block}>
                                <span className={styles.label}>Problema</span>
                                <p>{cases[active].problem}</p>
                            </div>
                            <div className={styles.block}>
                                <span className={styles.labelGreen}>Resultado com IA</span>
                                <p>{cases[active].result}</p>
                            </div>
                        </div>
                        <div className={styles.caseRight}>
                            {cases[active].metrics.map((m, i) => (
                                <BarChart key={`${active}-${i}`} metric={m} animate={true} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
