import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import BookingSection from './sections/BookingSection';
import GallerySection from './sections/GallerySection';
import TestimonialsSection from './sections/TestimonialSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className='bg-white text-zinc-800'>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BookingSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div >
  )
}

export default App
