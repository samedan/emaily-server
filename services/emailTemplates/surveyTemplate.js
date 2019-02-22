module.exports = survey => {
  // return '<div>' + survey.body + '</div>';
  return `
    <html>
      <body>
        <div>
          <h3>I like your input</h3>
          <p>${survey.body}</p>
        </div>
      </body>
    </html>
  `;
};
