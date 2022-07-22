import OverviewCards from '../../components/admin/OverviewCards';
import WelcomeCard from '../../components/admin/IncomeCard';
import RecentUser from '../../components/admin/RecentUser';
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
       <WelcomeCard/>
        <OverviewCards/>
        <RecentUser/>
        </div>
  )
}

export default Dashboard