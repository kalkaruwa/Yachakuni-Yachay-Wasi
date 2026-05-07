import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ShieldCheck, 
  Play, 
  Mail, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Youtube,
  MapPin,
  Mountain
} from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        window.open('https://forms.gle/sample-link', '_blank');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-andean-beige text-andean-brown font-serif p-4 md:p-8 selection:bg-andean-gold selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12 px-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-andean-brown rounded-lg flex items-center justify-center">
              <Mountain className="w-6 h-6 text-andean-gold" />
            </div>
            <span className="font-sans font-extrabold text-xl tracking-[0.2em] uppercase">YACHAKUNI</span>
          </div>
          <div className="hidden md:flex gap-8 font-sans text-xs font-bold uppercase tracking-widest opacity-60">
            <a href="#" className="hover:text-andean-gold transition-colors">Filosofía</a>
            <a href="#" className="hover:text-andean-gold transition-colors">Crónicas</a>
            <a href="#" className="hover:text-andean-gold transition-colors">Comunidad</a>
          </div>
        </nav>

        {/* Bento Grid Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Hero Card (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:col-span-8 md:row-span-2 bg-white rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-center relative overflow-hidden group border border-andean-brown/5 shadow-sm"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-andean-gold/10 text-andean-gold rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-andean-gold/20">
                Identidad originaria
              </span>
              <h1 className="text-4xl md:text-7xl font-sans font-black mb-6 leading-[1.1]">
                Yachakuni <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-andean-brown to-andean-gold">
                  Yachay Wasi
                </span>
              </h1>
              <p className="text-xl md:text-2xl italic border-l-4 border-andean-gold pl-6 opacity-80 mb-8 max-w-2xl">
                El sagrado sendero del Qhapaq Ñan - Centro de pensamiento para la proyección de la única filosofía compleja del sur global
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#cta" className="px-8 py-4 bg-andean-brown text-white font-sans font-bold rounded-2xl hover:bg-black transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-andean-brown/10">
                  Iniciar el Viaje <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-andean-gold/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          </motion.div>

          {/* Visual Mountain Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 md:row-span-3 bg-andean-brown rounded-[2.5rem] relative overflow-hidden group shadow-lg"
          >
            <img 
              src="https://images.unsplash.com/photo-1589182337358-2cb63acfa1f5?auto=format&fit=crop&q=80&w=1200" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 transition-transform duration-1000"
              alt="Andes"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-sans font-black text-2xl mb-2">Pachakamaq</p>
              <p className="text-sm opacity-70 italic">Ordenador del tiempo y espacio ¿Porqué Pachakamaq es una visión mono-animista? ¿Porqué es panenteista?</p>
            </div>
            <a href="https://youtu.be/kNiYZZ3vMJU?si=j_ZMLRsKPS5Nz2Sg" target="_blank" rel="noopener noreferrer" className="absolute top-8 right-8">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
            </a>
          </motion.div>

          {/* Feature: Sources */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] p-8 flex items-center gap-6 border border-andean-brown/5 shadow-sm hover:border-andean-gold/30 transition-colors"
          >
            <div className="w-14 h-14 bg-andean-brown/5 rounded-2xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-andean-brown" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg">Información fidedigna</h3>
              <p className="text-sm opacity-60 italic">Directo a fuentes, crónicas originales, explicación detallada</p>
            </div>
          </motion.div>

          {/* Feature: Devotion */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 md:row-span-1 bg-andean-moss/10 rounded-[2.5rem] p-8 flex items-center gap-6 border border-andean-moss/20 shadow-sm hover:bg-andean-moss/20 transition-all font-serif"
          >
            <div className="w-14 h-14 bg-andean-moss rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg text-andean-moss">Dimensiones del Qhapaq Ñan:</h3>
              <p className="text-sm text-andean-moss/70 italic">Religiosa, Filosófica, Histórica, Política, Económica, Academica, Nacional etc.</p>
            </div>
          </motion.div>

          {/* CTA Box (Large) */}
          <motion.div 
            id="cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-2 bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center text-center shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10"></div>
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-sans font-black mb-6">Recupera tu raíz</h2>
              <p className="text-white/60 mb-10 italic">Únete a nuestras clases en vivo y sé parte de la restauración de la conciencia del Pirua.</p>
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      required
                      placeholder="Correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:bg-white/10 outline-none focus:border-andean-gold/50 transition-all font-sans"
                    />
                    <button className="bg-andean-gold text-white px-8 py-4 rounded-2xl font-sans font-bold hover:bg-white hover:text-black transition-all">
                      {isSubmitting ? 'Inscribiendo...' : 'Registrarse'}
                    </button>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/10 border border-white/20 p-8 rounded-3xl">
                    <p className="text-xl font-bold mb-2 text-andean-gold">¡Registro procesado!</p>
                    <p className="text-white/60 text-sm mb-4">La información se enviará a kalkaruwa@gmail.com y yachakuniyachaywasi@gmail.com</p>
                    <p className="text-white/60 text-xs">Redirigiéndote al portal oficial...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Decorative Card */}
          <div className="md:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] p-8 flex flex-col justify-center border border-andean-brown/5 shadow-sm">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-2 h-2 rounded-full bg-andean-gold"></div>)}
            </div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] font-bold opacity-30">Somos una civilización propia</p>
            <p className="text-sm mt-2 opacity-60">Somos una Nación Ancestral con + 5000 años de historia</p>
          </div>

          {/* Social Cards Group */}
          <div className="md:col-span-12 lg:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] p-8 flex items-center justify-between border border-andean-brown/5 shadow-sm">
            <div className="flex gap-4">
              <a href="https://youtu.be/kNiYZZ3vMJU?si=j_ZMLRsKPS5Nz2Sg" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 hover:scale-110 transition-transform cursor-pointer shadow-sm">
                <Youtube className="w-6 h-6 fill-red-600" />
              </a>
              <a href="https://www.instagram.com/kalkaruwa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 hover:scale-110 transition-transform cursor-pointer shadow-sm">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://x.com/kalkaruwa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-sky-600 hover:scale-110 transition-transform cursor-pointer shadow-sm">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] opacity-30">Actualidad Andina</span>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-24 pb-12 px-2 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-andean-brown/5 pt-12">
          <div className="text-center md:text-left">
            <p className="font-sans font-black text-lg tracking-widest uppercase mb-2">Yachakuni</p>
            <p className="text-[10px] opacity-40 uppercase tracking-[0.3em]">Desde el corazón del Qosqo, para el mundo • 2026</p>
          </div>
          <div className="flex items-center gap-4 text-[10px] opacity-50 font-sans tracking-widest uppercase font-bold">
            <MapPin className="w-4 h-4 text-andean-gold" /> Cusco, Pirua
          </div>
        </footer>
      </div>
    </div>
  );
}
