import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// Step 1 - Create a scene
const scene = new THREE.Scene();

// Step 2 - Create a camera
const mainCam = new THREE.PerspectiveCamera(50, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000);
mainCam.position.set(6, 8, -7);

// Step 3 - Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Step 4 - Create controls
const controls = new OrbitControls(mainCam, renderer.domElement);

// Step 5 - Create Clock
const clock = new THREE.Clock();

const cubeLoader = new THREE.CubeTextureLoader();
cubeLoader.setPath('images/Cube-Map/');
const cubeTexture = cubeLoader.load([
    'px.png',
    'nx.png',
    'py.png',
    'ny.png',
    'pz.png',
    'nz.png'
]);



/**
 * ---------------------------------------------------------
 * Write code here
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 * ---------------------------------------------------------
 */


// Ground 
const planeGeo = new THREE.PlaneGeometry(20, 20);
const mat1 = new THREE.MeshStandardMaterial({color: 0x727272, side: THREE.DoubleSide});
const ground = new THREE.Mesh(planeGeo, mat1);
ground.rotation.x = -0.5 * Math.PI;
scene.add(ground);


const ambientLight = new THREE.AmbientLight();
ambientLight.intensity = 0.5;
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-2, 10, 0);
scene.add(dirLight);


/**---------------------------------------------------------
 * --------------------------------------------------------- 
 */

const Loader = new GLTFLoader();
Loader.load("armored_robot_soldier/scene.gltf",
    // onLoad callback
        (data) => {
        // do something with robot
        console.log("loaded successfully");
        scene.add(data.scene);
    },
    // onError callback
    (err) => {
        console.log('An error happened');
    }
);


// Render Scene
renderer.render(scene, mainCam);


// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    controls.update();

/**
 * ---------------------------------------------------------
 * Write animation code here
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 * ---------------------------------------------------------
 */
    let v = clock.getElapsedTime();

/**---------------------------------------------------------
 * --------------------------------------------------------- 
 */    
    
    renderer.render(scene, mainCam);
}

animate();