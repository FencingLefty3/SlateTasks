// Router for handling page navigation in the SPA
// HTML content embedded for both development and production
const pages = {
  login: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://*.supabase.co https://xhvsfsryzsmlwygjyrqf.supabase.co ws://localhost:5173 http://localhost:5173"
    />
    <link rel="stylesheet" href="./index.css"/>
    <link rel="icon" type="image/png" href="./images/icon.png"/>
    <title>Slate Tasks</title>
  </head>
    <body>
        <form class="account-section" id="loginForm">
            <h1>Login</h1>
            <input style="width: 100%;" type="email" id="email" placeholder="Email" required/>
            <input style="width: 100%;" type="password" id="password" placeholder="Password" required/>
            <button style="width: 100%;" type="submit" id="loginButton">Login</button>
            <p><a href="#">Forgot Password?</a></p>
            <p>Don't have an account?<a href="#" onclick="window.setView('signup')">Create one here.</a></p>
        </form> 
    </body>
</html>`,

  signup: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://*.supabase.co https://xhvsfsryzsmlwygjyrqf.supabase.co ws://localhost:5173 http://localhost:5173"
    />
    <link rel="stylesheet" href="./index.css"/>
    <link rel="icon" type="image/png" href="./images/icon.png"/>
    <title>Slate Tasks</title>
  </head>
    <body>
      <form class="account-section" id="signupForm">
        <h1>Sign Up</h1>
        <input type="text" id="Name" placeholder="Name" autocomplete="name" required />
        <input type="email" id="email" placeholder="Email" autocomplete="email" required />
        <input type="password" id="password" placeholder="Password" autocomplete="new-password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="#" onclick="window.setView('login')">Login Here.</a></p>
      </form>
    </body>
</html>`,

  home: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://*.supabase.co https://xhvsfsryzsmlwygjyrqf.supabase.co ws://localhost:5173 http://localhost:5173"
    />
    <link rel="stylesheet" href="./index.css"/>
    <link rel="icon" type="image/png" href="./images/icon.png"/>
    <title>Slate Tasks</title>
  </head>
  <body>
    <div id="nav" class="nav">
      <a href="#" onclick="window.setView('home')">Home</a>
      <a href="#" onclick="window.setView('inbox')">Inbox</a>
      <a href="#" onclick="window.setView('browse')">Browse</a>
      <a href="#" onclick="window.setView('accounts')">Settings</a>
    </div>
    <h1 class="title">Dashboard</h1>
    <p id="info"></p>
    <div class="section">
        <p>Productivity Score</p>
    </div>
    <div class="page">
    <div class="section">
        <p>Create Task</p>
        <input type="text" id="taskName" placeholder="Task Name"/>
        <input type="datetime" id="taskDue" placeholder="Due Date"/>
        <select id="taskPriority">
            <option value="None">P1</option>
            <option value="low">P2</option>
            <option value="medium">P3</option>
            <option value="high">P4</option>
        </select>
        <input type="text" id="tag" placeholder="Tags (comma separated)"/>
        <button type="button" id="createTask">Create</button>
    </div>
    </div>
  </body>
</html>`,

  accounts: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline' http://localhost:5173;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;
        connect-src 'self' https://*.supabase.co ws://localhost:5173 http://localhost:5173;;
      "
    />
    <link rel="stylesheet" href="./index.css"/>
    <title>Slate Tasks - Account</title>
  </head>
  <body>
    <div id="nav" class="nav">
        <a href="home.html">Home</a>
        <a href="inbox.html">Inbox</a>
        <a href="browse.html">Browse</a>
        <a href="accounts.html">Settings</a>
    </div>
    <div class="account-section">
      <div class="name-section"><div class="circle"></div><h2 id="name">Name Name</h2></div>
      <p id="email">Email@email.com</p>
      <button id="logOutBtn">Sign Out</button>
    </div>
    <script type="module" src="./accounts.js"></script>
  </body>
</html>`,

  browse: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./index.css"/>
    <title>Browse - Slate Tasks</title>
  </head>
  <body>
    <div id="nav" class="nav">
      <a href="#" onclick="window.setView('home')">Home</a>
      <a href="#" onclick="window.setView('inbox')">Inbox</a>
      <a href="#" onclick="window.setView('browse')">Browse</a>
      <a href="#" onclick="window.setView('accounts')">Settings</a>
    </div>
    <h1>Browse</h1>
    <p>Browse tasks coming soon...</p>
  </body>
</html>`,

  inbox: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./index.css"/>
    <title>Inbox - Slate Tasks</title>
  </head>
  <body>
    <div id="nav" class="nav">
      <a href="#" onclick="window.setView('home')">Home</a>
      <a href="#" onclick="window.setView('inbox')">Inbox</a>
      <a href="#" onclick="window.setView('browse')">Browse</a>
      <a href="#" onclick="window.setView('accounts')">Settings</a>
    </div>
    <h1>Inbox</h1>
    <p>Inbox coming soon...</p>
  </body>
</html>`
};

export async function setView(pageName) {
  const normalizedName = pageName.toLowerCase();
  const html = pages[normalizedName];

  if (!html) {
    console.error(`Page not found: ${pageName}`);
    return;
  }

  try {
    // Create a container if it doesn't exist
    let container = document.getElementById('app-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'app-container';
      document.body.innerHTML = '';
      document.body.appendChild(container);
    }

    // Parse and inject the HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const body = doc.body;
    
    container.innerHTML = body.innerHTML;

    // Reload the appropriate scripts for this page
    await loadPageScripts(normalizedName);

    console.log(`Loaded view: ${normalizedName}`);
  } catch (error) {
    console.error('Error loading view:', error);
  }
}

async function loadPageScripts(pageName) {
  // Dynamically import and initialize the scripts needed for each page
  try {
    switch (pageName) {
      case 'login': {
        const { initLoginForm } = await import('./login.js');
        initLoginForm();
        break;
      }
      case 'signup': {
        const { initSignupForm } = await import('./signup.js');
        initSignupForm();
        break;
      }
      case 'home': {
        await import('./app.js');
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.error(`Error loading scripts for ${pageName}:`, error);
  }
}

// Make setView available globally
window.setView = setView;
