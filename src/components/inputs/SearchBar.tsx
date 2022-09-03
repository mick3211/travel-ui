import {
    MagnifyingGlassIcon,
    CalendarDaysIcon,
    UsersIcon,
} from '@heroicons/react/20/solid';
import { Button } from './Button';

export const SearchBar: React.FC = () => {
    return (
        <>
            <div className="hidden lg:flex backdrop-blur-md bg-white/30 rounded-2xl text-white px-4 py-3 gap-8 items-center">
                <label className="pl-2 flex gap-2 items-center flex-1">
                    <MagnifyingGlassIcon className="h-5 w-5" />
                    <input
                        type="text"
                        autoFocus
                        placeholder="Pesquise destinos, hotéis..."
                        className="w-full bg-transparent py-3 rounded-2xl placeholder:text-white/50 focus:outline-none"
                    />
                </label>
                <label>
                    <span className="label-button">
                        <CalendarDaysIcon className="h-5 w-5" />
                        Check in
                    </span>
                </label>
                <label>
                    <span className="label-button">
                        <CalendarDaysIcon className="h-5 w-5" />
                        Check out
                    </span>
                </label>
                <label>
                    <span className="label-button">
                        <UsersIcon className="h-5 w-5" />1 quarto, 2 adultos
                    </span>
                </label>
                <Button color="light" title="Pesquisar">
                    Pesquisar
                </Button>
            </div>

            <div className="lg:hidden flex flex-col gap-4 text-white ">
                <input
                    type="text"
                    placeholder="Pesquise destinos, hotéis..."
                    className="py-3 rounded-4xl focus:outline-none bg-white/30 backdrop-blur-md placeholder:text-white/50 text-center placeholder:after:content-['sadsad']"
                />
                <div className="bg-white/30 backdrop-blur-md rounded-4xl flex items-center">
                    <label className="label-button py-3 rounded-l-4xl text-center  flex-1">
                        <CalendarDaysIcon className="h-5 w-5" />
                        Check in
                    </label>
                    <span className="h-3 w-px bg-white" />
                    <label className="label-button py-3 rounded-r-4xl text-center flex-1">
                        <CalendarDaysIcon className="h-5 w-5" />
                        Check out
                    </label>
                </div>
                <label className="label-button py-3 rounded-4xl text-center flex-1 bg-white/30 backdrop-blur-md">
                    <UsersIcon className="h-5 w-5" />1 quarto, 2 adultos
                </label>
                <Button color="primary" title="Pesquisar">
                    Pesquisar
                </Button>
            </div>
        </>
    );
};
