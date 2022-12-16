export default async function fetchData(req, res) {
  let apiUrl = `${process.env.API_URL}/resources`;

  if (req.method === 'GET') {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    const { id, title, timeToFinish, priority } = req.body;
    if (!title || !timeToFinish || !priority) {
      return res.status(422).json({ message: 'Invalid input, data missing' });
    }
    apiUrl = req.method === 'POST' ? `${apiUrl}` : `${apiUrl}/${id}`;
    try {
      const response = await fetch(apiUrl, {
        method: req.method.toUpperCase(),
        body: JSON.stringify(req.body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      res.status(201).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Something went wrong during resource creation' });
    }
  }
  if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      const response = await fetch(apiUrl + `/${id} `, {
        method: 'DELETE',
      });
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Something went wrong during resource deletion' });
    }
  }
}
