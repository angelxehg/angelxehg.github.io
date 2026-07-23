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
          <span class="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span
              class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
            ></span>
            <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span class="text-gray-500 dark:text-gray-400">angelxehg.com</span>
          <span class="ml-auto inline-flex items-center gap-1.5">
            <span class="text-emerald-600 dark:text-emerald-400 font-semibold">operational</span>
            <span class="text-gray-300 dark:text-gray-600" aria-hidden="true">·</span>
            <span class="text-gray-500 dark:text-gray-400">{{ buildInfo.region }}</span>
          </span>
        </div>

        <div class="p-6 sm:p-8 space-y-8">
          <!-- Header -->
          <header class="space-y-1">
            <h1 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Angel Hurtado
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              <span class="text-emerald-600 dark:text-emerald-400">$</span>
              Backend Developer — Python · APIs · Cloud
            </p>
          </header>

          <!-- Manifest: the bio as a readable, honest Dockerfile. -->
          <section>
            <p class="mb-2 text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
              manifest
            </p>
            <pre
              class="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/40 p-4 text-xs sm:text-sm leading-relaxed"
            ><code><span class="text-gray-500 dark:text-gray-400"># ~/angel-hurtado.dockerfile</span>
<span class="text-emerald-600 dark:text-emerald-400">FROM</span> mexico:latest
<span class="text-emerald-600 dark:text-emerald-400">LABEL</span> role=<span class="text-sky-600 dark:text-sky-400">"Backend Developer"</span>
<span class="text-emerald-600 dark:text-emerald-400">LABEL</span> langs=<span class="text-sky-600 dark:text-sky-400">"es-MX (native) · en (professional)"</span>
<span class="text-emerald-600 dark:text-emerald-400">RUN</span> pip install django fastapi celery taskiq
<span class="text-emerald-600 dark:text-emerald-400">ENV</span> FOCUS=<span class="text-sky-600 dark:text-sky-400">"apis · iac · aws · performance"</span>
<span class="text-emerald-600 dark:text-emerald-400">COPY</span> ./frontend ./  <span class="text-gray-500 dark:text-gray-400"># astro · tailwind · vue</span>
<span class="text-emerald-600 dark:text-emerald-400">EXPOSE</span> 443
<span class="text-emerald-600 dark:text-emerald-400">CMD</span> [<span class="text-sky-600 dark:text-sky-400">"ship"</span>, <span class="text-sky-600 dark:text-sky-400">"--zero-javascript"</span>]</code></pre>
          </section>

          <!-- Resources: skills as provisioned services, with honest statuses. -->
          <section>
            <p class="mb-3 text-[11px] uppercase tracking-widest text-gray-500 dark:text-gray-400">
              resources
            </p>
            <div class="grid gap-3 sm:grid-cols-2">
              <div
                v-for="r in resources"
                :key="r.id"
                class="rounded-lg border border-gray-200 dark:border-gray-800 p-3"
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
import SiteFooter from './SiteFooter.vue';

defineProps({
  buildInfo: {
    type: Object,
    default: () => ({ commit: 'dev', builtAt: 'local', astroVersion: '', region: 'mx-central-1' }),
  },
});

// "deploying" is deliberately honest: infra/AWS is a strong interest, not a
// claim of production mastery — so it reads amber, not green.
const resources = [
  { id: 'compute/backend', title: 'Backend', items: ['Python', 'Django', 'FastAPI'], status: 'operational' },
  { id: 'queue/workers', title: 'Workers', items: ['Celery', 'TaskIQ'], status: 'operational' },
  { id: 'iac/infrastructure', title: 'Infrastructure', items: ['AWS', 'IaC', 'Linux', 'Docker'], status: 'deploying' },
  { id: 'edge/frontend', title: 'Frontend', items: ['Astro', 'Tailwind', 'Vue'], status: 'operational' },
];

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
</script>
