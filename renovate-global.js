module.exports = {
  platform: 'github',
  // The repository we want to update
  repositories: ['dummy-alb1/k8s-test'],
  // Critical: This forces Renovate to use the Forking model
  forkProcessing: "enabled",
  // Optional: Optimize speed by only looking for docker updates
  enabledManagers: ["kubernetes", "kustomize"], 
  // Optional: Clean up stale branches on the fork
  prConcurrentLimit: 0,
  prHourlyLimit: 0,
  onboarding: false,
  requireConfig: 'optional',
  forkToken: process.env.RENOVATE_TOKEN,
};
