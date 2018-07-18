import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Post from './index'

storiesOf('Post', module)
    .add('Title', () => (
        <Post 
            title='Paróquia de Teste'
            titleClick={action('Title clicked')}
        />
    )) 