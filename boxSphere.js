import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000);

camera.position.set(0, 0, 10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 12, 5);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(0, 0, 0); 
sphere.scale.set(1, 1);
scene.add(sphere);

const geometry2 = new THREE.BoxGeometry(2, 2, 2);
const box = new THREE.Mesh(geometry2, material);
box.position.set(5, 2, 1); 
box.scale.set(1, 2);
scene.add(box);

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.03;
    box.rotation.y += 0.03;
    renderer.render(scene, camera);
}

animate();