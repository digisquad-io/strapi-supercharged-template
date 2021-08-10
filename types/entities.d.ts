/* eslint-disable camelcase */

export type DateTimeField = string;
export type JSONField = any;

export type TimestampFields = {
  created_at: DateTimeField;
  updated_at: DateTimeField;
};

export interface Entity {
  id: number;
}

export type FileEntity = Entity &
  TimestampFields &
  Record<string, any>;
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
export type RelationWith<T> = T | number | null;
