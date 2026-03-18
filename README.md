# VPLP - Landing Page Template

Template de landing page dark premium com animacoes, copy framework Hormozi (PAS) e deploy na Vercel.

**Demo:** [duolab-landing.vercel.app](https://duolab-landing.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-purple?logo=framer) ![GSAP](https://img.shields.io/badge/GSAP-3-green) ![SCSS](https://img.shields.io/badge/SCSS_Modules-pink?logo=sass)

---

## Preview

- Hero animado com iPhone mockup (chat WhatsApp ao vivo)
- Preloader com barra de progresso
- Social proof com logo ticker + depoimentos
- Numeros com metricas animadas
- Cards de features com icones SVG
- Cases de uso com graficos de barras antes/depois
- Secao de garantia com badges
- CTA final com glow

## Stack

| Tech | Uso |
|------|-----|
| Next.js 13 | App Router, static export |
| Framer Motion | Scroll animations, transitions |
| GSAP | Ticker infinito, efeitos magneticos |
| SCSS Modules | Estilizacao por componente |
| Geist Font | Tipografia principal (sans + mono) |

## Quick Start

```bash
# 1. Clone
git clone https://github.com/vpzin123/duolab-landing.git minha-landing
cd minha-landing

# 2. Instale
npm install

# 3. Rode
npm run dev -- -p 3001

# 4. Abra
# http://localhost:3001
```

## Customizacao

### Cores

Edite `src/app/globals.css`:

```css
:root {
  --bb-limon: #D1FF00;        /* Cor de destaque (troque pela sua) */
  --bb-dark: #0A0A0B;         /* Fundo principal */
  --bb-surface: #141416;      /* Fundo de cards */
  --bb-warm-white: #F5F0EB;   /* Cor do texto */
  --bb-grey: #888;            /* Texto secundario */
}
```

### Conteudo

| O que trocar | Onde |
|-------------|------|
| Nome da empresa | `src/components/Header/index.jsx`, `Preloader/index.jsx`, `Contact/index.jsx` |
| Headline do hero | `src/components/Landing/index.jsx` |
| Conversas do WhatsApp | `src/components/PhoneMockup/index.jsx` |
| Metricas do counter | `src/components/Landing/index.jsx` (LiveCounter) |
| Texto de problema | `src/components/Description/index.jsx` |
| Logos do ticker | `src/components/SocialProof/index.jsx` + SVGs em `public/images/logos/` |
| Depoimentos | `src/components/SocialProof/index.jsx` |
| Numeros e perks | `src/components/SlidingImages/index.jsx` |
| Features (3 cards) | `src/components/Features/index.jsx` |
| Cases de uso | `src/components/UseCases/index.jsx` |
| Lista de servicos | `src/components/Projects/index.jsx` |
| Garantia | `src/components/Guarantee/index.jsx` |
| CTA final | `src/components/Contact/index.jsx` |
| Email, telefone, redes | `src/components/Contact/index.jsx`, `Header/nav/index.jsx` |
| Titulo e descricao SEO | `src/app/layout.js` |

### Fonte

A fonte padrao e Geist (Vercel). Para trocar, edite `src/app/layout.js` e substitua o `localFont`.

### Imagens

- **Hero background**: substitua `public/images/hero-duolab.jpg`
- **Logos**: adicione SVGs em `public/images/logos/`
- **Favicon**: substitua `src/app/favicon.ico`

#### Gerar imagens com IA (opcional)

Se quiser gerar imagens com Gemini:

```bash
# Crie .env na raiz
echo "GEMINI_API_KEY=sua-chave-aqui" > .env
```

Pegue sua chave em [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

## Estrutura

```
src/
├── app/
│   ├── globals.css          # Variaveis de cor + reset
│   ├── layout.js            # Font + metadata
│   └── page.js              # Ordem das secoes
├── components/
│   ├── Preloader/           # Tela de loading
│   ├── Landing/             # Hero + phone + counter
│   ├── PhoneMockup/         # Chat WhatsApp animado
│   ├── Description/         # Texto problema/solucao
│   ├── SocialProof/         # Logos + depoimentos
│   ├── SlidingImages/       # Numeros + perks
│   ├── Features/            # 3 cards de features
│   ├── UseCases/            # Cases com graficos
│   ├── Projects/            # Lista de servicos
│   ├── Guarantee/           # Secao de garantia
│   ├── Contact/             # CTA final + footer
│   └── Header/              # Navbar + menu lateral
└── common/
    ├── Magnetic/            # Efeito magnetico no hover
    └── RoundedButton/       # Botao com animacao
```

## Deploy

### Vercel (recomendado)

```bash
npm i -g vercel
vercel login
vercel --prod --yes
```

### Netlify

```bash
npm run build
# Upload da pasta `out/`
```

### Qualquer hosting estatico

```bash
npm run build
# Sirva a pasta `out/`
```

## Copy Framework

O template usa o framework **PAS (Problem-Agitate-Solution)** do Alex Hormozi:

1. **Hero**: Resultado em 4 linhas. Palavras-chave em destaque.
2. **Descricao**: Problema do cliente + agitacao + hint da solucao.
3. **Features**: Titulo = beneficio, nao funcionalidade.
4. **Cases**: Antes/depois com numeros reais.
5. **Garantia**: Inversao de risco. "X ou refazemos gratis."
6. **CTA**: Pergunta de urgencia + botao com resultado especifico.

### Destaques no texto

Use `<em>` para destacar palavras-chave (renderiza na cor de destaque, sem italico):

```jsx
<p>O lead chega e o <em>dinheiro evapora.</em></p>
```

## Licenca

MIT - use como quiser, para projetos pessoais ou comerciais.

---

Feito com Next.js, Framer Motion, GSAP e cafe.
