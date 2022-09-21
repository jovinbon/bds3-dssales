import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDateComponent from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filer: FilterData) => {
    setFilterData(filer);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFIlterChange={onFilterChange} />
        <SalesByDateComponent filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlândia', 'Araguari', 'Uberaba']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamentos"
            labels={['Débito', 'Crédito', 'Dinheiro']}
            series={[30, 50, 30]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
