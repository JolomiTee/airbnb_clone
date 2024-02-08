import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GasGnG",
	description: "Destinations at your convienence",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
         <body className={font.className}>
            <Modal isOpen title="Hello Airbnb"/>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
