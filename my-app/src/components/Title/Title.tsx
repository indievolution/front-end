import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Title: FC = () => (
  <div className="title-page">
    <h1>IndieVolution</h1>
    <Link to="/menu">
      <button>Begin</button>
    </Link>
  </div>
);
