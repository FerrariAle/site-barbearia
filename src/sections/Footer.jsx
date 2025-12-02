export default function Footer() {
    const navLinks = [
        { href: '#servicos', label: 'Serviços' },
        { href: '#agendar', label: 'Agendar' },
        { href: '#galeria', label: 'Galeria' },
        { href: '#depoimentos', label: 'Depoimentos' },
    ];

    const SocialIcons = () => (
        <div className="flex gap-4">
            <a href="#" className="text-brand-white/70 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> {/* Ícone do Instagram */}
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98C23.986 15.667 24 15.26 24 12s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                </svg>
            </a>
            <a href="#" className="text-brand-white/70 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> {/* Ícone do Facebook */}
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            </a>
        </div>
    );

    return (
        <footer className="bg-accent text-white/70">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">

                {/* Grid principal do footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Coluna 1: Logo e redes sociais */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-bold text-white">BarberShop</h3>
                        <p className="mt-4 max-w-xs text-brand-white/80">
                            Onde tradição e estilo se encontram para criar a sua melhor versão.
                        </p>
                        <div className="mt-6">
                            <SocialIcons />
                        </div>
                    </div>

                    {/* Coluna 2: Links rápidos */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider">Navegação</h4>
                        <nav className="mt-4 flex flex-col gap-2">
                            {navLinks.map(link => (
                                <a key={link.label} href={link.href} className="text-white/80 hover:text-white transition-colors">
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Coluna 3: Contato e horários */}
                    <div>
                        <h4 className="font-bold text-white uppercase tracking-wider">Contato</h4>
                        <div className="mt-4 space-y-2 text-brand-white/80">
                            <p>Rua Exemplo, 123</p>
                            <p>Cidade, Estado</p>
                            <p>(11) 99999-9999</p>
                            <p className="pt-4 font-bold text-white">Horários:</p>
                            <p>Ter - Sex: 9h às 20h</p>
                            <p>Sáb: 9h às 18h</p>
                        </div>
                    </div>
                </div>

                {/* Linha divisória e copyright */}
                <div className="mt-16 border-t border-accent-light/20 pt-8 text-center text-sm text-white/60">
                    <p>&copy; {new Date().getFullYear()} BarberShop. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}