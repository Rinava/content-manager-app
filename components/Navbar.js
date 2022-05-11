const Navbar = () => {
  return (
    <nav>
      <h1>Content Manager</h1>
      <div className='searchBar'>
        <input type='search' />
        <button>Search</button>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
export default Navbar;
