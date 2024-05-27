document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
  
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    alert(data.message);
  });
  
  document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    if (data.token) {
      alert('Login successful');
      window.location.href = `/welcome.html?email=${encodeURIComponent(email)}`;
    } else {
      alert(data.message);
    }
  });
  