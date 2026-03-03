/* ============================================================
   LIU LI-YANG — Personal Page Scripts
   - Live clock with seconds bar
   - Floating background particles
   - Mouse burst particle effects
   - Parallax on hero card & gradient blob
   - Header scroll effect
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── Clock ── */
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('clock-time').textContent = `${h}:${m}:${s}`;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        document.getElementById('clock-date').textContent =
            `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

        const pct = (now.getSeconds() / 60) * 100;
        document.getElementById('seconds-bar').style.width = pct + '%';
    }
    updateClock();
    setInterval(updateClock, 1000);

    /* ── Background Particles ── */
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let W, H, bgParticles = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', () => { resize(); initBg(); });

    const COLORS = [
        [163, 88, 255],   // purple (accent)
        [6, 182, 212],    // cyan
        [244, 63, 94],    // rose
        [251, 191, 36],   // amber
        [52, 211, 153],   // emerald
    ];

    function initBg() {
        bgParticles = [];
        const count = Math.floor((W * H) / 18000);
        for (let i = 0; i < count; i++) {
            const col = COLORS[Math.floor(Math.random() * COLORS.length)];
            bgParticles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: Math.random() * 1.8 + 0.4,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3,
                col,
                alpha: Math.random() * 0.4 + 0.1,
            });
        }
    }
    initBg();

    /* ── Mouse Burst Particles ── */
    let burstParticles = [];
    let mouseX = -999, mouseY = -999;
    let lastBurstX = -999, lastBurstY = -999;

    function spawnBurst(x, y) {
        const count = 6 + Math.floor(Math.random() * 5);
        for (let i = 0; i < count; i++) {
            const col = COLORS[Math.floor(Math.random() * COLORS.length)];
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.5 + Math.random() * 3.5;
            const len = 4 + Math.random() * 9;
            const thick = 1.2 + Math.random() * 1.8;
            burstParticles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                len, thick, angle, col,
                alpha: 0.75 + Math.random() * 0.25,
                decay: 0.013 + Math.random() * 0.012,
                gravity: 0.04 + Math.random() * 0.04,
            });
        }
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        const dx = mouseX - lastBurstX;
        const dy = mouseY - lastBurstY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 10) {
            spawnBurst(mouseX, mouseY);
            lastBurstX = mouseX;
            lastBurstY = mouseY;
        }
    });

    /* ── Render Loop ── */
    function draw() {
        ctx.clearRect(0, 0, W, H);

        /* Background floating dots */
        for (const p of bgParticles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${p.alpha})`;
            ctx.fill();
            p.x += p.dx; p.y += p.dy;
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
            if (p.y < -10) p.y = H + 10;
            if (p.y > H + 10) p.y = -10;
        }

        /* Mouse burst dashes */
        burstParticles = burstParticles.filter(p => p.alpha > 0.01);
        for (const p of burstParticles) {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, p.len / 2, p.thick / 2, 0, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.col[0]},${p.col[1]},${p.col[2]},${p.alpha})`;
            ctx.fill();
            ctx.restore();

            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.vx *= 0.97;
            p.vy *= 0.97;
            p.alpha -= p.decay;
        }

        requestAnimationFrame(draw);
    }
    draw();

    /* ── Parallax on Mouse Move ── */
    document.addEventListener('mousemove', (e) => {
        const xOffset = (window.innerWidth / 2 - e.clientX) / 50;
        const yOffset = (window.innerHeight / 2 - e.clientY) / 50;

        const heroCard = document.querySelector('.hero-card');
        const blob = document.querySelector('.gradient-blob');

        if (heroCard) {
            heroCard.style.transform = `translateY(0) scale(1) translate(${xOffset}px, ${yOffset}px)`;
        }
        if (blob) {
            blob.style.transform = `translate(calc(-50% + ${-xOffset * 1.5}px), calc(-50% + ${-yOffset * 1.5}px))`;
        }
    });

    /* ── Header Scroll Effect ── */
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

});
