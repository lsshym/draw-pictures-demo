import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import LayerDemo from "./views/LayerDemo/LayerDemo";

const App = () => (
    <Provider store={store}>
        <LayerDemo></LayerDemo>
    </Provider>
);
export default App;
