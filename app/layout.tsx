import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUsers";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "GasGnG",
	description: "Destinations at your convienence",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
   const currentUser = await getCurrentUser();
	return (
		<html lang="en">
         <body className={font.className}>
            <RegisterModal />
            <LoginModal />
            {/*
            <ToasterProvider /> */}
				<Navbar currentUser={currentUser} />
				{/* {children} */}
			</body>
		</html>
	);
}
