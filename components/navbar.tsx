import Link from "next/link";

export default function Navbar() {

    return (
        <div className="fixed z-10 header">
            <div className="flex justify-between items-center">
                <p className="relative font-bold text-lg pointer-events-none lg:text-xl glitch" data-text="AlgoXplore 1.0">AlgoXplore 1.0</p>
                <div className="flex flex-col text-sm lg:flex-row lg:gap-3">
                    <Link href="/">
                        <p className="hover:after:content-['↗'] hover:after:ml-1 pointer-events-auto">LinkedIn</p>
                    </Link>
                    <Link href="/">
                        <p className="hover:after:content-['↗'] hover:after:ml-1">Instagram</p>
                    </Link>
                    <Link href="/">
                        <p className="hover:after:content-['↗'] hover:after:ml-1">Facebook</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}