import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import About from "./components/About";
import Shop from "./components/Shop";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import CommentDetails from "./components/CommentDetails";
import ProductListing from "./components/Products/ProductListing";
import ProductDetails from "./components/Products/ProductDetails";

function App() {
    return (
        <div>
            <Router>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={ProductListing}/>
                    <Route exact path='/product/:productId' component={ProductDetails}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/shop' component={Shop}/>
                    <Route exact path='/post/:id' component={PostDetails}/>
                    <Route exact path='/shop/:id' component={CommentDetails}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
