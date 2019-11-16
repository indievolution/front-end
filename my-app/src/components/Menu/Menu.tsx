import React, { FC, useEffect, useState } from 'react';

interface MenuItem {
  name: string;
  author: string;
  id: string;
}

const httpGet = async (url: string): Promise<string> => {
  const xmlHTTP = new XMLHttpRequest();
  xmlHTTP.open('GET', url, true);
  try {
    xmlHTTP.send(null);
  } catch {
    console.log('error');
  }
  return xmlHTTP.responseText;
};

export const Menu: FC = () => {
  const [menuJson, setMenu] = useState('');
  useEffect(() => {
    (async () => {
      const menuItems = await httpGet('');
      console.log(menuItems);
      setMenu(menuItems);
    })();
  });

  return <div className="menu"></div>;
};

const MenuCard: FC<{ menuItem: MenuItem }> = ({ menuItem }) => (
  <div>
    <h1>{menuItem.name}</h1>
    <h2>{menuItem.author}</h2>
  </div>
);
