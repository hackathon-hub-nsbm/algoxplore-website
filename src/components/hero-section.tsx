import Link from "next/link";
import Art from "./art";
import Countdown from "./countdown";
export default function About() {
  return (
    <div>
      <div className="container mx-auto border-cover">
        <Countdown />
        <div className="flex flex-col items-center">
          <Link
            href="#"
            className="text-center py-[5px] px-[30px] sm:text-xl lg:text-2xl tracking-widest bg-[#38ac38] text-black"
          >
            REGISTER NOW
          </Link>
        </div>
        <p className="text text-lg mx-10 text-justify mt-20 ">
          AlgoXplore 1.0 is event organized by the []. The event is aimed at
          providing a platform for students to explore the world of algorithms
          and data structures. The event will consist of a series of lectures
          and hands-on sessions on various topics in algorithms and data
          structures. The event will also include a coding competition where
          participants can showcase their skills in competitive programming
          <span className="blinking_underscore"> _</span>
        </p>
      </div>
      <div className="mt-10 pt-10">
        <Art tab="ALGXPLR" />
      </div>
    </div>
  );
}
