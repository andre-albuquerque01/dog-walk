import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ReactNode } from "react";

export default function Dashboadr({ children }: { children: ReactNode }) {
    return (
        <div className="p-8 mx-auto w-full max-w-[1600px] min-h-screen">
            <Nav />
            <main className="flex-grow">
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    )
}