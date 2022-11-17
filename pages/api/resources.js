export default async function fetchData(req, res) {

  if (req.method === 'GET') {
    const response = await fetch('http://localhost:3001/api/resources');
    const data = await response.json();
    res.status(200).json(data);
  }

  if (req.method === 'POST') {
    const { title, timeToFinish, priority } = req.body;
    if (!title || !timeToFinish || !priority) {
      return res.status(422).json({ message: 'Invalid input, data missing' });
    }
    const response = await fetch('http://localhost:3001/api/resources', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (!response.ok) {
      return res.status(500).json({ message: 'Something went wrong during resource creation' });
    }
    res.status(201).json(data); 

  }
}
