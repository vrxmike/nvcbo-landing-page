document.addEventListener('DOMContentLoaded', function() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return;
    }

    // Three.js Setup
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded.');
        return;
    }

    // Find the container. If it doesn't exist (e.g. on old pages not yet updated), try to create one or fallback
    // Variant2 uses #three-container inside .masthead
    let container = document.getElementById('three-container');

    // If not found, and we want it site-wide, let's look for a suitable place or create a fixed one like before
    // But for now, let's stick to the Variant2 logic which puts it in .masthead if present.
    // If we want it on subpages, we should ensure subpages have #three-container
    if (!container) {
        // Fallback: Create a fixed container like in previous version if explicit container is missing
        container = document.createElement('div');
        container.id = 'three-container-fixed';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.zIndex = '0'; // Behind content
        container.style.pointerEvents = 'none';
        container.style.opacity = '0.6';
        document.body.prepend(container);
    }

    let scene, camera, renderer, particles;
    let mouseX = 0, mouseY = 0;

    function initThree() {
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        // Variant2 uses 1200 particles.
        // Optimization: Reduce for mobile
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 400 : 1200;

        for (let i = 0; i < particleCount; i++) {
            vertices.push(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10);
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        const material = new THREE.PointsMaterial({
            color: 0xADD8E6, // Light Blue nodes from Variant2
            size: 0.04,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        window.addEventListener('resize', onWindowResize);
        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 150;
            mouseY = (e.clientY - window.innerHeight / 2) / 150;
        });

        animate();
    }

    function onWindowResize() {
        const width = container.clientWidth || window.innerWidth;
        const height = container.clientHeight || window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.0008;
        particles.rotation.x += 0.0004;
        particles.position.x += (mouseX - particles.position.x) * 0.05;
        particles.position.y += (-mouseY - particles.position.y) * 0.05;
        renderer.render(scene, camera);
    }

    initThree();
});
