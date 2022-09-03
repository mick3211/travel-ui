import React, { useEffect, useRef, useState } from 'react';

interface HorizontalListProps<T> {
    RightArrow?: React.ReactElement;
    LeftArrow?: React.ReactElement;
    title?: string;
    data: T[];
    renderData: (data: T, index: number) => React.ReactNode;
}

type HorizontalListType = <T>(
    props: HorizontalListProps<T>
) => React.ReactElement;

export const HorizontalList: HorizontalListType = ({
    title,
    LeftArrow,
    RightArrow,
    data,
    renderData,
}) => {
    const rowRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (rowRef.current) {
            const scroll = rowRef.current.scrollLeft + window.innerWidth;
            rowRef.current.scrollTo({ left: scroll, behavior: 'smooth' });
        }
    };

    const scrollToLeft = () => {
        if (rowRef.current) {
            const scroll = rowRef.current.scrollLeft - window.innerWidth;
            rowRef.current.scrollTo({ left: scroll, behavior: 'smooth' });
        }
    };

    return (
        <div className="group">
            <div className="container flex justify-between items-center mb-6 md:mb-8">
                <h3 className="md:text-3xl text-2xl font-bold">{title}</h3>
                <span className="hidden md:group-hover:inline">
                    <button
                        type="button"
                        onClick={scrollToLeft}
                        className="p-1 mr-2 hover:bg-neutral-50"
                    >
                        {LeftArrow}
                    </button>
                    <button
                        type="button"
                        onClick={scrollRight}
                        className="p-1 hover:bg-neutral-50"
                    >
                        {RightArrow}
                    </button>
                </span>
            </div>

            <div className="horizontal-list-wrapper" ref={rowRef}>
                <ul className="horizontal-list">
                    {data.map((data, index) => (
                        <li key={index} className="snap-end">
                            {renderData(data, index)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
