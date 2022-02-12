/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Html } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { Object3D } from 'three';
import { GLTFLoader } from 'three-stdlib';

// interface group {
//   current: {
//     rotation: {
//       x: number;
//       y: number;
//     };
//   };
// }

// interface actions {
//   current: {
//     idle: {
//       play: () => void;
//     };
//   };
// }

export default function Model() {
  /* Refs */
  //   const group: group = useRef();
  //   const actions: actions = useRef();

  /* State */
  const [model, setModel] = useState();
  //   const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

  /* Mixer */
  //   const [mixer] = useState(() => new THREE.AnimationMixer(null));

  /* Load model */
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('room.gltf', async (gltf) => {
      const nodes = await gltf.parser.getDependencies('node');
      //   const animations = await gltf.parser.getDependencies('animation');
      setModel(nodes[0]);
      //   setAnimation(animations);
    });
  }, []);

  //   /* Set animation */
  //   useEffect(() => {
  //     if (animation && typeof group.current != 'undefined') {
  //       actions.current = {
  //         idle: mixer.clipAction(animation[0], group.current as Object3D),
  //       };
  //       actions.current.idle.play();
  //       return () => animation.forEach((clip) => mixer.uncacheClip(clip));
  //     }
  //   }, [animation, mixer]);

  /* Animation update */
  //   useFrame((_, delta) => mixer.update(delta));
  //   /* Rotation */
  //   useFrame(() => {
  //     if (typeof group.current != 'undefined')
  //       return (group.current.rotation.y += 0.01);
  //   });

  const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

  return (
    <>
      {model ? (
        <group
          // ref={group}
          dispose={null}
        >
          <primitive
            position={[0, 0, 0]}
            rotation={[deg2rad(0), deg2rad(72), deg2rad(0)]}
            // ref={group}
            name="Object_0"
            object={model}
          />
        </group>
      ) : (
        <Html>Loading...</Html>
      )}
    </>
  );
}
