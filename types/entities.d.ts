/* eslint-disable camelcase */

export interface Entity {
  id: number;
}
export interface CollectionEntity extends Entity {}
export interface SingleTypeEntity extends Entity {}
export interface Component extends Entity {}
export type RelationWith<T extends Entity> = T | number | null;

export type ComponentField<T extends Component> = RelationWith<T>;
export type DateTimeField = string;
export type JSONField = any;

export type TimestampFields = {
  created_at: DateTimeField;
  updated_at: DateTimeField;
};

// @todo: strapi-plugin-user-permissions
export type UserEntity = CollectionEntity & {};
export type RoleEntity = CollectionEntity & {};
export type PermissionEntity = CollectionEntity & {};

// @todo: strapi-plugin-upload
export type FileEntity = Entity &
  TimestampFields & {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: JSONField;
    hash: string;
    ext: string;
    mime: string;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: JSONField;
    related: RelationWith<any>[];
  };
