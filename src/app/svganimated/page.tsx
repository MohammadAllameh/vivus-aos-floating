import AnimatedSvg from "@/code/components/animatedSVG";


import SvgItem from '../../../public/icon.svg'

export default function SvgSection() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatedSvg
                    id="svg-1"
                    // svgPath="../../../public/icon.svg"
                    duration={200}
                    className="md:transform md:hover:-rotate-2"
                />
                <AnimatedSvg
                    id="svg-2"
                    // svgPath='../../../public/icon.svg'
                    duration={200}
                    className="md:transform md:hover:rotate-2"
                />
            </div>
        </div>
    );
}