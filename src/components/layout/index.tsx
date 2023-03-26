import Header from '../common/Header';
import Footer from '../common/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between">
      <Header />
      <div className="flex w-full max-w-screen-lg flex-col px-5 tracking-tight text-gray-800 sm:px-10 md:px-5">
        {children}
      </div>
      <Footer />
    </div>
  );
}
