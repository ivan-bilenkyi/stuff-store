import Products from 'components/Products/Products';
import Poster from '../Poster/Poster';
import { useSelector } from 'react-redux';

const Home = () => {
  const { list } = useSelector(({ products }) => products);
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
    </>
  );
};

export default Home;
