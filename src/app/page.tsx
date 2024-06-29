import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/Hero";
import Footer from "@/components/landing-page/Footer";
import Testimonials from "@/components/landing-page/Testimonials";
import AboutSection from "@/components/landing-page/About";

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			<Header />
			<HeroSection />
			<AboutSection />
			<Testimonials />
			<Footer />
		</main>
	);
}
