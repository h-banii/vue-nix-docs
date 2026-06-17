declare module "vue-nix-docs";

export interface FilterChipModel {
  id: number;
  match: string;
  checked: boolean;
  children: FilterChipModel[];
}

export interface NixosOption {
  declarations: string[];
  default: Record<string, string>;
  description: string;
  example?: Record<string, string>;
  loc: string[];
  readOnly: boolean;
  type: string;
}
