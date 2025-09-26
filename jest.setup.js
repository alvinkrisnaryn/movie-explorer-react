// Polyfill TextEncoder / TextDecoder
import { TextEncoder, TextDecoder } from "util";

if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder;
}

if (!globalThis.TextDecoder) {
  globalThis.TextDecoder = TextDecoder;
}

// Mock import.meta.env biar Jest gak error
globalThis.import = {
  meta: {
    env: {
      VITE_TMDB_API_KEY: "fake_api_key_for_test",
    },
  },
};
