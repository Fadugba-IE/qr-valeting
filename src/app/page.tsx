import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/Hero";
import AboutUs from "./about-us/page";
import Footer from "@/components/landing-page/Footer";
import Testimonials from "@/components/landing-page/Testimonials";

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			<Header />
			<HeroSection />
			<AboutUs />
			<Testimonials />
			<Footer />
		</main>
	);
}
