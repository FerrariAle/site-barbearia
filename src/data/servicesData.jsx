const ScissorIcon = () => <svg className="w-8 h-8 text-brown-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-4.879-4.879L4 4m10.121 10.121L19 4M4 19l10.121-10.121" /></svg>;
const RazorIcon = () => <svg className="w-8 h-8 text-brown-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>; // Placeholder
const ComboIcon = () => <svg className="w-8 h-8 text-brown-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4m10-4v4m-2-2h4M8 21v-4m-2 2h4m3-12l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>; // Placeholder
const KidsIcon = () => <svg className="w-8 h-8 text-brown-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a1 1 0 00-1.414-1.414L10 14.172l-2.828-2.828a1 1 0 00-1.414 1.414l4.242 4.242a1 1 0 001.414 0l8.485-8.485a1 1 0 00-1.414-1.414L15.172 7z" /></svg>; // Placeholder
export const services = [
    {
        icon: <ScissorIcon />,
        name: "Corte de Cabelo",
        description: "Estilo personalizado para realçar sua aparência.",
        price: "45,00"
    },
    {
        icon: <RazorIcon />,
        name: "Barba Tradicional",
        description: "Modelagem com navalha e toalha quente.",
        price: "35,00"
    },
    {
        icon: <ComboIcon />,
        name: "Combo (Cabelo + Barba)",
        description: "O pacote completo para um visual impecável.",
        price: "70,00"
    },
    {
        icon: <KidsIcon />,
        name: "Corte Infantil",
        description: "Cortes divertidos e estilosos para os pequenos.",
        price: "30,00"
    },
];