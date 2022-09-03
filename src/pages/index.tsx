import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { HorizontalList } from 'components/data-display/HorizontalList';
import { SimpleCard } from 'components/data-display/SimpleCard';
import { SearchHero } from 'components/surfaces/SearchHero';
import { destinations } from 'data/DummyData/destinations';
import { offers } from 'data/DummyData/offers';
import { propertiesTypes } from 'data/DummyData/propertiesTypes';
import Image from 'next/image';

import type { NextPage } from 'next';
import { Button } from 'components/inputs/Button';
import { MobileAppBanner } from 'partials/home/_MobileAppBanner';

const Home: NextPage = () => {
    return (
        <>
            <SearchHero />
            <main className="mt-12 lg:-mt-48 space-y-12 md:space-y-20">
                <section id="top-destinations" className="lg:text-white">
                    <HorizontalList
                        title="Melhores destinos para as férias"
                        LeftArrow={<ArrowLeftIcon className="h-6 w-6" />}
                        RightArrow={<ArrowRightIcon className="h-6 w-6" />}
                        data={destinations}
                        renderData={destination => (
                            <SimpleCard
                                img={destination.cover}
                                title={`${destination.city}, ${destination.country}`}
                            />
                        )}
                    />
                </section>
                <section id="offers">
                    <HorizontalList
                        title="Ofertas"
                        LeftArrow={<ArrowLeftIcon className="h-6 w-6" />}
                        RightArrow={<ArrowRightIcon className="h-6 w-6" />}
                        data={offers}
                        renderData={offer => (
                            <div className="rounded-2xl shadow-lg px-4 py-6 md:w-[688px] flex flex-col md:flex-row gap-6 items-center">
                                <div className="rounded-3xl overflow-hidden w-64 md:w-80 aspect-video relative shrink-0">
                                    <Image
                                        src={offer.img}
                                        alt={offer.title}
                                        layout="fill"
                                    />
                                </div>
                                <div>
                                    <p className="text-neutral-500 mb-1 text-sm md:text-base">
                                        {offer.category}
                                    </p>
                                    <p className="text-xl md:text-2xl mb-4 font-medium">
                                        {offer.title}
                                    </p>
                                    <p className="text-neutral-500 mb-4">
                                        {offer.description}
                                    </p>

                                    <Button>Reservar</Button>
                                </div>
                            </div>
                        )}
                    />
                </section>
                <section id="properties">
                    <HorizontalList
                        title="Navegue por propriedades"
                        LeftArrow={<ArrowLeftIcon className="h-6 w-6" />}
                        RightArrow={<ArrowRightIcon className="h-6 w-6" />}
                        data={propertiesTypes}
                        renderData={property => (
                            <SimpleCard
                                img={property.cover}
                                title={property.name}
                            />
                        )}
                    />
                </section>
                <section className="container">
                    <div className="bg-[url(../../public/map.jpg)] bg-cover rounded-3xl p-6 md:p-20 bg-opacity-40 hover:bg-opacity-50 bg-black bg-blend-darken text-white">
                        <h6 className="text-3xl md:text-6xl font-bold mb-6">
                            Planeje a sua viagem com um profissional
                        </h6>
                        <p className="text-xl md:text-3xl">
                            Nossos consultores profissionais podem criar seu
                            itinerário perfeito
                        </p>
                    </div>
                </section>
                <MobileAppBanner />
            </main>
            <footer className="h-96 bg-black"></footer>
        </>
    );
};

export default Home;
