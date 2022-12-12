export default async function activeResource(req, res) {
  const response = await fetch('http://localhost:3001/api/active-resource');
  const data = await response.json();
  if (response.status === 200) {
    res.status(200).json(data);
  } else {
    res.status(response.status).json(data);
  }
}
