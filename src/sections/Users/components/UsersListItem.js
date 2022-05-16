export default function UsersListItem({ user, userName }) {
  return (
    <li className={`bg-${user.gender === "male" ? "blue" : "pink"}`}>
      <img src={user.picture.medium} alt={userName} />
      <h3>{userName}</h3>
      <p>Email: {user.email}</p>
    </li>
  );
}
