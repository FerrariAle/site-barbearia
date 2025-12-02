import { useState } from 'react';
import { services } from '../data/servicesData.jsx';
import { barbers } from '../data/barbersData.js';
import Calendar from '../components/Calendar.jsx';

export default function BookingSection() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null); // Estado para o horário selecionado

    // Horários simulados. Na Fase 4, isso será dinâmico.
    const availableTimes = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

    return (
        <section id="agendar" className="py-20 sm:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                {/* Cabeçalho da Seção */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Agende seu Horário
                    </h2>
                    <p className="mt-6 text-lg text-zinc-600">
                        Garanta seu lugar com antecedência. Rápido, fácil e online.
                    </p>
                </div>

                {/* Container do Formulário */}
                <form className="max-w-4xl mx-auto bg-cream/50 p-6 sm:p-8 rounded-2xl shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* --- Lado Esquerdo: Calendário e Horários --- */}
                        <div className="space-y-8">
                            {/* Calendário */}
                            <div>
                                <label className="block text-lg font-bold text-zinc-800 mb-4 text-center">1. Selecione a Data</label>
                                <div className="bg-white rounded-lg p-4 shadow-inner flex justify-center">
                                    <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                                </div>
                            </div>

                            {/* Horários */}
                            <div>
                                <label className="block text-lg font-bold text-zinc-800 mb-4 text-center">2. Selecione o Horário</label>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                    {availableTimes.map(time => (
                                        <button
                                            type="button"
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            // Estilo condicional para o botão selecionado
                                            className={`px-4 py-3 rounded-lg font-semibold border-2 transition ${selectedTime === time
                                                ? 'bg-brown-700 text-white border-brown-700'
                                                : 'bg-white text-zinc-700 border-transparent hover:border-brown-700 hover:text-brown-700'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* --- Lado Direito: Detalhes e Confirmação --- */}
                        <div className="space-y-6 flex flex-col">
                            <h3 className="text-lg font-bold text-zinc-800 text-center">3. Preencha seus Dados</h3>

                            {/* Campo Nome */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">Seu Nome</label>
                                <input type="text" id="name" name="name" placeholder="John Doe" className="block w-full px-4 py-3 bg-white rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition" />
                            </div>

                            {/* Campo Telefone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-zinc-700 mb-2">Seu Telefone</label>
                                <input type="tel" id="phone" name="phone" placeholder="(11) 99999-9999" className="block w-full px-4 py-3 bg-white rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition" />
                            </div>

                            {/* Dropdown de Serviços */}
                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-zinc-700 mb-2">Serviço</label>
                                <select id="service" name="service" className="block w-full px-4 py-3 bg-white rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition appearance-none">
                                    <option>Selecione um serviço</option>
                                    {services.map(s => <option key={s.name} value={s.name}>{s.name} - R$ {s.price}</option>)}
                                </select>
                            </div>

                            {/* Dropdown de Barbeiros */}
                            <div>
                                <label htmlFor="barber" className="block text-sm font-semibold text-zinc-700 mb-2">Barbeiro</label>
                                <select id="barber" name="barber" className="block w-full px-4 py-3 bg-white rounded-lg border-2 border-transparent focus:outline-none focus:border-brown-700 transition appearance-none">
                                    <option>Qualquer um (primeiro disponível)</option>
                                    {barbers.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                </select>
                            </div>

                            {/* Botão de Submissão (alinhado no final) */}
                            <div className="flex-grow flex items-end justify-center pt-6">
                                <button type="submit" className="w-full bg-brown-700 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-brown-600 transition-colors shadow-lg">
                                    Confirmar Agendamento
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}