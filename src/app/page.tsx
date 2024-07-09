import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/Hero";
import Footer from "@/components/landing-page/Footer";
import Testimonials from "@/components/landing-page/Testimonials";
import AboutSection from "@/components/landing-page/About";
import Contact from "@/components/landing-page/Contact";
import Services from "@/components/landing-page/Services";

export default function Home() {
	return (
		<main className="h-auto w-full">
			<Header />
			<HeroSection />
			<AboutSection />
			<Services />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
