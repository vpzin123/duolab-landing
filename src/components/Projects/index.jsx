'use client';
import styles from './style.module.scss'
import Project from './components/project';

const projects = [
  {
    title: "Agente IA no WhatsApp",
    category: "Vendedor 24/7 sem salário",
  },
  {
    title: "Site de alta performance",
    category: "PageSpeed 90+ ou refazemos grátis",
  },
  {
    title: "Google Ads + IA",
    category: "Tráfego que a IA converte",
  },
  {
    title: "SEO Orgânico",
    category: "Tráfego grátis que só cresce",
  }
]

export default function Home() {

  return (
  <section className={styles.projects}>
    <div className={styles.sectionLabel}>
      <p>O que entregamos</p>
      <div className={styles.line}></div>
    </div>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} category={project.category} key={index}/>
        })
      }
    </div>
    <a className={styles.cta}>Ver como funciona</a>
  </section>
  )
}
