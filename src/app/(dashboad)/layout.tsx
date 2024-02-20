import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { ReactNode } from "react";

export default function Dashboadr({ children }: { children: ReactNode }) {
    return (
        <div >
            <main className="p-8 mx-auto w-full max-w-[1600px] min-h-screen">
            <Nav />
                {children}
            </main>
            <Footer />
        </div>
    )
}