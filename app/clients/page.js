import Link from 'next/link';
import { Container } from '@/components/ui';

const CLIENTS = [
  { name: 'Aastha', initials: 'AA', logoBg: 'bg-[#f7e8cf] text-[#8b5e1c]' },
  { name: 'Addor', initials: 'AD', logoBg: 'bg-[#f4d6c0] text-[#6c2d1f]' },
  { name: 'Amiraj', initials: 'AM', logoBg: 'bg-[#f4e6c7] text-[#8b5e1c]' },
  { name: 'Amar', initials: 'AM', logoBg: 'bg-[#f4e6c7] text-[#8b5e1c]' },
  { name: 'Anikedhya', initials: 'AN', logoBg: 'bg-[#e6d5b9] text-[#7f5622]' },
  { name: 'Archi', initials: 'AR', logoBg: 'bg-[#f0d8d0] text-[#7c2c3f]' },
  { name: 'Arvind', initials: 'AR', logoBg: 'bg-[#e8e2d9] text-[#484848]' },
  { name: 'Atishay', initials: 'AT', logoBg: 'bg-[#efe0be] text-[#8b5e1c]' },
  { name: 'Avirat', initials: 'AV', logoBg: 'bg-[#f2e1d0] text-[#94682e]' },
  { name: 'Calica', initials: 'CA', logoBg: 'bg-[#e7e8ea] text-[#535353]' },
  { name: 'Chanchal', initials: 'CH', logoBg: 'bg-[#eae3dc] text-[#5e5a53]' },
  { name: 'Crest', initials: 'CR', logoBg: 'bg-[#e8e3df] text-[#6d6d6d]' },
  { name: 'Deep', initials: 'DE', logoBg: 'bg-[#e6edf5] text-[#3d5f88]' },
  { name: 'Dharmadev', initials: 'DH', logoBg: 'bg-[#f0e8dc] text-[#7d6b49]' },
  { name: 'Dutron', initials: 'DU', logoBg: 'bg-[#dbe4f0] text-[#4c5f7d]' },
  { name: 'Dwarkesh', initials: 'DW', logoBg: 'bg-[#f0ead7] text-[#7a5f20]' },
  { name: 'Evercon', initials: 'EV', logoBg: 'bg-[#f0ece6] text-[#6e6e6e]' },
  { name: 'Gala', initials: 'GA', logoBg: 'bg-[#f6e7db] text-[#8a5a38]' },
  { name: 'Ganesh Housing', initials: 'GH', logoBg: 'bg-[#f3d9c8] text-[#8a4b37]' },
  { name: 'Golden', initials: 'GO', logoBg: 'bg-[#f7efdf] text-[#7a5a1a]' },
  { name: 'HK', initials: 'HK', logoBg: 'bg-[#ede6dd] text-[#5c4e46]' },
  { name: 'Jainam', initials: 'JA', logoBg: 'bg-[#eadbcf] text-[#7d4f32]' },
  { name: 'Kavisha', initials: 'KA', logoBg: 'bg-[#e4e6e9] text-[#6a6f76]' },
  { name: 'Lodha', initials: 'LO', logoBg: 'bg-[#e7dfd7] text-[#6d5b51]' },
  { name: 'Madhav', initials: 'MA', logoBg: 'bg-[#efe5d3] text-[#8a6936]' },
  { name: 'Mahadev', initials: 'MH', logoBg: 'bg-[#f0e7cf] text-[#806126]' },
  { name: 'Maruti', initials: 'MA', logoBg: 'bg-[#e1e0de] text-[#4f4f4f]' },
  { name: 'Miraj', initials: 'MI', logoBg: 'bg-[#f7ddcb] text-[#8f5139]' },
  { name: 'Mudra', initials: 'MU', logoBg: 'bg-[#e3d5c0] text-[#725539]' },
  { name: 'Nila', initials: 'NI', logoBg: 'bg-[#edf0f3] text-[#5e6270]' },
  { name: 'Radhe', initials: 'RA', logoBg: 'bg-[#ede8d9] text-[#6f6642]' },
  { name: 'Rajshree', initials: 'RJ', logoBg: 'bg-[#f2dfd0] text-[#8a5939]' },
  { name: 'Rajyash', initials: 'RY', logoBg: 'bg-[#ece3d7] text-[#735e49]' },
  { name: 'Ratna', initials: 'RA', logoBg: 'bg-[#f5ece1] text-[#8e6b3f]' },
  { name: 'Safal', initials: 'SA', logoBg: 'bg-[#f1d9d8] text-[#8a4346]' },
  { name: 'Samridhi', initials: 'SA', logoBg: 'bg-[#e7e4df] text-[#515151]' },
  { name: 'Sanskrut', initials: 'SA', logoBg: 'bg-[#efe6d2] text-[#7a6231]' },
  { name: 'Sarthav', initials: 'SA', logoBg: 'bg-[#e8dfd0] text-[#66543b]' },
  { name: 'Satyam', initials: 'SA', logoBg: 'bg-[#ece4dc] text-[#5f5447]' },
  { name: 'Satyamev', initials: 'SY', logoBg: 'bg-[#ece6dc] text-[#6b6048]' },
  { name: 'Saumya', initials: 'SU', logoBg: 'bg-[#f1ebe3] text-[#5d5d5d]' },
  { name: 'Shalby', initials: 'SH', logoBg: 'bg-[#f1dfd4] text-[#8c4f3e]' },
  { name: 'Sheetal', initials: 'SH', logoBg: 'bg-[#eee6d7] text-[#6c573f]' },
  { name: 'Sheth', initials: 'SH', logoBg: 'bg-[#e9e0d0] text-[#725d37]' },
  { name: 'Shilp', initials: 'SH', logoBg: 'bg-[#f0e4dc] text-[#7b5941]' },
  { name: 'Shivalik', initials: 'SH', logoBg: 'bg-[#f6ebd3] text-[#846126]' },
  { name: 'Shivalaya', initials: 'SH', logoBg: 'bg-[#f4ead8] text-[#82633a]' },
  { name: 'Shivganga', initials: 'SG', logoBg: 'bg-[#eadedd] text-[#6a4d4a]' },
  { name: 'Sijcon', initials: 'SI', logoBg: 'bg-[#ecdfd0] text-[#7b583f]' },
  { name: 'Shubh', initials: 'SH', logoBg: 'bg-[#efe4d1] text-[#7a5f2f]' },
  { name: 'Shubh Group', initials: 'SG', logoBg: 'bg-[#e7dfd2] text-[#695b43]' },
  { name: 'Siddhi', initials: 'SI', logoBg: 'bg-[#efe0d0] text-[#885d34]' },
  { name: 'Siddhi Group', initials: 'SG', logoBg: 'bg-[#ede6d7] text-[#6b5a44]' },
  { name: 'Sigma', initials: 'SI', logoBg: 'bg-[#ededed] text-[#6b6b6b]' },
  { name: 'Soham', initials: 'SO', logoBg: 'bg-[#efe2d3] text-[#7f623f]' },
  { name: 'Sun', initials: 'SU', logoBg: 'bg-[#edf0ea] text-[#72726e]' },
  { name: 'Surya', initials: 'SU', logoBg: 'bg-[#f0eadf] text-[#745f39]' },
  { name: 'Tata Housing', initials: 'TH', logoBg: 'bg-[#efe5d5] text-[#7d6237]' },
  { name: 'Venus', initials: 'VE', logoBg: 'bg-[#efe5d6] text-[#6e5936]' },
  { name: 'Visva', initials: 'VI', logoBg: 'bg-[#e9e7e4] text-[#5d5d5d]' },
  { name: 'Yash', initials: 'YA', logoBg: 'bg-[#f3e9d6] text-[#8a6636]' },
  { name: 'Zion', initials: 'ZI', logoBg: 'bg-[#ebdfd1] text-[#7c5a35]' }
];

const HERO_IMAGE = 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80';

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] pt-24">
      <section className="relative min-h-[78vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 14, 14, 0.42), rgba(14, 14, 14, 0.62)), url('${HERO_IMAGE}')`,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%)]" />

        <Container className="relative z-10 flex min-h-[78vh] items-center justify-center py-20 text-center">
          <div className="max-w-5xl">
            <p className="mb-5 text-[0.72rem] md:text-sm font-bold uppercase tracking-[0.45em] text-[#f4d9a5]">
              Client Directory
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[6.5rem] font-display font-bold uppercase tracking-[0.16em] text-white leading-[0.95]">
              Our Clients
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm md:text-lg text-white/85 leading-relaxed">
              Trusted by leading developers, builders, and visionaries who value thoughtful design and engineering excellence.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative bg-white py-20 md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" />
        <Container className="max-w-[90rem]">
          <div className="mb-12 text-center">
            <p className="mb-4 text-[0.72rem] md:text-sm font-bold uppercase tracking-[0.4em] text-[#b08543]">
              Clients
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-[0.12em] text-neutral-900 leading-none">
              Our Clients
            </h2>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6">
              {CLIENTS.map((client, idx) => (
                <div
                  key={idx}
                  className="group flex h-40 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-4 text-center shadow-[0_6px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8c39a] hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full border border-[#d8c39a] ${client.logoBg} text-[0.62rem] font-bold uppercase tracking-[0.22em]`}>
                      {client.initials}
                    </div>
                    <span className="text-[0.78rem] sm:text-sm md:text-[0.95rem] font-semibold uppercase tracking-[0.16em] text-neutral-700 transition-colors group-hover:text-[#8b5e1c]">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center text-sm font-bold uppercase tracking-[0.24em] text-[#8b5e1c] transition-colors hover:text-[#6b4512]">
              Back to home
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
