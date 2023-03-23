import Header from '../common/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-white">
      <Header />
      {children}
    </div>
  );
}
