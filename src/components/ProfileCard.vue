<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow flex items-center justify-center py-10">
      <div
        class="w-full max-w-2xl mx-4 sm:mx-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm overflow-hidden"
      >
        <!-- Status bar: the whole card reads as a service that is "up". -->
        <div
          class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-200 dark:border-gray-800 text-xs"
        >
          <span class="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span
              v-if="dotPings"
              class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:hidden"
            ></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full" :class="dotColor"></span>
          </span>
          <span class="text-gray-500 dark:text-gray-400">angelxehg.com</span>
          <span class="hidden text-gray-400 dark:text-gray-600 sm:inline">{{ buildInfo.containerId }}</span>
          <span class="ml-auto inline-flex shrink-0 items-center gap-1.5">
            <!--
              Three renderings of one truth. The server can only know an
              absolute timestamp, so that is what ships; the island rewrites it
              as the relative form `docker ps` would print.
            -->
            <span v-if="!built" class="text-gray-500 dark:text-gray-400 font-semibold">building</span>
            <time
              v-else-if="!uptime"
              :datetime="buildInfo.builtAtISO"
              class="text-emerald-600 dark:text-emerald-400 font-semibold"
            >up since {{ buildInfo.builtAt }}</time>
            <span v-else class="font-semibold" :class="healthText">{{ statusLabel }}</span>
            <span class="text-gray-300 dark:text-gray-600" aria-hidden="true">·</span>
            <span class="text-gray-500 dark:text-gray-400">{{ buildInfo.region }}</span>
          </span>
        </div>

        <div class="p-6 sm:p-8 space-y-8">
          <!-- Header -->
          <header class="flex items-center gap-4">
            <!-- Decorative: the name sits right beside it, so alt is empty on purpose. -->
            <img
              src="/images/avatar.svg"
              alt=""
              width="56"
              height="56"
              class="h-14 w-14 shrink-0 rounded-full border border-gray-200 dark:border-gray-800"
            />
            <div class="space-y-1">
              <h1
                class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                Angel Hurtado
              </h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                <span class="text-emerald-600 dark:text-emerald-400">$</span>
                Backend Developer — Python · APIs · Cloud
              </p>
              <!--
                A real navbar, so /blog is reachable without reading the
                manifest. `~` is the page you are already on.
              -->
              <nav aria-label="Primary" class="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span
                  aria-current="page"
                  class="rounded-md border border-gray-200 px-2 py-0.5 text-gray-500 dark:border-gray-800 dark:text-gray-400"
                >~</span>
                <a
                  href="/blog/"
                  class="rounded-md border border-emerald-500/40 px-2 py-0.5 font-semibold text-emerald-600 hover:border-emerald-500 hover:bg-emerald-500/10 dark:text-emerald-400"
                >/blog</a>
              </nav>
            </div>
          </header>

          <!--
            Manifest: the bio as a readable, honest Dockerfile — and the cause
            of the resources grid below it. Every line is a block span rather
            than newline-separated text, so nothing here depends on template
            whitespace surviving the compiler.
          -->
          <section>
            <p class="mb-2 text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
              manifest
            </p>
            <pre
              class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/40 p-4 text-xs sm:text-sm leading-relaxed"
            ><code><span class="block text-gray-500 dark:text-gray-400"># ~/angel-hurtado.dockerfile</span><template
              v-for="(layer, i) in layers"
              :key="i"
            ><span
              class="block transition-opacity duration-150"
              :class="layerDone(i) ? 'opacity-100' : 'opacity-25'"
            ><span class="text-emerald-600 dark:text-emerald-400">{{ layer.instruction }}</span><template
              v-for="(token, j) in tokenize(' ' + layer.args)"
              :key="j"
            ><a
              v-if="token.quoted && !token.flag && layer.href"
              :href="layer.href"
              title="Read the blog"
              class="group font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400"
            ><span class="relative mr-1.5 inline-flex h-2 w-2 align-baseline" aria-hidden="true"><span
              class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:hidden"
            ></span><span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span></span><span
              class="underline decoration-emerald-500/50 underline-offset-4 group-hover:decoration-emerald-500"
            >{{ token.text }}</span></a><span
              v-else-if="token.flag"
              class="text-amber-600 dark:text-amber-400"
            >{{ token.text }}</span><span
              v-else-if="token.quoted"
              class="text-sky-600 dark:text-sky-400"
            >{{ token.text }}</span><template v-else>{{ token.text }}</template></template><span
              v-if="layer.comment"
              class="text-gray-500 dark:text-gray-400"
            ><template
              v-for="(token, k) in tokenize('  ' + layer.comment)"
              :key="k"
            ><span
              v-if="token.flag"
              class="text-amber-600 dark:text-amber-400"
            >{{ token.text }}</span><template v-else>{{ token.text }}</template></template></span></span><span
              v-if="layer.provides"
              class="block text-gray-500 dark:text-gray-400 transition-opacity duration-150"
              :class="layerDone(i) ? 'opacity-100' : 'opacity-0'"
            >{{ ' ---> ' + layer.digest }}</span></template><span
              class="block text-gray-500 dark:text-gray-400 transition-opacity duration-150"
              :class="built ? 'opacity-100' : 'opacity-0'"
            >{{ 'Successfully built ' + buildInfo.containerId }}</span><span
              class="block text-gray-500 dark:text-gray-400 transition-opacity duration-150"
              :class="built ? 'opacity-100' : 'opacity-0'"
            >Successfully tagged angelxehg.com:latest</span></code></pre>
          </section>

          <!--
            Resources: skills as provisioned services, with honest statuses.
            Each tile is provisioned by the layer that declares it in
            `provides`, so the grid is downstream of the manifest rather than a
            second, independent description of the same person.
          -->
          <section>
            <p class="mb-3 text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
              resources
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="r in resources"
                :key="r.id"
                class="rounded-lg border border-gray-200 dark:border-gray-800 p-3 transition-all duration-200"
                :class="tileReady(r) ? 'opacity-100' : 'opacity-40 grayscale'"
              >
                <div class="flex items-center gap-1.5 text-[11px]">
                  <span class="h-2 w-2 rounded-full" :class="statusDot(r.status)"></span>
                  <span class="text-gray-500 dark:text-gray-400">{{ r.id }}</span>
                </div>
                <p class="mt-2 text-sm font-semibold text-gray-900 dark:text-white">{{ r.title }}</p>
                <ul class="mt-1 space-y-0.5 text-xs text-gray-600 dark:text-gray-400">
                  <li v-for="item in r.items" :key="item">{{ item }}</li>
                </ul>
                <p class="mt-2 text-[11px]" :class="statusText(r.status)">{{ r.status }}</p>
              </div>
            </div>
          </section>

          <!-- Endpoints: contact links as exposed routes. -->
          <section>
            <p class="mb-3 text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
              endpoints
            </p>
            <ul class="space-y-1.5 text-sm">
              <li v-for="e in endpoints" :key="e.href" class="flex items-baseline gap-3">
                <span class="w-12 shrink-0 text-right text-[11px] text-gray-500 dark:text-gray-400">
                  {{ e.proto }}
                </span>
                <a
                  :href="e.href"
                  :rel="e.internal ? null : 'external'"
                  :title="e.title"
                  class="break-all text-gray-700 hover:text-emerald-600 hover:underline dark:text-gray-300 dark:hover:text-emerald-400"
                >{{ e.label }}</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
    <SiteFooter :build-info="buildInfo" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import SiteFooter from './SiteFooter.vue';

const props = defineProps({
  buildInfo: {
    type: Object,
    default: () => ({
      commit: 'dev',
      containerId: 'dev',
      builtAt: 'local',
      builtAtISO: '',
      astroVersion: '',
      region: 'mx-central-1',
    }),
  },
  /** Dockerfile layers from src/lib/manifest.ts, digests already resolved. */
  layers: { type: Array, default: () => [] },
  /** Resource tiles, each provisioned by the layer that declares its id. */
  resources: { type: Array, default: () => [] },
});

const endpoints = [
  { proto: 'https', title: 'Blog', href: '/blog/', label: 'angelxehg.com/blog', internal: true },
  { proto: 'smtp', title: 'Email', href: 'mailto:stdin@angelxehg.com', label: 'stdin@angelxehg.com' },
  { proto: 'https', title: 'LinkedIn', href: 'https://www.linkedin.com/in/angelxehg', label: 'linkedin.com/in/angelxehg' },
  { proto: 'https', title: 'GitHub', href: 'https://github.com/angelxehg', label: 'github.com/angelxehg' },
  { proto: 'https', title: 'Dev.to', href: 'https://dev.to/angelxehg', label: 'dev.to/angelxehg' },
  { proto: 'https', title: 'Threads', href: 'https://threads.net/angelxehg', label: 'threads.net/angelxehg' },
  { proto: 'https', title: 'Instagram', href: 'https://instagram.com/angelxehg', label: 'instagram.com/angelxehg' },
];

const statusDot = (status) =>
  status === 'operational' ? 'bg-emerald-500' : 'bg-amber-500';

const statusText = (status) =>
  status === 'operational'
    ? 'text-emerald-600 dark:text-emerald-400'
    : 'text-amber-600 dark:text-amber-400';

const FLAG = /(--[A-Za-z0-9][\w.-]*(?:=[^\s"]+)?)/;

/**
 * Split a manifest line so double-quoted runs (LABEL role="…") and `--flag`
 * tokens can be highlighted separately. Quotes are split first, then each run
 * is split again, so flags are found *inside* strings too — which is where
 * most of them live, e.g. FOCUS="--apis --iac".
 *
 * Takes the text verbatim: callers pass their own leading whitespace, since a
 * comment is indented off the args and the args are spaced off the instruction.
 */
const tokenize = (text) =>
  text
    .split(/("[^"]*")/)
    .filter(Boolean)
    .flatMap((run) => {
      const quoted = run.startsWith('"');
      return run
        .split(FLAG)
        .filter(Boolean)
        .map((part) => ({ text: part, quoted, flag: part.startsWith('--') }));
    });

// The card renders finished on the server and stays finished if the island
// never boots, so `built` starts true and the sequence *rewinds* it. Pending
// is styling only — every character below is in the DOM the whole time, and
// no state changes a layout property, so nothing reflows and the
// accessibility tree never changes.
const built = ref(true);
const doneCount = ref(0);
const uptime = ref(null);
const health = ref(null);

const layerDone = (i) => built.value || i < doneCount.value;

/** resource id -> index of the layer that provisions it. */
const providerIndex = computed(() => {
  const map = {};
  props.layers.forEach((layer, i) => {
    (layer.provides ?? []).forEach((id) => {
      map[id] = i;
    });
  });
  return map;
});

const tileReady = (r) => built.value || doneCount.value > providerIndex.value[r.id];

const dotPings = computed(() => built.value && health.value !== 'unhealthy');

const dotColor = computed(() =>
  built.value && health.value !== 'unhealthy' ? 'bg-emerald-500' : 'bg-amber-500',
);

/** What `docker ps` prints in its STATUS column, once we can compute it. */
const statusLabel = computed(() =>
  health.value ? `${uptime.value} (${health.value})` : uptime.value,
);

const healthText = computed(() =>
  health.value === 'unhealthy'
    ? 'text-amber-600 dark:text-amber-400'
    : 'text-emerald-600 dark:text-emerald-400',
);

/** docker/go-units HumanDuration, which is what `docker ps` prints. */
function humanDuration(ms) {
  const seconds = Math.floor(ms / 1000);
  if (seconds < 1) return 'Less than a second';
  if (seconds < 60) return `${seconds} seconds`;
  const minutes = Math.floor(seconds / 60);
  if (minutes === 1) return 'About a minute';
  if (minutes < 60) return `${minutes} minutes`;
  const hours = Math.round(minutes / 60);
  if (hours === 1) return 'About an hour';
  if (hours < 48) return `${hours} hours`;
  const days = Math.floor(hours / 24);
  if (days < 14) return `${days} days`;
  if (days < 60) return `${Math.floor(days / 7)} weeks`;
  if (days < 730) return `${Math.floor(days / 30)} months`;
  return `${Math.floor(days / 365)} years`;
}

function refreshUptime() {
  const since = Date.parse(props.buildInfo.builtAtISO);
  const elapsed = Date.now() - since;
  // A missing or future timestamp means we know less than the static markup
  // already says, so leave `up since <date>` alone.
  if (Number.isNaN(since) || elapsed < 0) return;
  uptime.value = `Up ${humanDuration(elapsed)}`;
}

// HEALTHCHECK, for real: a same-origin probe on the interval the manifest
// advertises, reporting the page's own actual reachability. Nothing simulated.
const HEALTH_INTERVAL_MS = 30_000;
const PLAYED_KEY = 'ax:build';

const timers = [];
let healthTimer = null;

async function probe() {
  if (document.visibilityState !== 'visible') return;
  try {
    const res = await fetch('/favicon.ico', { method: 'HEAD', cache: 'no-store' });
    // `curl -f` fails on HTTP errors, so a 5xx is unhealthy, not merely reachable.
    health.value = res.ok ? 'healthy' : 'unhealthy';
  } catch {
    health.value = 'unhealthy';
  }
  refreshUptime();
}

function startHealthcheck() {
  probe();
  healthTimer = setInterval(probe, HEALTH_INTERVAL_MS);
}

function runBuild() {
  built.value = false;
  doneCount.value = 0;
  let at = 0;
  props.layers.forEach((layer, i) => {
    at += layer.ms;
    timers.push(setTimeout(() => (doneCount.value = i + 1), at));
  });
  timers.push(
    setTimeout(() => {
      built.value = true;
      try {
        sessionStorage.setItem(PLAYED_KEY, '1');
      } catch {
        /* sessionStorage throws in some sandboxed contexts; the replay guard
           is a nicety, not a correctness requirement */
      }
      startHealthcheck();
    }, at + 120),
  );
}

onMounted(() => {
  refreshUptime();

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let alreadyPlayed = true;
  try {
    alreadyPlayed = sessionStorage.getItem(PLAYED_KEY) === '1';
  } catch {
    alreadyPlayed = true;
  }

  if (!reduced && !alreadyPlayed && props.layers.length) {
    runBuild();
  } else {
    startHealthcheck();
  }
});

onBeforeUnmount(() => {
  timers.forEach(clearTimeout);
  if (healthTimer) clearInterval(healthTimer);
});
</script>
