(function () {
    const DISCORD_URL = 'https://discord.gg/SMeAMkzmu';
    const app = document.getElementById('app');

    function el(tag, attrs, ...children) {
        const e = document.createElement(tag);
        if (attrs) {
            Object.entries(attrs).forEach(([k, v]) => {
                if (k === 'className') e.className = v;
                else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
                else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
                else e.setAttribute(k, v);
            });
        }
        children.forEach(c => {
            if (typeof c === 'string') e.appendChild(document.createTextNode(c));
            else if (c) e.appendChild(c);
        });
        return e;
    }

    function html(str) {
        const t = document.createElement('template');
        t.innerHTML = str.trim();
        return t.content.firstChild;
    }

    /* ── NAVBAR ── */
    function renderNavbar() {
        const nav = el('nav', { className: 'navbar', id: 'navbar' });
        nav.innerHTML = `
            <div class="navbar-inner container">
                <a href="#" class="navbar-logo">
                    <img src="Imagem cavaleiro/logo-transparente.png" alt="Thinker Chess" class="navbar-logo-img">
                    <span>Thinker Chess</span>
                </a>
                <div class="navbar-links">
                    <a href="#recursos">A transformação</a>
                    <a href="#features">O que muda</a>
                    <a href="#planos">Planos</a>
                    <a href="#sobre">Sobre</a>
                </div>
                <div class="navbar-actions">
                    <a href="${DISCORD_URL}" target="_blank" class="btn-primary">Entrar no Discord <span class="arrow">→</span></a>
                </div>
                <button class="navbar-toggle" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        `;
        app.appendChild(nav);

        const toggle = nav.querySelector('.navbar-toggle');
        const links = nav.querySelector('.navbar-links');
        const actions = nav.querySelector('.navbar-actions');
        toggle.addEventListener('click', () => {
            links.classList.toggle('open');
            actions.classList.toggle('open');
        });

        nav.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                links.classList.remove('open');
                actions.classList.remove('open');
            });
        });
    }

    /* ── HERO ── */
    function renderHero() {
        const section = el('section', { className: 'hero' });
        section.innerHTML = `
            <div class="container hero-inner">
                <div class="hero-content fade-in">
                    <h1 class="hero-headline">
                        <span class="line">Acorde com um <em>rating novo</em></span>
                        <span class="line">todo santo dia</span>
                    </h1>
                    <p class="hero-sub">Operando de forma 100% invisível e segura. Enquanto você dorme, estuda ou vive a sua vida, o Thinker Chess joga por você. Sua conta evolui sozinha — com o timing, o estilo e a precisão de um jogador de elite.</p>
                    <div class="hero-cta">
                        <a href="${DISCORD_URL}" target="_blank" class="btn-primary btn-lg btn-green">
                            Quero meu rating no automático <span class="arrow">→</span>
                        </a>
                        <a href="#como-funciona" class="btn-secondary btn-lg">Ver como funciona</a>
                    </div>
                </div>
                <div class="hero-media fade-in">
                    <img src="Imagem cavaleiro/knight-hero.png" alt="Cavaleiro medieval montado em cavalo com espada erguida" class="hero-img">
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── PROVA SOCIAL ── */
    function renderProvaSocial() {
        const data = [
            { icon: '♟', title: '19 módulos', desc: 'de automação em um só assistente' },
            { icon: '★', title: '100% invisível', desc: 'anti-detecção ativa em toda partida' },
            { icon: '♛', title: '24/7', desc: 'evoluindo enquanto você vive' }
        ];

        const section = el('section', { className: 'section proof', id: 'proof' });
        section.innerHTML = `
            <div class="container">
                <div class="proof-grid">
                    ${data.map(p => `
                        <div class="proof-card fade-in">
                            <span class="proof-icon">${p.icon}</span>
                            <div class="proof-body">
                                <h3>${p.title}</h3>
                                <p>${p.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── RECURSOS (A TRANSFORMAÇÃO) ── */
    function renderRecursos() {
        const data = [
            {
                title: 'Seu tempo, de volta',
                desc: 'As horas que você gastava grindando rating agora são suas. A conta joga, evolui e conquista — enquanto você vive.',
                color: '#f0f8fa'
            },
            {
                title: 'Rating que sobe sozinho',
                desc: 'Acordou? Já subiu. Dormiu? Subiu de novo. Evolução constante, natural e consistente — todo santo dia.',
                color: '#e7eee2'
            },
            {
                title: 'Reputação construída por você',
                desc: 'Pódios, troféus e um histórico que conta a história de um jogador de elite. Sem ninguém desconfiar de nada.',
                color: '#ffede0'
            },
            {
                title: 'O jogo no fundo, a vida na frente',
                desc: 'Você não acompanha partida nenhuma. O Thinker Chess cuida de tudo em segundo plano — e entrega resultado.',
                color: '#f5f3f1'
            }
        ];

        const section = el('section', { className: 'section recursos', id: 'recursos' });
        section.innerHTML = `
            <div class="container">
                <div class="section-header fade-in">
                    <h2 class="section-title">Antes, você grindava. Agora, você evolui.</h2>
                    <p class="section-sub">O xadrez online nunca mais vai tomar seu tempo. Ele vai devolver.</p>
                </div>
                <div class="feature-rows">
                    ${data.map((r, i) => `
                        <div class="feature-row fade-in ${i % 2 ? 'reverse' : ''}">
                            <div class="feature-media" style="background:${r.color}">
                                <div class="video-placeholder">
                                    <div class="video-icon-wrapper">
                                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    </div>
                                    <span class="video-placeholder-text">Video Demo</span>
                                </div>
                            </div>
                            <div class="feature-text">
                                <h3>${r.title}</h3>
                                <p>${r.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── FEATURES (BENEFÍCIOS DE VIDA) ── */
    function renderFeatures() {
        const data = [
            {
                title: 'Jogue sem jogar',
                desc: 'O assistente executa cada lance com precisão de elite e timing natural. Você colhe o resultado — sem mover um dedo.'
            },
            {
                title: 'Conheça antes de jogar',
                desc: 'Cada oponente é mapeado antes do confronto. Aberturas, fraquezas, padrões de erro — a vitória começa antes da partida.'
            },
            {
                title: 'Invisível para qualquer um',
                desc: 'Streams, prints, gravações: nada revela que algo está rodando. Sua conta parece, e é, um jogador de elite real.'
            },
            {
                title: 'Proteção que nunca dorme',
                desc: 'Se algo der errado, a recuperação é automática. Você nunca começa do zero — sua evolução é garantida.'
            },
            {
                title: 'Reputação automática',
                desc: 'Top de rankings de táticas, pódios em torneios, histórico impecável. Sua conta constrói a própria fama.'
            },
            {
                title: 'Controle total, zero esforço',
                desc: 'Ajuste tudo em tempo real por um painel externo — sem nunca tocar na plataforma de jogo.'
            }
        ];

        const section = el('section', { className: 'section features', id: 'features' });
        section.innerHTML = `
            <div class="container">
                <div class="section-header fade-in">
                    <h2 class="section-title">Sua conta vira um ativo que trabalha por você</h2>
                    <p class="section-sub">Enquanto outros grindam horas por dia, você colhe os frutos — sem esforço, sem rastro.</p>
                </div>
                <div class="features-list">
                    ${data.map((f, i) => `
                        <div class="feature-item fade-in">
                            <span class="feature-num">${String(i + 1).padStart(2, '0')}</span>
                            <h3>${f.title}</h3>
                            <p>${f.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

/* ── COMO FUNCIONA ── */
    function renderComoFunciona() {
        const steps = [
            {
                num: '01',
                title: 'Conecte sua conta',
                desc: 'Instale em minutos e conecte a sua conta do Chess.com. Sem configuração complicada.'
            },
            {
                num: '02',
                title: 'Escolha seu ritmo',
                desc: 'Defina o nível que você quer alcançar. O assistente calibra tudo sozinho a partir daí.'
            },
            {
                num: '03',
                title: 'Viva sua vida',
                desc: 'Pronto. Enquanto você faz o que quiser, sua conta joga, evolui e constrói reputação.'
            }
        ];

        const section = el('section', { className: 'section como-funciona', id: 'como-funciona' });
        section.innerHTML = `
            <div class="container">
                <div class="section-header fade-in">
                    <h2 class="section-title">Três passos. Zero esforço.</h2>
                    <p class="section-sub">Do zero ao automático em menos tempo do que você leva pra preparar um café.</p>
                </div>
                <div class="steps-line">
                    ${steps.map((s, i) => `
                        <div class="step-item fade-in">
                            <span class="step-num">${s.num}</span>
                            <h3>${s.title}</h3>
                            <p>${s.desc}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── PLANOS ── */
    function renderPlanos() {
        const plans = [
            {
                name: 'STARTER',
                price: 'R$29',
                period: '/mês',
                yearly: 'R$290/ano',
                features: ['Auto Move', 'Auto Queue', 'Auto Adjust Rating', 'Puzzle Farmer', 'External Config TC', 'Interface Corrigida'],
                popular: false
            },
            {
                name: 'PRO',
                price: 'R$69',
                period: '/mês',
                yearly: 'R$690/ano',
                features: ['Tudo do Starter', 'Opening Book Integration', 'Tournament Grinder', 'Scout do Oponente', 'Radar Bot', 'Mixer Humano', 'Modo Tilt', 'Trava de Winrate', 'Auto-Resign / Abort'],
                popular: true
            },
            {
                name: 'ELITE',
                price: 'R$129',
                period: '/mês',
                yearly: 'R$1.290/ano',
                features: ['Todos os 19 módulos desbloqueados', 'Ghost Mode', 'Protocolo Fênix', 'Account Health Dashboard', 'Network & Fingerprint Spoofing', 'Comeback Mode'],
                popular: false
            }
        ];

        const section = el('section', { className: 'section planos', id: 'planos' });
        section.innerHTML = `
            <div class="container">
                <div class="section-header fade-in">
                    <h2 class="section-title">Escolha o seu nível de domínio</h2>
                    <p class="section-sub">Menos que o preço de uma aula de xadrez — com resultados que nenhum coach pode garantir.</p>
                </div>
                <div class="planos-grid">
                    ${plans.map(p => `
                        <div class="plano-card fade-in ${p.popular ? 'popular' : ''}">
                            ${p.popular ? '<div class="badge">Mais Popular</div>' : ''}
                            <h3 class="plano-name">${p.name}</h3>
                            <div class="plano-price">
                                <span class="price">${p.price}</span><span class="period">${p.period}</span>
                            </div>
                            <p class="plano-yearly">ou ${p.yearly}</p>
                            <ul class="plano-features">
                                ${p.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                            <a href="${DISCORD_URL}" target="_blank" class="btn-primary btn-full">
                                Entrar no Discord <span class="arrow">→</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── SOBRE ── */
    function renderSobre() {
        const section = el('section', { className: 'section sobre', id: 'sobre' });
        section.innerHTML = `
            <div class="container">
                <div class="sobre-content fade-in">
                    <h2 class="section-title">Você não quer jogar mais xadrez. Você quer evoluir nele.</h2>
                    <p>O caminho tradicional exige anos de grind, milhares de partidas e um sacrifício de tempo que a maioria das pessoas não pode pagar. E mesmo assim, sem garantia de resultado.</p>
                    <p>O Thinker Chess nasceu para devolver esse tempo. Acreditamos que a evolução no xadrez deveria ser um ativo — algo que cresce sozinho, em segundo plano, enquanto você vive a vida que importa.</p>
                    <p>Não é sobre automatizar um jogo. É sobre automatizar o seu progresso.</p>
                </div>
                <div class="sobre-cta fade-in">
                    <p>Daqui a um mês, sua conta pode estar em outro patamar. Ou pode continuar onde está.</p>
                    <a href="${DISCORD_URL}" target="_blank" class="btn-primary btn-lg">
                        Começar agora <span class="arrow">→</span>
                    </a>
                </div>
            </div>
        `;
        app.appendChild(section);
    }

    /* ── FOOTER ── */
    const FOOTER_COLUMNS = [
        {
            title: 'Produto',
            links: [
                { label: 'Como funciona', href: '#como-funciona' },
                { label: 'A transformação', href: '#recursos' },
                { label: 'O que muda', href: '#features' },
                { label: 'Planos', href: '#planos' }
            ]
        },
        {
            title: 'Recursos',
            links: [
                { label: 'Prova social', href: '#proof' },
                { label: 'Sobre', href: '#sobre' },
                { label: 'Sistema', href: '#sobre' },
                { label: 'Status', href: '#sobre' }
            ]
        },
        {
            title: 'Empresa',
            links: [
                { label: 'Sobre', href: '#sobre' },
                { label: 'Discord', href: DISCORD_URL, external: true },
                { label: 'Termos', href: '#sobre' }
            ]
        }
    ];

    const FOOTER_SOCIAL = [
        {
            label: 'Discord',
            href: DISCORD_URL,
            icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>'
        },
        {
            label: 'X',
            href: '#',
            icon: '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>'
        },
        {
            label: 'Instagram',
            href: '#',
            icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'
        }
    ];

    function renderFooter() {
        const footer = el('footer', { className: 'footer' });
        footer.innerHTML = `
            <div class="container footer-inner">
                <div class="footer-left">
                    <div class="footer-logo">Thinker Chess</div>
                    <div class="footer-copy">© 2026 Thinker Chess. Todos os direitos reservados.</div>
                </div>
                <div class="footer-right">
                    <a href="#" class="footer-link">Discord</a>
                    <a href="#" class="footer-link">Planos</a>
                    <a href="#" class="footer-link">Changelog</a>
                </div>
            </div>
            <div class="footer-status-wrapper">
                <div class="footer-status-badge">
                    <span class="status-dot"></span>
                    Status: Undetected (v2.4)
                </div>
            </div>
        `;
        app.appendChild(footer);
    }

    /* ── ANIMATIONS ── */
    function setupFadeIn() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }

    /* ── INJECT COMPONENT STYLES ── */
    function injectStyles() {
        const css = `
/* ── NAVBAR ── */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(248, 245, 241, 0.72);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 144px;
    position: relative;
}
.navbar-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 1.15rem;
    color: var(--text);
    flex-shrink: 0;
}
.navbar-logo-img {
    height: 128px;
    width: auto;
    object-fit: contain;
}
.navbar-links {
    display: flex;
    gap: 36px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.navbar-links a {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: color var(--transition);
}
.navbar-links a:hover {
    color: var(--text);
}
.navbar-actions {
    display: flex;
    align-items: center;
    gap: 16px;
}
.navbar-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
}
.navbar-toggle span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text);
    border-radius: 2px;
}

/* ── BUTTONS ── */
.btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--text);
    color: var(--white);
    border-radius: var(--radius);
    font-size: 0.9rem;
    font-weight: 600;
    transition: opacity var(--transition);
}
.btn-primary:hover {
    opacity: 0.85;
}
.btn-primary .arrow {
    transition: transform var(--transition);
}
.btn-primary:hover .arrow {
    transform: translateX(3px);
}
.btn-lg {
    padding: 16px 32px;
    font-size: 1rem;
}
.btn-full {
    width: 100%;
    justify-content: center;
}

/* ── HERO ── */
.hero {
    padding-top: 180px;
    padding-bottom: 80px;
    overflow: hidden;
}
.hero-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.hero-content {
    max-width: 860px;
    margin-bottom: 64px;
}
.hero-headline {
    font-family: var(--font-serif);
    font-size: clamp(3rem, 7vw, 6rem);
    line-height: 1.05;
    font-weight: 700;
    margin-bottom: 48px;
}
.hero-sub {
    max-width: 640px;
    margin: 0 auto 40px;
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--text-secondary);
}
.hero-headline .line {
    display: block;
}
.hero-headline em {
    font-style: italic;
    color: var(--gray);
    font-weight: 400;
}
.hero-illustration {
    width: 100%;
    display: flex;
    justify-content: center;
}
.hero-img {
    width: 100%;
    max-width: 900px;
    height: auto;
    display: block;
}

/* ── SECTIONS ── */
.section {
    padding: 100px 0;
}
.section-header {
    text-align: center;
    margin-bottom: 64px;
}
.section-title {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.2;
}
.section-sub {
    font-size: 1.05rem;
    color: var(--text-secondary);
    max-width: 580px;
    margin: 0 auto;
    line-height: 1.7;
}

/* ── RECURSOS ── */
.recursos-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}
.recurso-card {
    padding: 40px 32px;
    border: 1px solid var(--border);
    border-radius: 12px;
    transition: border-color var(--transition);
}
.recurso-card:hover {
    border-color: var(--text);
}
.recurso-card h3 {
    font-family: var(--font-serif);
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
}
.recurso-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
}

/* ── FEATURES ── */
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
.feature-card {
    padding: 36px 28px;
    border: 1px solid var(--border);
    border-radius: 12px;
    transition: border-color var(--transition);
}
.feature-card:hover {
    border-color: var(--text);
}
.feature-card h3 {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 10px;
}
.feature-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.7;
}

/* ── COMO FUNCIONA ── */
.steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1000px;
    margin: 0 auto;
}
.step-card {
    padding: 40px 32px;
    border: 1px solid var(--border);
    border-radius: 12px;
    text-align: left;
    transition: border-color var(--transition);
    position: relative;
}
.step-card:hover {
    border-color: var(--text);
}
.step-num {
    display: inline-block;
    font-family: var(--font-serif);
    font-size: 2rem;
    font-weight: 700;
    color: var(--gray-light);
    margin-bottom: 16px;
}
.step-card h3 {
    font-family: var(--font-serif);
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
}
.step-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.7;
}

/* ── PLANOS ── */
.planos-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: start;
}
.plano-card {
    padding: 40px 32px;
    border: 1px solid var(--border);
    border-radius: 12px;
    position: relative;
    background: var(--white);
}
.plano-card.popular {
    border-color: var(--text);
    border-width: 2px;
}
.badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--text);
    color: var(--white);
    font-size: 0.75rem;
    font-weight: 600;
    padding: 4px 16px;
    border-radius: 20px;
    white-space: nowrap;
}
.plano-name {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 20px;
    color: var(--text-secondary);
}
.plano-price {
    margin-bottom: 4px;
}
.plano-price .price {
    font-family: var(--font-serif);
    font-size: 2.8rem;
    font-weight: 700;
}
.plano-price .period {
    font-size: 1rem;
    color: var(--text-secondary);
}
.plano-yearly {
    font-size: 0.85rem;
    color: var(--gray);
    margin-bottom: 28px;
}
.plano-features {
    margin-bottom: 32px;
}
.plano-features li {
    padding: 8px 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
}
.plano-features li:last-child {
    border-bottom: none;
}

/* ── SOBRE ── */
.sobre {
    text-align: center;
}
.sobre-content {
    max-width: 720px;
    margin: 0 auto 60px;
}
.sobre-content p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-top: 20px;
}
.sobre-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.sobre-cta p {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 700;
}

/* ── FOOTER ── */
.footer {
    background-color: #000000;
    color: #ffffff;
    padding: 64px 0 48px;
    font-family: var(--font-sans);
}
.footer-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1216px;
    margin: 0 auto;
    padding: 0 48px;
}
.footer-left {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #ffffff;
}
.footer-copy {
    font-size: 0.875rem;
    color: #a1a1aa; /* zinc-400 equivalent */
}
.footer-right {
    display: flex;
    gap: 32px;
}
.footer-link {
    font-size: 0.95rem;
    color: #a1a1aa;
    text-decoration: none;
    transition: color 0.2s ease;
}
.footer-link:hover {
    color: #ffffff;
}
.footer-status-wrapper {
    max-width: 1216px;
    margin: 48px auto 0;
    padding: 0 48px;
    display: flex;
    justify-content: flex-end;
}
.footer-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: 9999px;
    background-color: #18181b; /* bg-zinc-900 */
    border: 1px solid #27272a; /* border-zinc-800 */
    font-size: 0.75rem;
    color: #a1a1aa;
}
.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #22c55e; /* bg-green-500 */
    animation: status-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes status-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: .5; }
}

/* ── RESPONSIVE ── */

/* Large monitors — prevent over-stretching */
@media (min-width: 1536px) {
    .container {
        max-width: 1400px;
    }
    .hero-headline {
        font-size: clamp(4rem, 5vw, 7rem);
    }
    .hero-img {
        max-width: 950px;
    }
}

/* Desktop default — already defined above */

/* Tablets landscape / small laptops */
@media (max-width: 1024px) {
    .container {
        padding: 0 20px;
    }
    .navbar-links {
        gap: 24px;
    }
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .planos-grid {
        gap: 20px;
    }
    .plano-card {
        padding: 32px 24px;
    }
    .section {
        padding: 80px 0;
    }
    .hero {
        padding-top: 150px;
    }
}

/* Tablets portrait */
@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }

    /* Navbar → mobile menu */
    .navbar-links,
    .navbar-actions {
        display: none;
        position: absolute;
        top: 144px;
        left: 0;
        width: 100%;
        background: rgba(248, 245, 241, 0.95);
        -webkit-backdrop-filter: saturate(180%) blur(20px);
        backdrop-filter: saturate(180%) blur(20px);
        flex-direction: column;
        padding: 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        gap: 16px;
        align-items: center;
        transform: none;
    }
    .navbar-links.open,
    .navbar-actions.open {
        display: flex;
    }
    .navbar-toggle {
        display: flex;
    }
    .navbar-links a {
        font-size: 1rem;
        padding: 8px 0;
    }
    .navbar-actions .btn-primary {
        width: 100%;
        justify-content: center;
        padding: 14px 24px;
    }

    /* Hero */
    .hero {
        padding-top: 130px;
        padding-bottom: 48px;
    }
    .hero-content {
        max-width: 100%;
        margin-bottom: 32px;
    }
    .hero-headline {
        font-size: clamp(2.4rem, 9vw, 3.5rem);
        margin-bottom: 28px;
    }
    .hero-sub {
        font-size: 1rem;
        margin-bottom: 32px;
    }
    .hero-img {
        max-width: 100%;
        max-height: 600px;
    }

    /* Sections */
    .section {
        padding: 64px 0;
    }
    .section-header {
        margin-bottom: 48px;
    }
    .section-title {
        font-size: clamp(1.6rem, 5vw, 2.2rem);
    }
    .section-sub {
        font-size: 0.95rem;
    }

    /* Recursos */
    .recursos-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .recurso-card {
        padding: 28px 24px;
    }

    /* Features */
    .features-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .feature-card {
        padding: 28px 24px;
    }

    /* Como Funciona */
    .steps-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }
    .step-card {
        padding: 28px 24px;
    }

    /* Planos */
    .planos-grid {
        grid-template-columns: 1fr;
        max-width: 420px;
        margin: 0 auto;
        gap: 20px;
    }
    .plano-card {
        padding: 36px 28px;
    }

    /* Sobre */
    .sobre-content p {
        font-size: 0.95rem;
    }
    .sobre-cta p {
        font-size: 1.25rem;
    }

    /* Footer */
    .footer-inner {
        padding: 48px 24px 32px;
    }
}

/* Large phones */
@media (max-width: 640px) {
    .container {
        padding: 0 16px;
    }

    /* Navbar */
    .navbar-inner {
        height: 96px;
    }
    .navbar-logo span {
        font-size: 1rem;
    }
    .navbar-logo-img {
        height: 80px;
    }
    .navbar-links,
    .navbar-actions {
        top: 96px;
        padding: 20px 16px;
    }

    /* Hero */
    .hero {
        padding-top: 116px;
        padding-bottom: 36px;
    }
    .hero-headline {
        font-size: clamp(2rem, 8vw, 3rem);
        margin-bottom: 28px;
    }
    .hero-content {
        margin-bottom: 24px;
    }
    .btn-lg {
        padding: 14px 28px;
        font-size: 0.95rem;
    }

    /* Sections */
    .section {
        padding: 52px 0;
    }
    .section-header {
        margin-bottom: 36px;
    }
    .section-title {
        font-size: clamp(1.4rem, 6vw, 1.8rem);
    }
    .section-sub {
        font-size: 0.9rem;
    }

    /* Cards */
    .recurso-card,
    .feature-card {
        padding: 24px 20px;
    }
    .recurso-card h3 {
        font-size: 1.15rem;
    }
    .feature-card h3 {
        font-size: 1.05rem;
    }

    /* Planos */
    .planos-grid {
        max-width: 100%;
    }
    .plano-card {
        padding: 32px 24px;
    }
    .plano-price .price {
        font-size: 2.4rem;
    }

    /* Sobre */
    .sobre-cta p {
        font-size: 1.1rem;
    }

    /* Footer */
    .footer-inner {
        padding: 40px 20px 28px;
    }
    .footer-logo-img {
        height: 36px;
    }
}

/* Small phones */
@media (max-width: 480px) {
    .container {
        padding: 0 14px;
    }

    /* Hero */
    .hero {
        padding-top: 100px;
        padding-bottom: 28px;
    }
    .hero-headline {
        font-size: clamp(1.8rem, 10vw, 2.6rem);
        margin-bottom: 20px;
    }
    .btn-lg {
        padding: 13px 24px;
        font-size: 0.9rem;
        width: 100%;
        justify-content: center;
    }

    /* Sections */
    .section {
        padding: 44px 0;
    }
    .section-header {
        margin-bottom: 28px;
    }
    .section-title {
        font-size: clamp(1.3rem, 6vw, 1.6rem);
    }
    .section-sub {
        font-size: 0.85rem;
        line-height: 1.6;
    }

    /* Cards */
    .recurso-card,
    .feature-card {
        padding: 20px 16px;
    }
    .recurso-card h3,
    .feature-card h3 {
        font-size: 1rem;
        margin-bottom: 8px;
    }
    .recurso-card p,
    .feature-card p {
        font-size: 0.85rem;
    }

    /* Planos */
    .plano-card {
        padding: 28px 20px;
    }
    .plano-name {
        font-size: 0.8rem;
    }
    .plano-price .price {
        font-size: 2.2rem;
    }
    .plano-features li {
        font-size: 0.85rem;
        padding: 6px 0;
    }

    /* Sobre */
    .sobre-content p {
        font-size: 0.9rem;
        line-height: 1.7;
    }
    .sobre-cta p {
        font-size: 1rem;
    }
}

/* Landscape phones */
@media (max-height: 500px) and (orientation: landscape) {
    .hero {
        padding-top: 100px;
        padding-bottom: 24px;
    }
    .hero-headline {
        font-size: 2rem;
        margin-bottom: 12px;
    }
    .hero-content {
        margin-bottom: 16px;
    }
    .hero-img {
        max-height: 40vh;
        object-fit: contain;
        -webkit-mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 90%);
        mask-image: linear-gradient(to bottom, black 0%, black 50%, transparent 90%);
    }
    .section {
        padding: 40px 0;
    }
}

/* ═══════════════════════════════════════════════════
   BRILLIANT-STYLE OVERRIDE
   Layout + tipografia + cores inspirados no Brilliant.org
   ═══════════════════════════════════════════════════ */

/* ── ABACATE-PAY STYLE: painéis com hairline de 1px ── */
#app {
    display: flex;
    flex-direction: column;
    gap: 1px;
    background: #E5E1DB;
}
.hero,
.section {
    border-radius: 12px;
}
.sobre {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
.footer {
    border-radius: 0 !important;
    margin-top: -1px;
}
.proof,
.recursos,
.como-funciona,
.sobre {
    background: #fff;
}
.features,
.planos {
    background: #F5F3F1;
}

/* ── CONTAINER ── */
.container {
    max-width: 1216px;
    margin: 0 auto;
    padding: 0 32px;
}

/* ── NAVBAR: pill flutuante ── */
.navbar {
    position: fixed;
    top: 16px;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 20px;
    z-index: 1100;
    background: transparent;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    border-bottom: none;
}
.navbar-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    max-width: 900px;
    height: auto;
    padding: 8px 8px 8px 24px;
    background: #fff;
    border: 1px solid #E4E4E4;
    border-radius: 9999px;
    box-shadow: none;
    position: relative;
}
.navbar-logo {
    gap: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
}
.navbar-logo-img {
    height: 40px;
    width: auto;
}
.navbar-links {
    display: flex;
    gap: 28px;
    position: static;
    transform: none;
}
.navbar-links a {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    transition: color 200ms ease-out;
}
.navbar-links a:hover {
    color: #000;
}
.navbar-actions {
    gap: 12px;
}
.navbar-actions .btn-primary {
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 9999px;
    background: #000;
}
.navbar-actions .btn-primary .arrow {
    display: none;
}
.navbar-actions .btn-primary:hover {
    opacity: 0.78;
}

/* ── BUTTONS ── */
.btn-primary {
    background: #000;
    color: #fff;
    border-radius: 9999px;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 500;
    transition: opacity 200ms ease-out, background-color 200ms ease-out;
}
.btn-primary:hover {
    opacity: 0.78;
}
.btn-green {
    background: #4ADE80;
    color: #fff;
    font-weight: 700;
}
.btn-green:hover {
    background: #22C55E;
    opacity: 1;
}
.btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 28px;
    background: #fff;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 9999px;
    font-size: 1rem;
    font-weight: 500;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05);
    transition: background-color 200ms ease-out, color 200ms ease-out;
}
.btn-secondary:hover {
    background: #DCDAD8;
    color: rgba(0, 0, 0, 0.7);
}
.btn-lg {
    min-height: 56px;
}

/* ── HERO: editorial + card de mídia + padrão diagonal ── */
.hero {
    background: linear-gradient(to bottom, #F5F3F1 0%, #F5F3F1 55%, #FFFFFF 100%);
    padding-top: 200px;
    padding-bottom: 120px;
    overflow: hidden;
    position: relative;
}
.hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48%;
    background-image:
        linear-gradient(30deg, transparent 48.75%, rgba(212, 200, 190, 0.85) 49.5%, rgba(212, 200, 190, 0.85) 50.5%, transparent 51.25%),
        linear-gradient(150deg, transparent 48.75%, rgba(212, 200, 190, 0.85) 49.5%, rgba(212, 200, 190, 0.85) 50.5%, transparent 51.25%);
    background-size: 72px 42px;
    background-repeat: repeat;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 60%, transparent 100%);
    mask-image: linear-gradient(to bottom, transparent 0%, #000 22%, #000 60%, transparent 100%);
    pointer-events: none;
}
.hero-inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
    position: relative;
    z-index: 1;
}
@media (min-width: 1024px) {
    .hero-inner {
        grid-template-columns: 0.9fr 1.1fr;
        align-items: end;
    }
    .hero-content {
        max-width: 640px;
        text-align: left;
        margin-bottom: 0;
    }
    .hero-sub {
        margin: 0 0 40px;
    }
    .hero-cta {
        justify-content: flex-start;
    }
}
.hero-content {
    max-width: 860px;
    margin-bottom: 0;
}
.hero-headline {
    font-family: var(--font-sans);
    font-size: clamp(2.8rem, 5.5vw, 4.8rem);
    line-height: 1.02;
    font-weight: 500;
    letter-spacing: -0.04em;
    margin-bottom: 32px;
}
.hero-headline em {
    font-style: normal;
    color: rgba(0, 0, 0, 0.35);
    font-weight: 500;
}
.hero-sub {
    font-size: 1.15rem;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 40px;
}
.hero-cta {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
}
.hero-media {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    position: relative;
    overflow: visible;
}
.hero-img {
    width: 100%;
    max-width: 780px;
    height: auto;
    display: block;
    object-fit: contain;
    object-position: center bottom;
    -webkit-mask-image: linear-gradient(to bottom, black 0%, black 60%, transparent 95%);
    mask-image: linear-gradient(to bottom, black 0%, black 60%, transparent 95%);
}
.video-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: rgba(0,0,0,0.4);
    border: 2px dashed rgba(0,0,0,0.15);
    border-radius: 20px;
}
.hero-media .video-placeholder {
    max-width: 560px;
    aspect-ratio: 16 / 9;
    background: rgba(0,0,0,0.03);
    border-radius: 16px;
}
.video-icon-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1A1A2E;
}
.video-placeholder-text {
    font-size: 0.9rem;
    font-weight: 500;
}

/* ── PROVA SOCIAL ── */
.proof {
    background: #fff;
    padding: 72px 0;
}
.proof-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
}
.proof-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 24px 28px;
    border: 1px solid #E4E4E4;
    border-radius: 44px;
    text-align: left;
}
.proof-icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #E6F9DA;
    border-radius: 9999px;
    font-size: 1rem;
    color: #204749;
}
.proof-body h3 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 2px;
}
.proof-body p {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.5;
}

/* ── SECTIONS ── */
.section {
    padding: 110px 0;
}
.section-header {
    margin-bottom: 64px;
}
.section-title {
    font-family: var(--font-sans);
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 16px;
}
.section-sub {
    font-size: 1.1rem;
    color: rgba(0, 0, 0, 0.6);
    max-width: 560px;
    line-height: 1.6;
}

/* ── RECURSOS: feature rows alternados ── */
.recursos {
    background: #fff;
}
.feature-rows {
    display: flex;
    flex-direction: column;
    gap: 96px;
    max-width: 1110px;
    margin: 0 auto;
}
.feature-row {
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items: center;
}
.feature-media {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 460 / 321;
    display: flex;
    align-items: center;
    justify-content: center;
}

.feature-text {
    max-width: 443px;
    text-align: center;
}
.feature-text h3 {
    font-family: var(--font-sans);
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 14px;
}
.feature-text p {
    font-size: 1.05rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.7;
}
@media (min-width: 1024px) {
    .feature-row {
        flex-direction: row;
        gap: 64px;
    }
    .feature-row.reverse {
        flex-direction: row-reverse;
    }
    .feature-media {
        flex: 1.1;
    }
    .feature-text {
        flex: 1;
        text-align: left;
    }
}

/* ── FEATURES: lista editorial ── */
.features {
    background: #F5F3F1;
}
.features-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 64px;
    max-width: 960px;
    margin: 0 auto;
}
.feature-item {
    padding: 40px 0;
    border-bottom: 1px solid #E4E4E4;
}
.feature-item:nth-child(odd) {
    border-right: 1px solid #E4E4E4;
    padding-right: 64px;
}
.feature-item:nth-child(even) {
    padding-left: 64px;
}
.feature-num {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.25);
    margin-bottom: 12px;
    letter-spacing: 0.08em;
}
.feature-item h3 {
    font-family: var(--font-sans);
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
}
.feature-item p {
    font-size: 0.95rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.7;
}

/* ── COMO FUNCIONA: steps tipográficos ── */
.como-funciona {
    background: #fff;
}
.steps-line {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 1100px;
    margin: 0 auto;
}
.step-item {
    border-top: 2px solid #E4E4E4;
    padding-top: 28px;
}
.step-num {
    display: block;
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.25);
    letter-spacing: 0.08em;
    margin-bottom: 14px;
}
.step-item h3 {
    font-family: var(--font-sans);
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 10px;
}
.step-item p {
    font-size: 0.95rem;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.7;
}

/* ── PLANOS ── */
.planos {
    background: #F5F3F1;
}
.planos-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: stretch;
    max-width: 1110px;
    margin: 0 auto;
}
.plano-card {
    padding: 40px 32px;
    border: 1px solid #E4E4E4;
    border-radius: 32px;
    background: #fff;
}
.plano-card.popular {
    border: 1px solid #000;
    border-radius: 32px;
    background: #fff;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}
.plano-card.popular .btn-primary {
    background: #29CC57;
}
.badge {
    background: #000;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 5px 16px;
    border-radius: 9999px;
    white-space: nowrap;
}
.plano-price .price {
    font-family: var(--font-sans);
    font-size: 2.8rem;
    font-weight: 500;
    letter-spacing: -0.03em;
}

/* ── SOBRE ── */
.sobre {
    background: #fff;
}
.sobre-cta p {
    font-family: var(--font-sans);
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: -0.02em;
}




/* ── FADE-IN (scroll reveal 1.5s, como o Brilliant) ── */
.fade-in {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ── RESPONSIVE OVERRIDES ── */
@media (max-width: 1024px) {
    .proof-grid {
        gap: 16px;
    }
    .features-list {
        gap: 0 40px;
    }
    .feature-item:nth-child(odd) {
        padding-right: 40px;
    }
    .feature-item:nth-child(even) {
        padding-left: 40px;
    }
    .steps-line {
        gap: 28px;
    }
}

@media (max-width: 768px) {
    .navbar-inner {
        max-width: 100%;
        padding: 8px 8px 8px 20px;
    }
    .navbar-logo-img {
        height: 36px;
    }
    .navbar-links,
    .navbar-actions {
        display: none;
        position: absolute;
        top: 64px;
        left: 0;
        width: 100%;
        background: #fff;
        border: 1px solid #E4E4E4;
        border-radius: 24px;
        flex-direction: column;
        padding: 20px;
        border-bottom: 1px solid #E4E4E4;
        gap: 14px;
        align-items: center;
        transform: none;
    }
    .navbar-links.open,
    .navbar-actions.open {
        display: flex;
    }
    .navbar-toggle {
        display: flex;
    }
    .navbar-links a {
        font-size: 1rem;
        padding: 8px 0;
    }
    .navbar-actions .btn-primary {
        width: 100%;
        justify-content: center;
        padding: 14px 24px;
    }
    .hero {
        padding-top: 150px;
        padding-bottom: 80px;
    }
    .proof-grid {
        grid-template-columns: 1fr;
        max-width: 440px;
    }
    .proof-card {
        flex-direction: row;
        align-items: center;
        text-align: left;
        gap: 16px;
        padding: 24px 28px;
    }
    .features-list {
        grid-template-columns: 1fr;
        gap: 0;
    }
    .feature-item:nth-child(odd) {
        border-right: none;
        padding-right: 0;
    }
    .feature-item:nth-child(even) {
        padding-left: 0;
    }
    .steps-line {
        grid-template-columns: 1fr;
        max-width: 440px;
        margin: 0 auto;
    }
    .planos-grid {
        grid-template-columns: 1fr;
        max-width: 440px;
        margin: 0 auto;
        gap: 24px;
    }
    .section {
        padding: 80px 0;
    }
}

@media (max-width: 640px) {
    .navbar-inner {
        padding: 6px 6px 6px 16px;
    }
    .navbar-logo-img {
        height: 32px;
    }
    .navbar-logo span {
        font-size: 0.9rem;
    }
    .hero {
        padding-top: 120px;
        padding-bottom: 64px;
    }
    .hero-headline {
        font-size: clamp(2.2rem, 9vw, 3rem);
        letter-spacing: -0.03em;
    }
    .hero-sub {
        font-size: 1rem;
    }
    .hero-img {
        max-width: 380px;
        margin: 0 auto;
    }
    .media-card {
        border-radius: 24px;
    }
    .section-title {
        font-size: clamp(1.6rem, 6vw, 2.2rem);
    }
    .section-sub {
        font-size: 0.95rem;
    }
    .feature-rows {
        gap: 64px;
    }
    .feature-media {
        aspect-ratio: 4 / 3;
    }
    .btn-lg {
        width: 100%;
        justify-content: center;
    }
    .hero-cta {
        flex-direction: column;
        width: 100%;
    }
    .hero-cta .btn-lg {
        width: 100%;
    }
    .section {
        padding: 64px 0;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 20px;
    }
    .hero {
        padding-top: 104px;
    }
    .hero-headline {
        font-size: clamp(1.9rem, 10vw, 2.4rem);
    }
    .hero-img {
        max-width: 300px;
    }
    .proof-card {
        padding: 20px 24px;
    }
    .section {
        padding: 52px 0;
    }
}

/* ── SOBRE ── */
.sobre {
    background: #fff;
    text-align: center;
}
.sobre-content {
    max-width: 720px;
    margin: 0 auto 60px;
}
.sobre-content p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-top: 20px;
}
.sobre-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}
.sobre-cta p {
    font-family: var(--font-sans);
    font-size: 1.5rem;
    font-weight: 700;
}

/* ── FOOTER RESPONSIVE ── */
@media (max-width: 768px) {
    .footer-inner {
        flex-direction: column;
        gap: 32px;
        padding: 0 24px;
    }
    .footer-right {
        flex-wrap: wrap;
        gap: 20px;
    }
    .footer-status-wrapper {
        padding: 0 24px;
        justify-content: flex-start;
    }
}
@media (max-width: 480px) {
    .footer-inner {
        padding: 0 20px;
    }
    .footer-status-wrapper {
        padding: 0 20px;
    }
}`;
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    /* ── INIT ── */
    function init() {
        injectStyles();
        renderNavbar();
        renderHero();
        renderProvaSocial();
        renderRecursos();
        renderFeatures();
        renderComoFunciona();
        renderPlanos();
        renderSobre();
        renderFooter();
        setupFadeIn();
    }

    init();
})();
