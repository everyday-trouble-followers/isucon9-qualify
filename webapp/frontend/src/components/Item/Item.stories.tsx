import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Item } from '.';
import { MemoryRouter } from 'react-router-dom';

const stories = storiesOf('components/Item', module);

const mockProps = {
  itemId: 1,
  imageUrl: 'https://i.gyazo.com/8560fce19556b64c95ad091350910184.jpg',
  title: 'サンプル',
  price: 10000,
  status: 'on_sale',
};

stories
  .add('default', () => (
    <MemoryRouter>
      <Item {...mockProps} />
    </MemoryRouter>
  ))
  .add('sold out', () => (
    <MemoryRouter>
      <Item {...mockProps} status="sold_out" />
    </MemoryRouter>
  ));
