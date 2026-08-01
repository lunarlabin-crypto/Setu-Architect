export default function AdminLayout({ children }) {
  // Admin pages use their own standalone layout — no main site Navbar
  return <>{children}</>;
}
