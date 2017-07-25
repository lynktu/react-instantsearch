import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Breadcrumb,
  Panel,
  HierarchicalMenu,
} from '../packages/react-instantsearch/dom';
import { connectHierarchicalMenu } from '../packages/react-instantsearch/connectors';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import { WrapWithHits } from './util';

const stories = storiesOf('Breadcrumb', module);
const VirtualHierarchicalMenu = connectHierarchicalMenu(() => null);

stories.addDecorator(withKnobs);

stories
  .add('default', () =>
    <div>
      <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
        />
        <hr />
        <HierarchicalMenu
          attributes={['category', 'sub_category', 'sub_sub_category']}
          defaultRefinement="Cooking > Kitchen textiles"
        />

      </WrapWithHits>
    </div>
  )
  .add('with panel', () =>
    <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
      <Panel title="Category">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
          separator=" / "
        />
      </Panel>
      <HierarchicalMenu
        attributes={['category', 'sub_category', 'sub_sub_category']}
        defaultRefinement="Cooking > Bakeware"
      />
    </WrapWithHits>
  )
  .add('playground', () =>
    <WrapWithHits hasPlayground={true} linkedStoryGroup="Breadcrumb">
      <Panel title="Category">
        <Breadcrumb
          attributes={['category', 'sub_category', 'sub_sub_category']}
          separator={text('separator', '/')}
          translations={object('translations', {
            rootURL: 'Home',
          })}
        />
      </Panel>
      <VirtualHierarchicalMenu
        attributes={['category', 'sub_category', 'sub_sub_category']}
        defaultRefinement="Cooking > Bakeware"
      />
    </WrapWithHits>
  );
