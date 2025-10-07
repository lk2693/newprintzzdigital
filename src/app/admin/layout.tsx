export const metadata = {
  title: 'Admin Panel',
  description: 'Admin Panel für PrintzzDigital'
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      {children}
    </div>
  );
}
