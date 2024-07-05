import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import BookServiceForm from "./_components/book-service-form";

export default function BookService() {
	return (
		<main className="min-h-screen w-full">
			<Header />
			<BookServiceForm />
			<Footer />
		</main>
	);
}
