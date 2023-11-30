/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 walker.glb --transform 
Files: walker.glb [8.38MB] > walker-transformed.glb [795.04KB] (91%)
Author: ARKON-83 (https://sketchfab.com/ARKON-83)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/star-wars-at-sta-a538c99ffe434dbbafb2eda3ed79cee9
Title: -Star Wars- AT-ST/A
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import HolographicMaterial from "./HolographicMaterial";

export default function Walker({ holographicControls }, props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/walker-transformed.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature.001|Walk"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
        castShadow
          name="Object_44"
          geometry={nodes.Object_44.geometry}
          //   material={materials.Bake1}
          skeleton={nodes.Object_44.skeleton}
          position={[0, 8.367, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <HolographicMaterial {...holographicControls} />
        </skinnedMesh>
        <skinnedMesh
        castShadow
          name="Object_46"
          geometry={nodes.Object_46.geometry}
          //   material={materials.Bake2}
          skeleton={nodes.Object_46.skeleton}
          position={[0, 8.367, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <HolographicMaterial {...holographicControls} />
        </skinnedMesh>
        <skinnedMesh
        castShadow
          name="Object_48"
          geometry={nodes.Object_48.geometry}
          //   material={materials.Bake1}
          skeleton={nodes.Object_48.skeleton}
          position={[0, 8.367, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <HolographicMaterial  {...holographicControls} />
        </skinnedMesh>
        <skinnedMesh
        castShadow
          name="Object_50"
          geometry={nodes.Object_50.geometry}
          //   material={materials.Bake4}
          skeleton={nodes.Object_50.skeleton}
          position={[0, 8.367, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <HolographicMaterial {...holographicControls} />
        </skinnedMesh>
        <skinnedMesh
        castShadow
          name="Object_52"
          geometry={nodes.Object_52.geometry}
          //   material={materials.Bake1}
          skeleton={nodes.Object_52.skeleton}
          position={[0, 8.367, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <HolographicMaterial  {...holographicControls} hologramColor={"#00ff00"} />
        </skinnedMesh>
        <skinnedMesh
        castShadow
          name="Object_54"
          geometry={nodes.Object_54.geometry}
          //   material={materials.Bake3}
          skeleton={nodes.Object_54.skeleton}
          position={[0, 8.367, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <HolographicMaterial {...holographicControls} enableBlinking={true}  hologramColor={"#ff0000"} />
        </skinnedMesh>
      </group>
    </group>
  );
}

useGLTF.preload("/walker-transformed.glb");
