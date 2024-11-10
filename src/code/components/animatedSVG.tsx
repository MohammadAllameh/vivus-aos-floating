'use client';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { VivusOptions } from 'vivus';

const ReactVivus = dynamic(() => import('react-vivus'), {
    ssr: false,
});

interface AnimatedSvgProps {
    id: string;
    duration?: number;
    className?: string;
}

export default function AnimatedSvg({
    id,
    duration = 100,
    className = ''
}: AnimatedSvgProps) {
    const svgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // SVG را در اینجا به صورت داینامیک وارد می‌کنیم
        const importSvg = async () => {
            try {
                const response = await fetch('/icon.svg');
                const svgText = await response.text();

                if (svgRef.current) {
                    svgRef.current.innerHTML = svgText;
                }
            } catch (error) {
                console.error('Error loading SVG:', error);
            }
        };

        importSvg();
    }, []);

    const options: VivusOptions = {
        duration: duration,
        type: 'sync',
        animTimingFunction: 'EASE',
    };

    return (
        <div className={`relative bg-white rounded-xl shadow-lg p-8 ${className}`}>
            <div ref={svgRef} id={id} style={{ width: '100%', height: '100%' }} />
            {svgRef.current && (
                <ReactVivus
                    id={id}
                    option={options}
                    style={{ width: '100%', height: '100%' }}
                    callback={(vivus: unknown) => {
                        // callback اختیاری
                    }}
                />
            )}
        </div>
    );
}