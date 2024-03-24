import "./styles/reset.css";
import "./styles/vars.css";
import "./styles/fonts.css";
import "./styles/base-styles.css";

import Header from "../widgets/Header/Header";
import MainPage from "../pages/MainPage";
import Footer from "../widgets/Footer/Footer";

function App() {
  return (
    <>
      <div class="page-container">
        <Header />
        <main class="main">
          <MainPage />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
