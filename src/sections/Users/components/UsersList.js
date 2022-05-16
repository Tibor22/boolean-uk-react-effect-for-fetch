import UsersListItem from "./UsersListItem";

export default function UsersList({ users }) {
  return (
    <ul className="users-list">
      {users.map((user) => {
        const userName =
          user.name.title + " " + user.name.first + " " + user.name.last;
        return <UsersListItem key={userName} userName={userName} user={user} />;
      })}
    </ul>
  );
}
