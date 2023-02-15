import './App.css';
import { Profile } from './components/Profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statistics from './data/statistics.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div className="App">
      <Profile {...user} />
      <Statistics data={statistics} title="Upload stats" />
      <Statistics data={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
