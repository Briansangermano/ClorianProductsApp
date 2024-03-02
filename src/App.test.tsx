import { shallow } from 'enzyme';
import App from './App';
import Header from './components/header/Header';
import ProductList from './pages/productList/ProductList';
import { Provider } from 'react-redux';
import store from './redux/store';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains Header and ProductList components wrapped in Provider', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Provider)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(ProductList)).toHaveLength(1);
  });

  it('passes store to Provider component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Provider).prop('store')).toEqual(store);
  });
});
