import { Dispatch, SetStateAction } from "react";
import SVGIcon from "./SVGIcon";

interface IProps {
    deviceView: string
    setDeviceView: Dispatch<SetStateAction<string>>
}

export default function EditWebsiteTopBar({ deviceView, setDeviceView }: IProps) {
    return (
        <nav className="bg-white px-2 sm:px-4 py-1">
            <div className="flex flex-wrap justify-between items-center mx-auto">
                
                <div className="flex">
                    <div className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 mr-2 text-gray-400" pathD="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        <span className="topbar-tooltip group-hover:scale-100">Undo</span>
                    </div>

                    <div className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 text-gray-400" pathD="M13 7l5 5m0 0l-5 5m5-5H6" />
                        <span className="topbar-tooltip group-hover:scale-100">Redo</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="group relative" onClick={() => setDeviceView('desktop')}>
                        <SVGIcon svgClassName="h-6 w-6 mr-4 cursor-pointer" pathStrokeWidth={deviceView === 'desktop' ? 2 : 1} pathD="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        <span className="topbar-tooltip group-hover:scale-100">Desktop</span>
                    </div>

                    <div className="group relative" onClick={() => setDeviceView('tablet')}>
                        <SVGIcon svgClassName="h-6 w-6 mr-4 cursor-pointer" pathStrokeWidth={deviceView === 'tablet' ? 2 : 1} pathD="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        <span className="topbar-tooltip group-hover:scale-100">Tablet</span>
                    </div>

                    <div className="group relative" onClick={() => setDeviceView('mobile')}>
                        <SVGIcon svgClassName="h-6 w-6 mr-4 cursor-pointer" pathStrokeWidth={deviceView === 'mobile' ? 2 : 1} pathD="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        <span className="topbar-tooltip group-hover:scale-100">Mobile</span>
                    </div>
                </div>

                <div className="flex">
                    <div className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 mr-4 text-gray-400" pathD="M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3" />
                        <span className="topbar-tooltip group-hover:scale-100">Save</span>
                    </div>

                    <div className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 mr-4 text-gray-900 cursor-pointer" pathD="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        <span className="topbar-tooltip group-hover:scale-100">Preview</span>
                    </div>

                    <div className="group relative">
                        <SVGIcon svgClassName="h-6 w-6 text-gray-400" pathD="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        <span className="topbar-tooltip group-hover:scale-100">Publish</span>
                    </div>
                </div>

            </div>
        </nav>
    )
}