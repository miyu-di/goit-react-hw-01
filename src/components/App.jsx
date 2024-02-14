import "./App.css";
import { Profile } from "./Profile/Profile";
import userData from "../../src/userData.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "../../src/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transaction from "../transaction.json";

export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};
