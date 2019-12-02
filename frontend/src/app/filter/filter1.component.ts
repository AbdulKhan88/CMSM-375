export interface Filter { // mostly for UI
  id : string|string;
  title : string;
  active? : boolean;
}

export interface ActiveFilter { // For server
  group : string; // is referring to the query string
  active? : boolean;
}
