import PropTypes from 'prop-types';
import './App.css'
import Table from './components/Table';
const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];
function App() {

  return (
    <>
      <Table netIncomes={netIncomes}></Table>
    </>
  )
}
netIncomes.propTypes = {
  brand: PropTypes.string,
  price: PropTypes.number,
};
export default App
