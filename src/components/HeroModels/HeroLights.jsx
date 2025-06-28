import React from "react";
import * as Three from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        angle={0.15}
        penubra={0.2}
        color="white"
        intensity={100}
      />

      <spotLight
        position={[4, 5, 4]}
        angle={0.3}
        penubra={0.5}
        color="#4cc9f0"
        intensity={40}
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={0.4}
        penubra={1}
        color="#9d4edd"
        intensity={60}
      />

      <primitive object={new Three.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI/4, 0]} />

        <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
    </>
  );
};

export default HeroLights;
