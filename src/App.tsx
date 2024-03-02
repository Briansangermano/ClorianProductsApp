import { Provider } from 'react-redux';
import Header from "./components/header/Header";
import store from './redux/store';
import ProductList from "./pages/productList/ProductList";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <ProductList />
      </Provider>
    </div>
  );
};

export default App;

