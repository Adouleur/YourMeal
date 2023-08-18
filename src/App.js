import Header from "../src/Components/Header/Header";
import Main from "./Components/main/main";
import Footer from "./Components/Footer/Footer";
import s from "./App.module.scss"

String.prototype.firstLetterToUppercase = function() {
    return this[0].toUpperCase() + this.slice(1);
}
function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
