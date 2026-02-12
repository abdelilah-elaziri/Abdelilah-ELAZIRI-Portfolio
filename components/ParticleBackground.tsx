
import React, { useRef, useEffect } from 'react';

declare const THREE: any;

const ParticleBackground: React.FC<{ theme: string }> = ({ theme }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        if (typeof THREE === 'undefined' || !mountRef.current) return;

        const mount = mountRef.current;
        let scene: any, camera: any, renderer: any, particles: any;
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        let isInitialized = false;

        const init = () => {
            if (isInitialized) return;
            isInitialized = true;

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 1, 3000);
            camera.position.z = 1000;

            const particlesCount = 3000;
            const positions = new Float32Array(particlesCount * 3);

            for (let i = 0; i < particlesCount; i++) {
                positions[i * 3] = Math.random() * 2000 - 1000;
                positions[i * 3 + 1] = Math.random() * 2000 - 1000;
                positions[i * 3 + 2] = Math.random() * 2000 - 1000;
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const particleColor = theme === 'dark' ? 0xFFD700 : 0x022C43;

            const material = new THREE.PointsMaterial({
                size: 2,
                color: particleColor,
                transparent: true,
                opacity: 0.7,
                blending: THREE.AdditiveBlending
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            mount.appendChild(renderer.domElement);
            
            document.addEventListener('mousemove', onDocumentMouseMove);
            window.addEventListener('resize', onWindowResize);
        };

        const onWindowResize = () => {
            if (!renderer || !camera) return;
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };

        const onDocumentMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        };
        
        const animate = () => {
            animationFrameId.current = requestAnimationFrame(animate);
            render();
        };

        const render = () => {
            if (!camera || !scene || !renderer || !particles) return;
            const time = Date.now() * 0.00005;

            camera.position.x += (mouseX - camera.position.x) * 0.01;
            camera.position.y += (-mouseY - camera.position.y) * 0.01;
            camera.lookAt(scene.position);

            particles.rotation.x = time * 0.2;
            particles.rotation.y = time * 0.5;

            renderer.render(scene, camera);
        };

        init();
        animate();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onDocumentMouseMove);
            if (mount && renderer && renderer.domElement) {
                try {
                     mount.removeChild(renderer.domElement);
                } catch(e) {
                    console.error("Could not remove canvas", e);
                }
            }
            if(scene) {
                scene.remove(particles);
            }
            if(particles) {
                particles.geometry.dispose();
                particles.material.dispose();
            }
            if(renderer) {
                renderer.dispose();
            }
            isInitialized = false;
        };
    }, [theme]);

    return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default ParticleBackground;
