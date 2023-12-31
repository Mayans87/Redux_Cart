import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const toggler = useSelector(state=>state.toggle)
  return (
    <Layout>
      {!toggler &&
      <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
