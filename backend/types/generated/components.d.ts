import type { Schema, Attribute } from '@strapi/strapi';

export interface CustomComment extends Schema.Component {
  collectionName: 'components_custom_comments';
  info: {
    displayName: 'Comment';
    icon: 'layer';
  };
  attributes: {
    Name: Attribute.String;
    Content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'custom.comment': CustomComment;
    }
  }
}
