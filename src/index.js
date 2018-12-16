import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, StoreProvider } from "easy-peasy";

import model from "./model";
import App from "./App";

const store = createStore(model);
function Root() {
	return (
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	)
}

ReactDOM.render(<Root/>, document.getElementById("root"));
serviceWorker.unregister();
