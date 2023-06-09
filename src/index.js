import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile';
import user from './user.json';
import { Statistics } from 'components/Statistics';
import data from './data.json';
import { FriendList } from 'components/FriendList';
import friends from './friends.json';
import TransactionHistory from 'components/transactions';
import transactions from './transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />;
    <TransactionHistory items={transactions} />;
  </React.StrictMode>
);
