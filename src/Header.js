import React, { useState } from 'react';

function Header() {
  const [showBlogUi, setShowBlogUi] = useState(false)

  return (
    <header class="p-4">
      <h1 class="header-title p-2 text-2xl font-semibold">Blog Us</h1>
      <nav>
        <ul>
          <li>
            <button class="bg-blue-400 p-2 pt-2 pb-2 rounded" onClick={() => {
              setShowBlogUi(true);
              console.log(showBlogUi);
            }}>Add Blog</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
