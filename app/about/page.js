import Link from 'next/link';
import { Container } from '@/components/ui';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-white">
        <Container className="max-w-[90rem]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-[#b08543] mb-4">About us</p>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-[0.12em] uppercase leading-none mb-6">Setu Architecture</h1>
            <p className="text-neutral-600 leading-relaxed text-lg">
              SETU ARCHITECTURE was established in 1988. We specialize in structural and earth retaining design for residential, commercial, industrial, and public-related structures, along with MEPF design.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/clients" className="inline-flex items-center bg-[#8b5e1c] text-white px-8 py-3 rounded-full font-bold uppercase tracking-[0.24em] hover:bg-[#6b4512] transition-colors">
                View Our Clients
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
