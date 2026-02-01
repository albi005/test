module.exports = {
  platform: 'github',
  onboarding: false,
  forkToken: process.env.RENOVATE_TOKEN,
  requireConfig: 'optional',
  repositories: [
    {
      repository: 'dummy-alb1/k8s-test',
      enabledManagers: ['kubernetes'],
      kubernetes: {
        managerFilePatterns: ['startsch/startsch.yaml'],
      },
      packageRules: [
        {
          description: 'Disable all updates by default for this repo',
          matchPackageNames: ['*'],
          enabled: false,
        },
        {
          description: 'Enable only the specific image and force digest pinning',
          matchPackageNames: ['ghcr.io/kir-dev/startsch'],
          enabled: true,
          pinDigests: true,
          extends: [":rebaseStalePrs"],
        },
      ],
    },
  ],
};
