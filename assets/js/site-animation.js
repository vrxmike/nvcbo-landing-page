document.addEventListener('DOMContentLoaded', function() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        return;
    }

    // Create canvas container
    const container = document.createElement('div');
    container.id = 'canvas-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1';
    container.style.pointerEvents = 'none';
    document.body.prepend(container);

    // Get configuration from body data attributes
    const body = document.body;
    const speedConfig = parseFloat(body.getAttribute('data-animation-speed')) || 0.5;
    const densityConfig = parseFloat(body.getAttribute('data-animation-density')) || 1.0;

    // Three.js Setup
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded.');
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Particle System
    // Adjust density based on screen size, fewer particles on mobile for basic optimization
    // but no hard cutoff/disable logic.
    const isMobile = window.innerWidth < 768;
    const baseParticleCount = isMobile ? 30 : 80;
    const particleCount = Math.floor(baseParticleCount * densityConfig);

    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20; // x
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z

        velocities.push({
            x: (Math.random() - 0.5) * 0.02 * speedConfig,
            y: (Math.random() - 0.5) * 0.02 * speedConfig,
            z: (Math.random() - 0.5) * 0.02 * speedConfig
        });
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0xFF8C00, // NVCBO Orange
        size: 0.15,
        transparent: true,
        opacity: 0.6
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Lines are computationally expensive (O(N^2)).
    // We will use a separate line geometry that we update every frame.
    // To ensure "functioning by default" even on mid-range, we keep particle count reasonable (checked above)
    // and optimize the line drawing.

    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xFF8C00,
        transparent: true,
        opacity: 0.15
    });

    const linesGeometry = new THREE.BufferGeometry();
    const lineSystem = new THREE.LineSegments(linesGeometry, lineMaterial);
    scene.add(lineSystem);

    // Camera position
    camera.position.z = 5;

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        const positions = particleSystem.geometry.attributes.position.array;

        // Update particles
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;

            // Boundary wrap (toroidal)
            if (positions[i * 3] > 10) positions[i * 3] = -10;
            if (positions[i * 3] < -10) positions[i * 3] = 10;
            if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = -10;
            if (positions[i * 3 + 1] < -10) positions[i * 3 + 1] = 10;
            if (positions[i * 3 + 2] > 10) positions[i * 3 + 2] = -10;
            if (positions[i * 3 + 2] < -10) positions[i * 3 + 2] = 10;
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;

        // Update Lines
        // We need to calculate connections every frame.
        const linePositions = [];
        const connectionDistance = 3.5;
        const connectionDistanceSq = connectionDistance * connectionDistance;

        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];

                const distSq = dx*dx + dy*dy + dz*dz;

                if (distSq < connectionDistanceSq) {
                    linePositions.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                }
            }
        }

        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));


        // Rotate system slightly
        particleSystem.rotation.y += 0.001 * speedConfig;
        lineSystem.rotation.y += 0.001 * speedConfig;

        particleSystem.rotation.x += 0.0005 * speedConfig;
        lineSystem.rotation.x += 0.0005 * speedConfig;

        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
