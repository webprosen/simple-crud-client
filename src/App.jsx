import './App.css'

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};

    fetch('http://localhost:5000/users', {
      'method': 'POST',
      'headers': {
        'content-type': 'application/json',
      },
      'body' : JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
    form.reset();
  }

  return (
    <>
      <h2>Simple CRUD</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <input type="text" name="email" id="" />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App;
