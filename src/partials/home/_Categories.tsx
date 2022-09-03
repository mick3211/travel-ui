import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        name: 'praias',
        icon: '/categoriesIcons/beach.png',
        href: '/',
    },
    {
        name: 'camping',
        icon: '/categoriesIcons/camping.png',
        href: '/',
    },
    {
        name: 'desertos',
        icon: '/categoriesIcons/desert.png',
        href: '/',
    },
    {
        name: 'montanhas',
        icon: '/categoriesIcons/mountain.png',
        href: '/',
    },
    {
        name: 'cidades icônicas ',
        icon: '/categoriesIcons/iconic.png',
        href: '/',
    },
    {
        name: 'casas flutuantes',
        icon: '/categoriesIcons/houseboat.png',
        href: '/',
    },
    {
        name: 'interior',
        icon: '/categoriesIcons/countryside.png',
        href: '/',
    },
    {
        name: 'castelos',
        icon: '/categoriesIcons/castle.png',
        href: '/',
    },
    {
        name: 'ski',
        icon: '/categoriesIcons/ski.png',
        href: '/',
    },
    {
        name: 'tropical',
        icon: '/categoriesIcons/tropical.png',
        href: '/',
    },
];

export const Categories: React.FC = () => {
    return (
        <div>
            <h4 className="text-3xl text-white font-bold mb-10">
                Melhores categorias
            </h4>
            <ul className="grid auto-cols-fr grid-cols-[repeat(auto-fit,_minmax(84px,_1fr))] items-start gap-4 flex-wrap">
                {categories.map(category => (
                    <li
                        key={category.name}
                        className="text-center text-white opacity-50 hover:opacity-100 border-b-2 border-transparent hover:border-white"
                    >
                        <Link href={category.href}>
                            <a className="capitalize pt-2 pb-4 block">
                                <Image
                                    src={category.icon}
                                    alt={category.name}
                                    width={32}
                                    height={32}
                                />
                                <p>{category.name}</p>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
