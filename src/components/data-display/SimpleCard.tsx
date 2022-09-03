import React from 'react';
import Image from 'next/image';

interface SimpleCardProps {
    img: string;
    alt?: string;
    title: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({ img, alt, title }) => {
    return (
        <div className="w-60 h-40 md:w-80 md:h-52 relative rounded-lg overflow-hidden">
            <Image src={img} alt={alt || title} layout="fill" />
            <span className="absolute bottom-0 left-0 right-0 pl-6 py-6 md:text-2xl text-white bg-gradient-to-t from-black/75">
                {title}
            </span>
        </div>
    );
};
