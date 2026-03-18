import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }
}

const fadeDelay = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] } }
}

export default function index() {
    const description = useRef(null);
    const isInView = useInView(description, { once: true, margin: "-100px" })

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <motion.div className={styles.left} variants={fadeUp} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <p>Você paga pelo clique, o lead chega no WhatsApp, ninguém responde a tempo e o <em>dinheiro evapora.</em> A DUOLAB coloca uma IA que responde em <em>3 segundos,</em> qualifica, faz follow-up e agenda. Você só aparece <em>pra assinar.</em></p>
                </motion.div>
                <motion.div className={styles.right} variants={fadeDelay} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <p>Site de alta performance que ranqueia no Google + IA no WhatsApp que converte o visitante em cliente + tráfego pago gerenciado com foco em ROI. Tudo numa operação só, sem você precisar contratar equipe.</p>
                    <a className={styles.button}>Quero resultado</a>
                </motion.div>
            </div>
        </div>
    )
}
