export default async function fetchData(req, res) {
  if (req.method === 'GET') {
    const response = await fetch('http://localhost:3001/api/resources');
    const data = await response.json();
    res.status(200).json(data);
  }

  if (req.method === 'POST' || req.method === 'PUT') {
    const { id, title, timeToFinish, priority } = req.body;
    if (!title || !timeToFinish || !priority) {
      return res.status(422).json({ message: 'Invalid input, data missing' });
    }
    const url =
      req.method === 'POST'
        ? 'http://localhost:3001/api/resources'
        : `http://localhost:3001/api/resources/${id}`;
    try {
      const response = await fetch(url, {
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
      const response = await fetch(
        `http://localhost:3001/api/resources/${id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Something went wrong during resource deletion' });
    }
  }
}
