# Infrastructure

## Monorepo Setup

My Future Self (MFS) uses a monorepo architecture managed with Turborepo and pnpm workspaces. This provides:

- Shared code between applications
- Consistent development environment
- Dependency management
- Build caching and parallel execution
- Standardized scripts across projects

### Workspace Structure

```
myfutureself/
├── apps/
│   ├── launcher/     # Raycast extension
│   ├── mobile/       # Expo mobile app
│   └── web/          # Next.js web app
├── packages/         # Shared libraries
├── pnpm-workspace.yaml
└── turbo.json
```

### Build System

Turborepo is configured with these primary tasks:

- `build` - Compile apps and packages for production
- `dev` - Run development servers
- `check-types` - TypeScript type checking
- `lint` - Code linting
- `test` - Run tests

All tasks leverage Turborepo's caching and intelligent pipeline execution.

### Technologies

#### Web (Next.js)

- Next.js 15 (canary) with App Router
- React 19.1
- TypeScript
- Tailwind CSS 4

#### Mobile (Expo)

- Expo SDK 53 (preview)
- React Native 0.76
- Expo Router
- TypeScript

#### Launcher (Raycast)

- Raycast Extension API
- TypeScript
- React

### Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run development servers: `pnpm dev`
4. Build all apps: `pnpm build`

### Configuration Files

- `turbo.json` - Defines task pipelines and dependencies
- `pnpm-workspace.yaml` - Defines workspace packages
- `package.json` - Root package configuration
- App-specific configuration in respective directories
