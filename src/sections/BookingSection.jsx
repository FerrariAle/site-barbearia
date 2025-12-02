import { services } from '../data/servicesData.jsx';
import { barbers } from '../data/barbersData.js';

export default function BookingSection() {
    // Placeholder para os horários. A lógica virá na Fase 4.
    const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

    return (
        <section id="agendar" className="py-20 sm:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* Cabeçalho da seção */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Agende seu Horário
                    </h2>
                    <p className="mt-6 text-lg text-zinc-600">
                        Garanta seu lugar com antecedência. Rápido, fácil e online.
                    </p>
                </div>

                {/* Container do formulário */}
                <form className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Campo nome */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">Nome Completo</label>
                            <input type="text" id="name" name="name" className="block w-full px-4 py-3 bg-cream rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition" />
                        </div>

                        {/* Campo telefone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">Telefone</label>
                            <input type="tel" id="phone" name="phone" className="block w-full px-4 py-3 bg-cream rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition" />
                        </div>

                        {/* Dropdown de serviços */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-semibold text-zinc-700 mb-2">Serviço</label>
                            <select id="service" name="service" className="block w-full px-4 py-3 bg-cream rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition appearance-none">
                                <option>Selecione um serviço</option>
                                {services.map(s => <option key={s.name} value={s.name}>{s.name} - R$ {s.price}</option>)}
                            </select>
                        </div>

                        {/* Dropdown de barbeiros */}
                        <div>
                            <label htmlFor="barber" className="block text-sm font-semibold text-zinc-700 mb-2">Barbeiro</label>
                            <select id="barber" name="barber" className="block w-full px-4 py-3 bg-cream rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition appearance-none">
                                <option>Selecione um barbeiro</option>
                                {barbers.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                            </select>
                        </div>

                        {/* Seleção de data (placeholder por enquanto) */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-zinc-700 mb-2">Data</label>
                            <input type="date" name="date" className="block w-full px-4 py-3 bg-cream rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition" />
                        </div>

                        {/* Seleção de horários */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-zinc-700 mb-4">Horários Disponíveis</label>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                                {availableTimes.map(time => (
                                    <button
                                        type="button"
                                        key={time}
                                        className="px-4 py-3 bg-cream rounded-lg font-semibold text-zinc-700 border-2 border-transparent hover:border-brown-700 hover:text-brown-700 focus:outline-none focus:bg-brown-700 focus:text-white transition"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Botão de submissão */}
                        <div className="md:col-span-2 text-center mt-6">
                            <button type="submit" className="bg-brown-700 text-white font-bold text-lg px-12 py-4 rounded-full hover:bg-brown-600 transition-colors shadow-lg">
                                Confirmar Agendamento
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}