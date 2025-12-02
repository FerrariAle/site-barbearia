import ServiceCard from "../components/ServiceCard";
import { services } from "../data/servicesData.jsx"

export default function ServicesSection() {
    return (
        <section id="servicos" className="mt-10 py-20 sm:py-32 bg-cream">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* Cabeçalho da Seção */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Nossos Serviços
                    </h2>
                    <p className="mt-6 text-lg text-zinc-600">
                        Oferecemos uma gama de serviços premium para garantir que você saia sempre no seu melhor estilo.
                    </p>
                </div>

                {/* Grid para os cards de serviço */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}