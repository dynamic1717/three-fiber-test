import {
  EffectComposer,
  Bloom,
  Vignette,
  SMAA,
} from '@react-three/postprocessing'
import React from 'react'

export default function Effects() {
  // const props = {
  //   enabled: true,
  //   temporalResolve: true,
  //   STRETCH_MISSED_RAYS: true,
  //   USE_MRT: true,
  //   USE_NORMALMAP: true,
  //   USE_ROUGHNESSMAP: true,
  //   ENABLE_JITTERING: true,
  //   ENABLE_BLUR: true,
  //   DITHERING: false,
  // }
  return (
    <EffectComposer disableNormalPass>
      {/* <SSR /> */}
      <SMAA />
      <Bloom
        luminanceThreshold={0.2}
        mipmapBlur
        luminanceSmoothing={0.5}
        intensity={1.2}
      />
      <Vignette eskil={false} offset={0.05} darkness={1} />
    </EffectComposer>
  )
}
