import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';

const navItems = [
  { title: "Home", href: "/" },
  { title: "Serviços", href: "/servicos" },
  { title: "Sobre", href: "/sobre" },
  { title: "Contato", href: "/contato" },
]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Menu</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link
                        key={index}
                        data={{...data, index}}
                        isActive={selectedIndicator == data.href}
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>

            <div className={styles.ctaBlock}>
                <a className={styles.ctaButton}>Quero minha IA vendendo</a>
                <p className={styles.ctaNote}>Demonstração gratuita em 15 min</p>
            </div>

            <div className={styles.footer}>
                <div className={styles.contactInfo}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Email</span>
                        <span className={styles.infoValue}>contato@duolab.com.br</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>WhatsApp</span>
                        <span className={styles.infoValue}>(11) 4992-7089</span>
                    </div>
                </div>
                <div className={styles.socials}>
                    <a>Ig</a>
                    <a>Li</a>
                    <a>Wa</a>
                    <a>Yt</a>
                </div>
            </div>
        </div>
        <Curve />
    </motion.div>
  )
}
