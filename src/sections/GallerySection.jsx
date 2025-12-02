import { galleryImages } from "../data/galleryData.js";

export default function GallerySection() {
    return (
        <section id='galeria' className="py-20 sm:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">

                {/* Cabeçalho da seção */}
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
                        Nossa Arte
                    </h2>
                    <p className="mt-6 text-lg text-zinc-600">
                        Cada corte é uma obra-prima. Confira um pouco do nosso trabalho e do nosso espaço.
                    </p>
                </div>

                {/* Grid para as imagens da galeria */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group aspect-square overflow-hidden bg-muted rounded-2xl shadow-lg"
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}