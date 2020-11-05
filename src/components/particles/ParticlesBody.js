import particlesImages from "../../constants/particles-images.json";
import Particles from "react-particles-js";

function ParticlesBody() {
  return (
    <Particles
      height="100vh"
      params={{
        retina_detect: false,
        particles: {
          shape: {
            type: "image",
            image: particlesImages,
          },
          size: {
            value: 25,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
      }}
    />
  );
}

export default ParticlesBody;
