export interface StrapiAdminDomain extends Record<string, Function> {}
export interface StrapiAdminModels extends Record<string, Function> {}
export interface StrapiAdminUtils extends Record<string, Function> {}
export interface StrapiAdminValidation
  extends Record<string, Function> {}
export interface StrapiAdminConfig extends Record<string, Function> {}

export interface StrapiAdminServices {
  permission: Record<string, any> & {
    actionProvider: {
      registerMany: (actions: any[]) => Promise<void>;
    };
  };
}

export interface StrapiAdmin {
  domain: StrapiAdminDomain;
  models: StrapiAdminModels;
  services: StrapiAdminServices;
  utils: StrapiAdminUtils;
  validation: StrapiAdminValidation;
  config: StrapiAdminConfig;
  destroy: () => Promise<void>;
}
