import { ReactNode } from "react";

export default function Dashboadr({ children }: { children: ReactNode }) {
    return (
        <div className="p-8 w-full max-w-[1600px] min-h-screen">
            {children}
        </div>
    )
}