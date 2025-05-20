import { Component, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';

@Component({
  selector: 'app-three-d-animation',
  templateUrl: './three-d-animation.component.html',
  styleUrls: ['./three-d-animation.component.scss'],
  standalone: true,
})
export class ThreeDAnimationComponent implements AfterViewInit {
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private bee!: THREE.Object3D;
  private mixer!: THREE.AnimationMixer;

  private isDragging = false;
  private startX = 0;
  private startY = 0;
  private initialRotation = { x: 0, y: 0 };

  private arrPositionModel = [
    {
      id: 'home',
      position: { x: 10, y: 2, z: 0 },
      rotation: { x: 0, y: -4, z: 0 },
      scale:    { x: 0.009, y: 0.009, z: 0.009 }, // Escala normal
      animation: { duration: 1.5, ease: 'power2.out' }, // Animación personalizada
    },
    {
      id: 'service',
      position: { x: -15, y: 1, z: -4 },
      rotation: { x: 0, y: 0, z: 0 },
      scale:    { x: 0.005, y: 0.005, z: 0.005}, // Escala más grande
      animation: { duration: 2, ease: 'power1.inOut' }, // Animación personalizada
    },
    {
      id: 'team',
      position: { x: 11, y: 2, z: 0 },
      rotation: { x: 0, y: 3, z: 0.5 },
      scale: { x: 0.02, y: 0.02, z: 0.02 }, // Escala más pequeña
      animation: { duration: 1, ease: 'power3.out' }, // Animación personalizada
    },
    {
      id: 'contact',
      position: { x: 0.8, y: -1, z: 0 },
      rotation: { x: 0.3, y: -0.5, z: 0 },
      scale:    { x: 0.009, y: 0.009, z: 0.009 }, // Escala ligeramente más grande
      animation: { duration: 1.8, ease: 'power4.inOut' }, // Animación personalizada
    },
     {
      id: 'footer',
      position: { x: -13, y: -8, z: -4 },
      rotation: { x: 0, y: 0, z: 0 },
      scale:    { x: 0.005, y: 0.005, z: 0.005}, // Escala más grande
      animation: { duration: 2, ease: 'power5.inOut' }, // Animación personalizada
    },
  ];

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.initScene();
    this.loadModel();
    this.addLights();
    this.startRenderingLoop();
    this.setupEventListeners();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 60;

    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const container = this.elementRef.nativeElement.querySelector('#container3D');
    container.appendChild(this.renderer.domElement);
  }

  private loadModel(): void {
    const loader = new GLTFLoader();
    loader.load(
      'assets/models/tank.glb',
      (gltf) => {
        this.bee = gltf.scene;

        // Asegúrate de que los materiales originales se mantengan
        this.bee.traverse((child: any) => {
          if (child.isMesh) {
            child.material = child.material.clone(); // Clona el material para evitar modificaciones globales
            child.material.needsUpdate = true; // Asegúrate de que el material se actualice
          }
        });

        this.scene.add(this.bee);

        // Configura la animación si existe
        this.mixer = new THREE.AnimationMixer(this.bee);
        if (gltf.animations.length > 0) {
          this.mixer.clipAction(gltf.animations[0]).play();
        }

        this.modelMove();
      },
      undefined,
      (error) => {
        console.error('Error al cargar el modelo:', error);
      }
    );
  }

  private addLights(): void {
    // Luz ambiental para iluminar uniformemente el modelo
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Intensidad reducida para no saturar los colores
    this.scene.add(ambientLight);

    // Luz direccional para agregar profundidad
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10); // Posición de la luz
    this.scene.add(directionalLight);
  }

  private startRenderingLoop(): void {
    const animate = () => {
      requestAnimationFrame(animate);
      this.renderer.render(this.scene, this.camera);
      if (this.mixer) this.mixer.update(0.02);
    };
    animate();
  }

  private modelMove(): void {
    const sections = document.querySelectorAll('#home, #service, #team, #contact, #footer');
    let currentSection: string | undefined;

   sections.forEach((section) => {
  const rect = section.getBoundingClientRect();
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

  if (visibleHeight > 50) { // Se considera visible si al menos 50px están en pantalla
    currentSection = section.id;
  }
});


    const positionActive = this.arrPositionModel.find(
      (val) => val.id === currentSection
    );

    if (positionActive && this.bee) {
      gsap.to(this.bee.position, {
        x: positionActive.position.x,
        y: positionActive.position.y,
        z: positionActive.position.z,
        duration: 1.5,
        ease: 'power2.out',
      });
      gsap.to(this.bee.rotation, {
        x: positionActive.rotation.x,
        y: positionActive.rotation.y,
        z: positionActive.rotation.z,
        duration: 1.5,
        ease: 'power2.out',
      });
      gsap.to(this.bee.scale, {
        x: positionActive.scale.x,
        y: positionActive.scale.y,
        z: positionActive.scale.z,
        duration: 1.5,
        ease: 'power2.out',
      });
    }
  }

  private setupEventListeners(): void {
    const container = this.renderer.domElement; // Directly use the WebGLRenderer's DOM element

    container.addEventListener('mousedown', (event: MouseEvent) => {
      if (!this.bee) return;
      this.isDragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.initialRotation.x = this.bee.rotation.x;
      this.initialRotation.y = this.bee.rotation.y;

      container.style.cursor = 'grabbing'; // Change cursor style
    });

    container.addEventListener('mouseup', () => {
      if (!this.bee) return;
      this.isDragging = false;
      container.style.cursor = 'default'; // Reset cursor style
      this.modelMove(); // Restore position and rotation based on the active section
    });

    container.addEventListener('mouseleave', () => {
      if (!this.bee) return;
      this.isDragging = false;
      container.style.cursor = 'default'; // Reset cursor style
      this.modelMove(); // Restore position and rotation based on the active section
    });

    container.addEventListener('mousemove', (event: MouseEvent) => {
      if (!this.isDragging || !this.bee) return;
      const deltaX = event.clientX - this.startX;
      const deltaY = event.clientY - this.startY;

      this.bee.rotation.y = this.initialRotation.y + deltaX * 0.01;
      this.bee.rotation.x = this.initialRotation.x + deltaY * 0.01;
    });

    window.addEventListener('scroll', () => {
      if (this.bee) {
        this.modelMove();
      }
    });

    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }

  ngOnDestroy(): void {
    const container = this.elementRef.nativeElement.querySelector('#container3D');
    if (container) {
      container.removeChild(this.renderer.domElement);
    }
  }}