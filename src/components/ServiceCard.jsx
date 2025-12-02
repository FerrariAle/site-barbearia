export default function ServiceCard({ service }) {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">

            {/* Ícone */}
            <div className="bg-cream p-4 rounded-full mb-6">
                {service.icon}
            </div>

            {/* Nome do serviço */}
            <h3 className="text-xl font-bold text-zinc-900 mb-2">
                {service.name}
            </h3>

            {/* Descrição */}
            <p className="text-zinc-600 mb-6 flex-grow">
                {service.description}
            </p>

            {/* Preço */}
            <p className="text-3xl font-black text-brown-700">
                R$ {service.price}
            </p>
        </div>
    )
}