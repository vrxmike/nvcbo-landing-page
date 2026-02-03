document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Theme Colors
    const COLOR_PARTICLE = 0xFF8C00; // --nvcbo-orange
    const COLOR_LINE = 0xFFF5E6;     // --nvcbo-cream (Cream/White)

    // Scene Setup
    const scene = new THREE.Scene();
    // Add subtle fog to blend into background
    // Using a color close to the gradient start (dark blue/teal) for depth
    scene.fog = new THREE.FogExp2(0x155d74, 0.002);

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // --- Create Particles ---
    const geometry = new THREE.BufferGeometry();
    const particleCount = 150; // Moderate count for mobile performance
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    const radius = 200;

    for (let i = 0; i < particleCount; i++) {
        // Random positions inside a sphere
        const r = radius * Math.cbrt(Math.random());
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Random velocities
        velocities.push({
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2,
            z: (Math.random() - 0.5) * 0.2
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Material for Dots
    const material = new THREE.PointsMaterial({
        color: COLOR_PARTICLE,
        size: 3,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- Create Lines (The Constellation Effect) ---
    // We will update line geometry every frame based on distance
    const lineMaterial = new THREE.LineBasicMaterial({
        color: COLOR_LINE,
        transparent: true,
        opacity: 0.15
    });

    const lineGeometry = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        const positions = particles.geometry.attributes.position.array;

        // Update positions
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;

            // Boundary check - bounce back softly
            if (Math.abs(positions[i * 3]) > radius) velocities[i].x *= -1;
            if (Math.abs(positions[i * 3 + 1]) > radius) velocities[i].y *= -1;
            if (Math.abs(positions[i * 3 + 2]) > radius) velocities[i].z *= -1;
        }
        particles.geometry.attributes.position.needsUpdate = true;

        // Update Lines: Connect particles that are close
        connectParticles(positions);

        // Slowly rotate the whole system
        scene.rotation.y += 0.001;
        scene.rotation.x += 0.0005;

        renderer.render(scene, camera);
    }

    function connectParticles(positions) {
        const linePositions = [];
        const connectDistance = 40; // Max distance to draw line

        // Simplified N^2 check (optimized by limiting loop range or count if needed)
        // For 150 particles, 150*150 = 22,500 iterations, which is fine for modern JS
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                const dx = positions[i * 3] - positions[j * 3];
                const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                const distSq = dx*dx + dy*dy + dz*dz;

                if (distSq < connectDistance * connectDistance) {
                    linePositions.push(
                        positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                        positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                    );
                }
            }
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    }

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

    animate();
});
