export default function SubjectList({ art }) {
  console.log(art);
  return (
    <ul>
      {art.subject_titles.slice(0, 5).map((subject, i) => (
        <li key={i}>{subject}</li>
      ))}
    </ul>
  );
}
