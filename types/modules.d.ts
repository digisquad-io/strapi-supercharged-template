declare module 'strapi-utils' {
  export type ModelOf<T> = any | T;
  export function sanitizeEntity<T>(
    entity: T,
    options: {
      model: ModelOf<T>;
    }
  ): T;
}
