import Header from '../common/Header';
import Footer from '../common/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
