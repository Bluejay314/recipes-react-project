import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

export default function Page({ children }) {
    return (
        <div className="Page">
            <Header />
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}