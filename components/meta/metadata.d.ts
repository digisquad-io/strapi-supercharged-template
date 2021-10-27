import type {
  Component,
  FileEntity,
  RelationWith,
} from 'strapi-supercharged';

export type Metadata = Component & {
  metaTitle: string;
  metaDescription: string;
  shareImage?: RelationWith<FileEntity>;
  twitterCardType?:
    | 'summary'
    | 'summary_large_image'
    | 'app'
    | 'player';
  twitterUsername?: string;
};
