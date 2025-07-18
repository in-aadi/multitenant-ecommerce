import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<div className="flex-1 bg-[#F4F4F0]">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
