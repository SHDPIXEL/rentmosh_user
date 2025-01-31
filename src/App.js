import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/productPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/category/:categoryName" component={CategoryPage} />
                <Route path="/product/:id" component={ProductPage} />
                {/* Other routes... */}
            </Switch>
        </Router>
    );
}

export default App; 