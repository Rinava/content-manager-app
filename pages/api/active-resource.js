export default async function activeResource(req, res) {
  try {
    const response = await fetch(`${process.env.API_URL}/active-resource`);
    if (response.status === 204) {
      res.status(204).json();
    } else {
      res.status(200).json(await response.json());
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong during fetch' });
  }
}
