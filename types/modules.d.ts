declare module 'strapi-utils' {
  type StrapiAppContext = any;
  type ModelOf<T> = any | T;
  export function sanitizeEntity<T>(
    entity: T,
    options: {
      model: ModelOf<T>;
    }
  ): Partial<T>;

  export function parseMultipartData(ctx: StrapiAppContext): {
    data: any;
    files: any;
  };
}
