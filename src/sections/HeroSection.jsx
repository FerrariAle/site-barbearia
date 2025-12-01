import heroImage from '../assets/hero.jpg'

const UsersIcon = () => <svg className="w-6 h-6 text-brown-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const StarIcon = () => <svg className="w-6 h-6 text-brown-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;

export default function HeroSection() {
    return (
        <section id='inicio' className='pt-24 md:pt-32'>
            <div className='container mx-auto px-4 sm:px-6 md:px-8'>

                {/* Grid principal de duas colunas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Coluna da Esquerda */}
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 tracking-tighter">
                            Estilo & Tradição em Cada Corte
                        </h1>
                        <p className="mt-6 text-lg text-zinc-600 max-w-lg mx-auto md:mx-0">
                            Uma experiência autêntica onde a arte da barbearia clássica encontra as tendências modernas. Nossa paixão é a sua confiança.
                        </p>

                        {/* Botões de ação */}
                        <div className="mt-8 flex justify-center md:justify-start gap-4">
                            <a href="#agendar" className='bg-brown-700 text-white font-bold px-8 py-3 rounded-full hover:bg-zinc-300 transition-colors'>
                                Agendar
                            </a>
                            <a href="#servicos" className='bg-zinc-200 text-zinc-800 font-bold px-8 py-3 rounded-full hover:bg-zinc-300 transition-colors'>
                                Serviços
                            </a>
                        </div>

                        {/* Indicadores sociais */}
                        <div className="mt-12 flex justify-center md:justify-start gap-8">
                            <div className="flex items-center gap-3">
                                <UsersIcon />
                                <div>
                                    <p className="font-bold text-2xl text-zinc-900">500+</p>
                                    <p className='text-sm text-zinc-500'>Clientes Satisfeitos</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <StarIcon />
                                <div>
                                    <p className="font-bold text-2xl text-zinc-900">5+</p>
                                    <p className="text-sm text-zinc-500">Anos de Experiência</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna da direita */}
                    <div className="flex justify-center">
                        <img src={heroImage} alt="Barbeiro realizando um corte de cabelo" className='rounded-2xl shadow-lg w-full max-w-sm md:max-w-md' />
                    </div>
                </div>
            </div>
        </section>
    )
}