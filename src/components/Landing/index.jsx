'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import PhoneMockup from '../PhoneMockup';

function LiveCounter() {
  const [deals, setDeals] = useState(1247);
  const [leads, setLeads] = useState(4832);
  const [responses, setResponses] = useState(12409);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeals(prev => prev + Math.floor(Math.random() * 2));
      setLeads(prev => prev + Math.floor(Math.random() * 3) + 1);
      setResponses(prev => prev + Math.floor(Math.random() * 5) + 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={styles.liveCounter}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 3.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className={styles.counterHeader}>
        <span className={styles.liveDot}></span>
        <span>AO VIVO</span>
      </div>
      <div className={styles.counterItem}>
        <span className={styles.counterValue}>{deals.toLocaleString('pt-BR')}</span>
        <span className={styles.counterLabel}>Negócios fechados</span>
      </div>
      <div className={styles.counterItem}>
        <span className={styles.counterValue}>{leads.toLocaleString('pt-BR')}</span>
        <span className={styles.counterLabel}>Leads qualificados</span>
      </div>
      <div className={styles.counterItem}>
        <span className={styles.counterValue}>{responses.toLocaleString('pt-BR')}</span>
        <span className={styles.counterLabel}>Respostas enviadas</span>
      </div>
    </motion.div>
  );
}

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.05 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/hero-duolab.jpg"
          fill={true}
          alt="DUOLAB hero background"
          priority
        />
      </div>
      <div className={styles.heroGlow}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.line1}>Seu WhatsApp</span>
          <span className={styles.line2}>vira uma <em>máquina</em></span>
          <span className={styles.line3}>de fechar</span>
          <span className={styles.line4}>contratos. <em>Sem você.</em></span>
        </h1>
      </div>
      <div className={styles.phonePosition}>
        <PhoneMockup />
        <LiveCounter />
      </div>
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>LEADS + IA + RESULTADO +</p>
          <p ref={secondText}>LEADS + IA + RESULTADO +</p>
        </div>
      </div>
    </motion.main>
  )
}
