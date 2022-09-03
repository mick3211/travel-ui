import { Button } from 'components/inputs/Button';
import Image from 'next/image';

export const MobileAppBanner: React.FC = () => {
    return (
        <section className="py-14 md:pt-20 md:pb-32 bg-[url(../../public/mountains-bg-3.jpg)] bg-cover text-white overflow-y-hidden">
            <div className="container relative grid grid-cols-1 lg:grid-cols-[263px_1fr_auto] gap-x-20 gap-y-8 items-start">
                <span className="absolute hidden lg:inline">
                    <Image
                        src={'/iPhone-13-Mockup.png'}
                        alt="Aplicativo para IOS"
                        width={263}
                        height={577}
                    />
                </span>
                <div className="lg:col-start-2 lg:col-end-4">
                    <h5 className="text-4xl md:text-5xl font-bold mb-6">
                        Seu aplicativo de viagens
                    </h5>
                    <p className="text-xl md:text-2xl">
                        Reserve voos, hotéis, trens e carros de aluguel em
                        qualquer lugar do mundo em apenas alguns segundos.
                        Receba atualizações de voos em tempo real, informações
                        sobre viagens, ofertas exclusivas e 30% mais Trip Coins
                        apenas no aplicativo!
                    </p>
                </div>
                <div className="lg:col-start-2 self-end">
                    <div className="text-white space-y-4">
                        <p className="text-sm">
                            Insira o seu número para receber o link de download
                            do app
                        </p>
                        <div className="flex backdrop-blur-md bg-white/30 rounded-2xl px-4 py-2 gap-8 items-center">
                            <input
                                type="tel"
                                placeholder="+55 Número de celular"
                                className="w-full bg-transparent placeholder:text-white/50 focus:outline-none rounded-2xl px-2 py-3"
                            />
                            <Button color="light">Enviar</Button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-start-3 flex justify-center  lg:flex-col gap-7">
                    <Image
                        src={'/google-play.png'}
                        alt="Google Play"
                        width={202}
                        height={60}
                    />

                    <Image
                        src={'/app-store.png'}
                        alt="App Store"
                        width={202}
                        height={60}
                    />
                </div>
            </div>
        </section>
    );
};
