export default function Header({ isMenuOpen, setIsMenuOpen }) {
    const navLinks = [
        { href: '#servicos', label: 'Serviços' },
        { href: '#agendar', label: 'Agendar' },
        { href: '#galeria', label: 'Galeria' },
        { href: '#depoimentos', label: 'Depoimentos' },
    ]

    return (
        // Container principal
        <header className="fixed top-0 left-0 w-full z-50 bg-white/50 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo/nome */}
                    <a href="#inicio" className="text-2xl font-bold text-accent">
                        BarberShop
                    </a>

                    {/* Links para navegação para desktop (md e acima) */}
                    <nav className="hidden md:flex gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Botão de agendamento para desktop */}
                    <a href="#agendar" className="hidden md:inline-block bg-accent text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-accent-dark transition-colors">
                        Agendar
                    </a>

                    {/* Botão hambúrguer para mobile (visivel apenas abaixo de md) */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu dropdown para mobile */}
            {isMenuOpen && (
                <nav className="md:hidden flex flex-col items-center gap-6 py-8 bg-white/50 dark:bg-zinc-900 backdrop-blur-none border-b border-zinc-200 dark:border-zinc-700">
                    {navLinks.map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-semibold text-zinc-700 hover:text-brown-700"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}