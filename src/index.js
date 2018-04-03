import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import rootReducer from "./reducers";
import "./index.css";
import "./resources/pokedex-icon.css";
import App from "./components/App";
import DisplayPokemonDetail from "./containers/DisplayPokemonDetail"

let store = createStore(rootReducer);

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/detail/:number?" component={DisplayPokemonDetail} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
