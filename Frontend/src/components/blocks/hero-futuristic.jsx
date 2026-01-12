import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useAspect, useTexture } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three/webgpu";
import { bloom } from "three/examples/jsm/tsl/display/BloomNode.js";

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add,
} from "three/tsl";

const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" };
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" };

extend(THREE);

// ---------------- POST PROCESSING ----------------
const PostProcessing = ({
  strength = 1,
  threshold = 1,
  fullScreenEffect = true,
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode("output");
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.05);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));
    const redOverlay = vec3(1, 0, 0).mul(oneMinus(scanLine)).mul(0.4);

    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, redOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    postProcessing.outputNode = withScanEffect.add(bloomPass);
    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    progressRef.current.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
    render.renderAsync();
  }, 1);

  return null;
};

// ---------------- SCENE ----------------
const WIDTH = 300;
const HEIGHT = 300;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2());
    const uProgress = uniform(0);
    const strength = 0.01;

    const tDepthMap = texture(depthMap);
    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);

    const tiling = vec2(120);
    const tiledUv = mod(tUv.mul(tiling), 2).sub(1);

    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));

    const dist = float(tiledUv.length());
    const dot = smoothstep(0.5, 0.49, dist).mul(brightness);

    const flow = oneMinus(smoothstep(0, 0.02, abs(tDepthMap.sub(uProgress))));

    const mask = dot.mul(flow).mul(vec3(10, 0, 0));
    const final = blendScreen(tMap, mask);

    return {
      material: new THREE.MeshBasicNodeMaterial({
        colorNode: final,
      }),
      uniforms: { uPointer, uProgress },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value =
      Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5;
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  return (
    <mesh scale={[w * 0.3, h * 0.3, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

// ---------------- HTML HERO ----------------
export default function Hero3D() {
  const titleWords = "Bringing Ideas Into Reality".split(" ");
  const subtitle =
    "Providing digital solutions for the next generation of businesses.";

  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, []);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const t = setTimeout(() => {
        setVisibleWords((v) => v + 1);
      }, 600);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setSubtitleVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, [visibleWords]);

  return (
    <div className="relative h-svh overflow-hidden">
      
      {/* TEXT */}
<div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center uppercase px-4">
  <div className="flex flex-wrap font-bold justify-center gap-x-2 gap-y-2">
    {titleWords.map((word, i) => (
      <span
        key={i}
        className={i < visibleWords ? 'fade-in' : ''}
        style={{
          animationDelay: `${i * 0.13 + (delays[i] || 0)}s`,
          opacity: i < visibleWords ? 1 : 0,
          fontSize: window.innerWidth < 640 ? '1.75rem' : // mobile
                    window.innerWidth < 768 ? '2rem' :   // small tablets
                    window.innerWidth < 1024 ? '3.75rem' : '4.5rem', // desktop
          lineHeight: '1.1',
        }}
      >
        {word}
      </span>
    ))}
  </div>

  <p
    className={`mt-3 font-medium font-sans text-white ${
      subtitleVisible ? 'fade-in-subtitle' : ''
    }`}
    style={{
      animationDelay: `${
        titleWords.length * 0.13 + subtitleDelay
      }s`,
      opacity: subtitleVisible ? 1 : 0,
      fontSize: window.innerWidth < 640 ? '0.75rem' :
                window.innerWidth < 768 ? '0.875rem' :
                '1.25rem',
      lineHeight: '1.2',
      maxWidth: '90vw',
      wordWrap: 'break-word',
    }}
  >
    {subtitle}
  </p>
</div>


      {/* CANVAS */}
      <Canvas
        flat
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer(props);
          await renderer.init();
          return renderer;
        }}
      >
        <PostProcessing />
        <Scene />
      </Canvas>
    </div>
  );
}
