import React from 'react';

function Repo() {
  const openExternalLink = () => {
    // URL зовнішнього сайту, на який ви хочете перейти
    const externalUrl = 'https://www.example.com';

    // Відкриття посилання у новому вікні або вкладці браузера
    window.open(externalUrl, '_blank');
  };

  return (
    <div>
      <p>Клацніть на посиланні, щоб перейти на зовнішній сайт:</p>
      <a href="#" onClick={openExternalLink}>Перейти на зовнішній сайт</a>
    </div>
  );
}

export default MyComponent;