import Link from "next/link";
import Art from "./art";
import Countdown from "./countdown";
export default function About() {
  return (
    <>
      <div className="container mx-auto border-cover">
        <Countdown />
        <div className="flex flex-col items-center">
          <Link
            href="#"
            className="text-center py-[2px] px-[30px] text bg-[#38ac38] text-black"
          >
            REGISTER NOW
          </Link>
        </div>
        <p className="text underscan">
          AlgoXplore 1.0 is event organized by the []. The event is aimed at
          providing a platform for students to explore the world of algorithms
          and data structures. The event will consist of a series of lectures
          and hands-on sessions on various topics in algorithms and data
          structures. The event will also include a coding competition where
          participants can showcase their skills in competitive programming
          <span className="blinking_underscore"> _</span>
        </p>
        {/* 
          className="mt-5 about_image"
          src="/algoexplore.jpg"
          alt="AlgoXplore"
          width={500}
          height={200}
        /> */}
        <Art tab="ALGXPLR" />
      </div>
    </>
  );
}
