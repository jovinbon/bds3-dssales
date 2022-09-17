import './styles.css';
import SalesSummaryCard from './summary-cards';
import { ReactComponent as AvatarIcon } from '../../assets/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/sync-icon.svg';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={430} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={44434} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={434} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={3434} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
}

export default SalesSummary;
