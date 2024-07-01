
  <h1>URL Shortener</h1>

  <p>This project is a URL shortener application built with Node.js, Express, MongoDB, and EJS. It allows users to shorten long URLs into manageable short links, track the number of clicks on each link, and view analytics.</p>

  <h2>Features</h2>
    <ul>
        <li><strong>Shorten URLs:</strong> Generate short, easy-to-share URLs from long URLs.</li>
        <li><strong>Redirects:</strong> Redirect users from short URLs to their original destinations.</li>
        <li><strong>Analytics:</strong> Track and display the number of clicks on each short URL.</li>
        <li><strong>Persistent Storage:</strong> Store URLs and click data in a MongoDB database.</li>
        <li><strong>UI:</strong> Simple and intuitive user interface built with EJS templates.</li>
    </ul>

  <h2>Installation</h2>
    <ol>
        <li><strong>Clone the repository:</strong><br>
            <pre><code>git clone &lt;repository_url&gt;
cd url-shortener</code></pre>
        </li>
        <li><strong>Install dependencies:</strong><br>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Set up environment variables:</strong><br>
            <ul>
                <li>Create a <code>.env</code> file in the root directory.</li>
                <li>Define the following variables:
                    <pre><code>PORT=8001
MONGODB_URI=mongodb://localhost:27017/short-url</code></pre>
                </li>
            </ul>
        </li>
        <li><strong>Run the application:</strong><br>
            <pre><code>npm start</code></pre>
        </li>
        <li><strong>Access the application:</strong><br>
            Open your web browser and go to <code>http://localhost:8001</code> (or the port specified in your <code>.env</code> file).
        </li>
    </ol>

  <h2>Usage</h2>
    <ul>
        <li><strong>Shorten a URL:</strong>
            <ul>
                <li>Enter a long URL in the input field and click on "Generate".</li>
                <li>Copy and share the generated short URL.</li>
            </ul>
        </li>
        <li><strong>View Analytics:</strong>
            <ul>
                <li>Click on the short ID in the table to view analytics for each URL.</li>
            </ul>
        </li>
    </ul>

  <h2>Contributing</h2>
    <p>Contributions are welcome! If you'd like to contribute to this project, please follow these steps:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create your feature branch (<code>git checkout -b feature/YourFeatureName</code>).</li>
        <li>Commit your changes (<code>git commit -am 'Add some feature'</code>).</li>
        <li>Push to the branch (<code>git push origin feature/YourFeatureName</code>).</li>
        <li>Open a pull request.</li>
    </ol>

  <h2>License</h2>
    <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
</body>
</html>

