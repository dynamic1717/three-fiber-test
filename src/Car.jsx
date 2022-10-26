import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { applyProps } from '@react-three/fiber'
import React, { useMemo } from 'react'
import carObject from './assets/HenneseyVenomF5.glb'

export default function Car(props) {
  const { scene, materials } = useGLTF(carObject)

  useMemo(() => {
    applyProps(materials.lights, {
      emissiveIntensity: 5,
      toneMapped: false,
    })
    applyProps(materials.r_lights, {
      emissiveIntensity: 5,
      toneMapped: false,
    })
    materials.body = new THREE.MeshPhysicalMaterial({
      roughness: 0.3,
      metalness: 0.05,
      color: '#ccc',
      envMapIntensity: 0.75,
      clearcoatRoughness: 0,
      clearcoat: 1,
    })
  }, [materials])

  console.log(materials)

  return <primitive object={scene} {...props} />
}
