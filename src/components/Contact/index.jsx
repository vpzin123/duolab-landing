import styles from './style.module.scss';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Magnetic from '../../common/Magnetic';

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
}

export default function index() {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={container}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={styles.contact}
        >
            <div className={styles.body}>
                <div className={styles.ctaSection}>
                    <p className={styles.eyebrow}>Última pergunta</p>
                    <h2 className={styles.headline}>
                        Quantos leads você<br/>
                        <em>perdeu essa semana?</em>
                    </h2>
                    <p className={styles.subtext}>Cada dia sem IA é dinheiro queimado em tráfego que ninguém responde. Sua concorrência já automatizou. A pergunta não é se você vai, é quando.</p>
                    <div className={styles.ctaRow}>
                        <a className={styles.ctaPrimary}>Quero minha IA vendendo agora</a>
                        <span className={styles.ctaNote}>Setup em 7 dias. Demonstração gratuita em 15 min.</span>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.footer}>
                    <div className={styles.footerLeft}>
                        <div className={styles.brand}>
                            <span className={styles.brandDot}></span>
                            <span className={styles.brandName}>DUOLAB</span>
                        </div>
                        <p className={styles.brandSub}>IA + Web de alta performance.<br/>Santo André, SP.</p>
                    </div>
                    <div className={styles.footerCenter}>
                        <a className={styles.contactLink}>contato@duolab.com.br</a>
                        <a className={styles.contactLink}>(11) 4992-7089</a>
                    </div>
                    <div className={styles.footerRight}>
                        <Magnetic><a className={styles.social}>Instagram</a></Magnetic>
                        <Magnetic><a className={styles.social}>LinkedIn</a></Magnetic>
                        <Magnetic><a className={styles.social}>WhatsApp</a></Magnetic>
                        <Magnetic><a className={styles.social}>YouTube</a></Magnetic>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
