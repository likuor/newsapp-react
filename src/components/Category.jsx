import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { CategoryList } from '../CategoryList';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const Category = () => {
  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        {CategoryList.map((category, index) => (
          <Link
            key={index}
            underline='hover'
            color='inherit'
            href='/'
            aria-current='page'
          >
            {category.category}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};
