import logo from "../assets/logo (1).png"
import profile from "../assets/profile.png"
import { ChevronFirst, ChevronLast } from "lucide-react";
import { MoreVertical } from "lucide-react";
import { useState, createContext,useContext } from "react"

const SidebarContext = createContext();


export default function Sidebar({ children }) {

    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <aside className="h-screen ">
                <nav className=" h-full flex flex-col bg-white boreder-r shadow-sm">
                    <div className=" p-4 pb-2 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />
                        <button onClick={() => setExpanded((curr) => !curr)} className=" p01.5 rounded-lg bg-gray-50 hover:bg-green-400" >
                            {expanded ? <ChevronFirst /> : <ChevronLast />}

                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>

                    <div className=" border-t fle p-3">
                        <img src={profile} alt="profile pic" className="w-16 h-16 rounded-md" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className=" font-bold"> Martin Sharma </h4>
                                <span className=" text-xs text-gray-600 font-semibold" >martinsharma@gmail.com </span>
                            </div>
                            <MoreVertical size={20} />

                        </div>


                    </div>

                </nav>

            </aside>
        </>
    )
}

export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (


        <li className={` relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}>

                </div>
            )}

        </li>
    )
}