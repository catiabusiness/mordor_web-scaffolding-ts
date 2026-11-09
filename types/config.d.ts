// For more information on adding types to your config, see:
// https://shadow.admincb.com/docs/api/Shadow%20Modules/frontend-config#typescript-usage

declare global {
  namespace Shadow {
    interface Config {
      mocksEnabled: boolean;
    }
  }
}

// TS type definitions need to import or export something to be taken into account in the compiler.
export {};
