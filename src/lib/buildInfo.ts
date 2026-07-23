import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export interface BuildInfo {
  /** Short git commit the site was built from. */
  commit: string;
  /** UTC date the build ran, formatted YYYY-MM-DD. */
  builtAt: string;
  /** Astro version that produced the build. */
  astroVersion: string;
  /** Fake-but-fitting deploy region (real AWS region id for Mexico). */
  region: string;
}

function shortSha(): string {
  // Prefer CI-provided refs (Netlify: COMMIT_REF, GitHub Actions: GITHUB_SHA)
  // so we don't shell out when the platform already told us the commit.
  const fromEnv = process.env.COMMIT_REF ?? process.env.GITHUB_SHA;
  if (fromEnv) return fromEnv.slice(0, 7);
  try {
    return execSync('git rev-parse --short HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
  } catch {
    return 'unknown';
  }
}

/**
 * Honest, build-time deploy metadata for the status-page footer.
 * Every field is derived from the real build — nothing is invented at runtime.
 */
export function getBuildInfo(): BuildInfo {
  let astroVersion = '';
  try {
    astroVersion = require('astro/package.json').version;
  } catch {
    /* version is decorative; a missing one just renders blank */
  }

  return {
    commit: shortSha(),
    builtAt: new Date().toISOString().slice(0, 10),
    astroVersion,
    region: 'mx-central-1',
  };
}
