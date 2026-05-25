/**
 * Monitoring and Observability utilities
 */

export function logError(error: unknown, context: Record<string, any>) {
  // Integrasi dengan Sentry/Logtail di masa depan
  console.error('[PRODUCTION_ERROR]', {
    timestamp: new Date().toISOString(),
    error,
    context: { ...context, redacted: true },
  })
}

export function trackLatency(route: string, duration: number) {
  // Metrics monitoring
  console.info('[METRICS]', {
    timestamp: new Date().toISOString(),
    route,
    durationMs: duration,
  })
}
