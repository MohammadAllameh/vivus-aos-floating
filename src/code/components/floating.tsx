'use client';

import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    shift,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    FloatingPortal,
    arrow,
    type Placement,
} from '@floating-ui/react';
import { useRef, useState, type ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    placement?: Placement;
    className?: string;
}

export default function Tooltip({
    children,
    content,
    placement = 'top',
    className = '',
}: TooltipProps) {
    const [isOpen, setIsOpen] = useState(false);
    const arrowRef = useRef(null);

    const {
        x,
        y,
        strategy,
        refs,
        context,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    } = useFloating({
        placement,
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(8),
            flip(),
            shift(),
            arrow({ element: arrowRef }),
        ],
    });

    const hover = useHover(context, {
        move: false,
        enabled: true,
    });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: 'tooltip' });

    // Merge all the interactions into prop getters
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
        focus,
        dismiss,
        role,
    ]);

    // استایل‌های پایه برای فلش tooltip
    const staticArrowStyle = {
        position: 'absolute',
        width: 8,
        height: 8,
        transform: 'rotate(45deg)',
        backgroundColor: 'black',
    };

    return (
        <>
            <div ref={refs.setReference} {...getReferenceProps()} className={className}>
                {children}
            </div>
            {isOpen && (
                <FloatingPortal>
                    <div
                        ref={refs.setFloating}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                            width: 'max-content',
                            zIndex: 50,
                        }}
                        {...getFloatingProps()}
                    >
                        <div className="bg-black text-white px-3 py-2 rounded-md text-sm">
                            {content}
                            <div
                                ref={arrowRef}
                                style={{
                                    ...staticArrowStyle,
                                    top: arrowY != null ? arrowY : '',
                                    left: arrowX != null ? arrowX : '',
                                    right: '',
                                    bottom: '',
                                    [placement.includes('top') ? 'bottom' : 'top']: -4,
                                    [placement.includes('right') ? 'left' : 'right']: placement.includes('left') ? -4 : '',
                                }}
                            />
                        </div>
                    </div>
                </FloatingPortal>
            )}
        </>
    );
}