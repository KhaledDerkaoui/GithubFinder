import UserResults from "../components/users/UserResults";
import SearchUsers from './../components/users/SearchUsers';

export default function Home() {
  return (
    <>
      <div>
        <SearchUsers/>
        <UserResults/>
    </div>
    
    </>
  )
}
