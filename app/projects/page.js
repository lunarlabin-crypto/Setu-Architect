import { Container } from '@/components/ui';
import ProjectsExplorer from '@/components/ProjectsExplorer';

const PROJECTS = [
  {
    id: '3rd-eye-three',
    name: '3rd Eye Three',
    category: 'high-rise',
    location: 'Navrangpura, Ahmedabad',
    type: 'Commercial',
    developer: 'Calica Infrastructure',
    architect: 'PlaceKinesis Associates (PKA)',
    images: [
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'satyamev-emporio',
    name: 'Satyamev Emporio',
    category: 'high-rise',
    location: 'Odhav Ring Road, Ahmedabad',
    type: 'Commercial',
    developer: 'Satyamev Developers',
    architect: 'PlaceKinesis Associates (PKA)',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'ganesh-glory',
    name: 'Ganesh Glory',
    category: 'low-medium-rise-tower',
    location: 'Gota, Ahmedabad',
    type: 'Commercial',
    developer: 'Shree Siddhi Group',
    architect: 'PlaceKinesis Associates (PKA)',
    images: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'shalby-hospital',
    name: 'Shalby Hospital',
    category: 'hospital',
    location: 'Naroda, Ahmedabad',
    type: 'Hospital',
    developer: 'Shalby Group',
    architect: 'KSADPS Architect',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'sports-complex',
    name: 'Sports Complex',
    category: 'institutional',
    location: 'Ganpat University, Kherva',
    type: 'Institutional',
    developer: '',
    architect: 'KSADPS Architect',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'red-flag-apparel-park',
    name: 'Red Flag Apparel Park',
    category: 'industrial',
    location: 'Narol, Ahmedabad',
    type: 'Industrial',
    developer: 'Agrasen Infrastructure',
    architect: 'Architects Open Ideas',
    images: [
      'https://images.unsplash.com/photo-1593516491195-d2f7df1c3f69?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kharawala-residence',
    name: 'Kharawala Residence',
    category: 'private-residence-plotting-scheme',
    location: 'Telav, Sanand (Ahmedabad)',
    type: 'Bungalow',
    developer: '',
    architect: 'Prabhakar Bhagwat Architect (PBB)',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'miraj-mall',
    name: 'Miraj Mall',
    category: 'tall-building',
    location: 'Nathdwara, Rajasthan',
    type: 'Mall',
    developer: 'Miraj Group',
    architect: 'PlaceKinesis Associates (PKA)',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

const CATEGORIES = [
  { slug: 'all', label: 'All' },
  { slug: 'high-rise', label: 'High Rise' },
  { slug: 'low-medium-rise-tower', label: 'Low-Medium' },
  { slug: 'hospital', label: 'Hospital' },
  { slug: 'institutional', label: 'Institutional' },
  { slug: 'industrial', label: 'Industrial' },
  { slug: 'private-residence-plotting-scheme', label: 'Residence' },
  { slug: 'tall-building', label: 'Tall Building' }
];

export const metadata = {
  title: 'Projects | Setu Architect'
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] pt-24">
      <section className="relative min-h-[78vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 14, 14, 0.45), rgba(14, 14, 14, 0.68)), url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_36%)]" />

        <Container className="relative z-10 flex min-h-[78vh] items-center justify-center py-20 text-center">
          <div className="max-w-5xl">
            <p className="mb-5 text-[0.72rem] md:text-sm font-bold uppercase tracking-[0.45em] text-[#f4d9a5]">
              Project Gallery
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[6.5rem] font-display font-bold uppercase tracking-[0.16em] text-white leading-[0.95]">
              Our Projects
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm md:text-lg text-white/85 leading-relaxed">
              A curated portfolio of thoughtfully designed residential, commercial, industrial, and institutional spaces.
            </p>
          </div>
        </Container>
      </section>

      <ProjectsExplorer categories={CATEGORIES} projects={PROJECTS} />
    </main>
  );
}
