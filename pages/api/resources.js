export default async function fetchData (req, res) {
  const response = await fetch('http:/localhost:3001/api/resources');
  const data = await response.json();
  res.send(data);
}
