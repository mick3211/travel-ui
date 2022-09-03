import { SearchBar } from 'components/inputs/SearchBar';
import { Categories } from 'partials/home/_Categories';

export const SearchHero: React.FC = () => {
    return (
        <section className="bg-[url(../../public/mountains-bg-2.jpg)] bg-cover">
            <div className="min-h-[842px] bg-gradient-to-b from-black/70 to-black/20 flex flex-col justify-between">
                <div className="container mt-20 md:mt-32 space-y-10 md:space-y-12">
                    <h1 className="text-4xl md:text-7xl text-white font-bold">
                        O mundo todo o <br /> aguarda.
                    </h1>
                    <SearchBar />
                    <Categories />
                </div>
                <span className="h-20 w-30 block bg-gradient-to-t from-white" />
            </div>
        </section>
    );
};
