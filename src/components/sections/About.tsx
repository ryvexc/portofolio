import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Aurora from "../reactbits/Particles/Aurora";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function About() {
  return <div className="h-screen relative">
    <div className="container px-4 md:px-6 h-screen flex justify-between section absolute left-1/2 -translate-x-1/2">
      <div className="w-4/8 flex flex-col justify-end">
        <h1 className="">Arif Kurniawan</h1>
        <Badge className="mb-5">Fullstack Web Developer</Badge>
        <p className="opacity-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam in itaque reprehenderit ipsam aperiam, vel maxime? Consectetur non delectus a odio at possimus itaque repudiandae quia velit, ipsam porro voluptates!</p>
        <div className="flex gap-5 mt-3">
          <Image src="/img/laravel.png" height={50} width={50} className="w-12 h-12" alt="..." />
          <Image src="/img/elysia.png" height={50} width={50} className="w-12 h-12" alt="..." />
          <Image src="/img/react.png" height={50} width={50} className="w-12 h-12" alt="..." />
          <Image src="/img/mongo.png" height={50} width={50} className="w-12 h-12" alt="..." />
          <Image src="/svg/next.svg" height={50} width={50} className="w-12 h-12" alt="..." />
        </div>
        <div className="flex gap-5 mt-7">
          <Button onClick={() => (window.open("/pdf/CV.pdf"))}>
            Download CV
          </Button>

          <Button variant={"outline"} onClick={() => (window.open("/pdf/Resume.pdf"))}>Download Resume</Button>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <img src="/img/profile.jpg" alt="" className="w-[500px] rounded-3xl" />
      </div>
    </div>

    <Aurora
      // className="absolute inset-0 pointer-events-auto"
      colorStops={["#1A051F", "#382466", "#390F4D"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />

    {/* <Particles
      className="absolute inset-0 pointer-events-auto -z-20"
      particleColors={['#ffffff', '#ffffff']}
      particleCount={200}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={true}
      alphaParticles={false}
      disableRotation={false}
    ></Particles> */}
  </div>
}