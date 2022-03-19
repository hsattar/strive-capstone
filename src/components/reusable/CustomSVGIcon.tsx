interface IPorops {
    svgClassName?: string
    pathStrokeWidth?: number
    pathD: string
}

export default function SVGIcon({ svgClassName = "h-6 w-6", pathStrokeWidth = 1, pathD }: IPorops) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={svgClassName} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={pathStrokeWidth} d={pathD} />
        </svg>
    )
}