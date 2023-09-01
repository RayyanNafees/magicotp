/// <reference types="astro/client" />
interface ImportMetaEnv {
  // Stytch
  ////test
  readonly PUBLIC_STYTCH_PROJECT_ID: string
  readonly PUBLIC_STYTCH_SECRET: string
  readonly PUBLIC_STYTCH_TOKEN: string
  ////live
  readonly STYTCH_PROJECT_ID: string
  readonly STYTCH_SECRET: string
  readonly STYTCH_TOKEN: string

  // Magic Links
  readonly PUBLIC_MAGIC_LINK_API_KEY: string
  readonly PUBLIC_MAGIC_LINK_SECRET: string

  // D7 Verify
  readonly PUBLIC_D7_api_access_token: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
