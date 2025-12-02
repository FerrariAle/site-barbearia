export default function ServiceCard({ service }) {
    return (
        <div className="bg-background p-8 rounded-2xl shadow-sm text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">

            {/* Ícone */}
            <div className="bg-background-alt p-4 rounded-full mb-6">
                {service.icon}
            </div>

            {/* Nome do serviço */}
            <h3 className="text-xl font-bold text-text-primary mb-2">
                {service.name}
            </h3>

            {/* Descrição */}
            <p className="text-text-secondary mb-6 flex-grow">
                {service.description}
            </p>

            {/* Preço */}
            <p className="text-3xl font-black text-accent">
                R$ {service.price}
            </p>
        </div>
    )
}