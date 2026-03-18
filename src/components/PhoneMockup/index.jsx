'use client';
import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const conversations = [
    [
        { from: "user", text: "Oi, vi o anúncio de vocês. Fazem reforma?" },
        { from: "bot", text: "Olá! Sim, trabalhamos com reformas residenciais e comerciais. Qual o tipo de projeto?" },
        { from: "user", text: "Reforma do meu apartamento, 70m²" },
        { from: "bot", text: "Perfeito! Apartamento de 70m², certo? Para quando seria o início da obra?" },
        { from: "user", text: "Mês que vem se possível" },
        { from: "bot", text: "Ótimo, temos disponibilidade! Vou agendar uma visita técnica gratuita. Terça às 14h funciona pra você?" },
    ],
    [
        { from: "user", text: "Quanto custa uma limpeza de pele?" },
        { from: "bot", text: "Olá! Nossa limpeza de pele profunda está por R$ 189. Inclui extração + máscara + hidratação. Gostaria de agendar?" },
        { from: "user", text: "Tem horário amanhã?" },
        { from: "bot", text: "Amanhã temos às 10h e às 15h30. Qual prefere?" },
        { from: "user", text: "15h30" },
        { from: "bot", text: "Confirmado! Amanhã às 15h30 com a Dra. Marina. Vou enviar o endereço e as orientações de preparo." },
    ],
    [
        { from: "user", text: "Boa noite, vocês entregam em Guarulhos?" },
        { from: "bot", text: "Boa noite! Sim, entregamos em toda Grande SP. O que você procura?" },
        { from: "user", text: "50 marmitas fit pra semana" },
        { from: "bot", text: "Temos o plano semanal de 50 marmitas por R$ 34,90/un. Quer o cardápio da semana?" },
        { from: "user", text: "Manda aí" },
        { from: "bot", text: "Enviando o cardápio! Para fechar, preciso do endereço de entrega e o melhor dia. Segunda funciona?" },
    ],
];

const msgVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
};

export default function PhoneMockup() {
    const [convIndex, setConvIndex] = useState(0);
    const [msgIndex, setMsgIndex] = useState(0);
    const [visibleMsgs, setVisibleMsgs] = useState([]);
    const [typing, setTyping] = useState(false);

    const currentConv = conversations[convIndex];

    useEffect(() => {
        if (msgIndex >= currentConv.length) {
            const timeout = setTimeout(() => {
                setVisibleMsgs([]);
                setMsgIndex(0);
                setConvIndex((prev) => (prev + 1) % conversations.length);
            }, 3000);
            return () => clearTimeout(timeout);
        }

        const msg = currentConv[msgIndex];
        const delay = msg.from === "bot" ? 1200 : 800;

        if (msg.from === "bot") {
            setTyping(true);
            const typingTimeout = setTimeout(() => {
                setTyping(false);
                setVisibleMsgs((prev) => [...prev, msg]);
                setMsgIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(typingTimeout);
        } else {
            const timeout = setTimeout(() => {
                setVisibleMsgs((prev) => [...prev, msg]);
                setMsgIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [msgIndex, convIndex]);

    return (
        <motion.div
            className={styles.phoneWrapper}
            initial={{ opacity: 0, y: 80, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
        >
            <div className={styles.phone}>
                <div className={styles.notch}></div>
                <div className={styles.screen}>
                    <div className={styles.statusBar}>
                        <span>9:41</span>
                        <div className={styles.statusIcons}>
                            <span>●●●●</span>
                            <span>WiFi</span>
                            <span>100%</span>
                        </div>
                    </div>
                    <div className={styles.chatHeader}>
                        <div className={styles.backArrow}>‹</div>
                        <div className={styles.avatar}>D</div>
                        <div className={styles.headerInfo}>
                            <span className={styles.headerName}>Agente IA</span>
                            <span className={styles.headerStatus}>Online</span>
                        </div>
                    </div>
                    <div className={styles.chatBody}>
                        <AnimatePresence>
                            {visibleMsgs.map((msg, i) => (
                                <motion.div
                                    key={`${convIndex}-${i}`}
                                    className={`${styles.msg} ${msg.from === "user" ? styles.msgUser : styles.msgBot}`}
                                    variants={msgVariant}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    {msg.text}
                                    <span className={styles.time}>agora</span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {typing && (
                            <motion.div
                                className={`${styles.msg} ${styles.msgBot} ${styles.typingIndicator}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                                <span className={styles.dot}></span>
                            </motion.div>
                        )}
                    </div>
                    <div className={styles.chatInput}>
                        <span>Mensagem</span>
                        <div className={styles.sendBtn}>›</div>
                    </div>
                    <div className={styles.homeIndicator}></div>
                </div>
            </div>
        </motion.div>
    );
}
