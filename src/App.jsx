import React from 'react';
import './App.css';

const App = () => {
  const name = "Albin Shiju";
  const email = "your.email@example.com";
  const phone = "123-456-7890";

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My Contact Page</h1>
      </header>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
      </section>
    </div>
  );
};

export default App;
