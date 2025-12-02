import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/testimonialsData.js";

export default function TestimonialsSection() {
    return (
        <section id="depoimentos" className="py-20 sm:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">

                {/* Cabeçalho da seção */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        O que Nossos Clientes Dizem
                    </h2>
                    <p className="mt-6 text-lg text-zinc-600">
                        A confiança dos nossos clientes é a nossa maior conquista.
                    </p>
                </div>

                {/* Grid para os cards de depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    )
}