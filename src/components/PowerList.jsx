
export function PowerList(list) {
  console.log(list);
  const arrOflist = Object.keys(list)
  console.log(arrOflist);
  return (
    <ul>
      {arrOflist.map((power) => (
        <li
           key={power}>{list[power]}        
        </li>
  ))}
</ul>
  );
}
