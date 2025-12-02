const StarIcon = ({ isFilled }) => (
    <svg
        className={`w-5 h-5 ${isFilled ? 'text-yellow-400' : 'text-zinc-300'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
)

export default function TestimonialCard({ testimonial }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full">

            {/* Avaliação em estrelas */}
            <div className="flex mb-4">
                {/* Cria um array de 5 posições e renderiza uma estrela para cada */}
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} isFilled={i < testimonial.stars} />
                ))}
            </div>

            {/* Texto do depoimento */}
            <blockquote className="text-zinc-700 italic flex-grow">
                "{testimonial.text}"
            </blockquote>

            {/* Rodapé do card */}
            <footer className="mt-6 pt-6 border-t border-zinc-200">
                <p className="font-bold text-zinc-900">{testimonial.author}</p>
                <p className="text-sm text-zinc-500">{testimonial.date}</p>
            </footer>
        </div>
    )
}