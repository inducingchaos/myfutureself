# Specifications

## Overview

Specifications for My Future Self (MFS) app, including vision, technical design, and implementation details.

## Vision

-   App to help users get clarity about their life path
-   Digital brain that combines ChatGPT functionality with productivity features
-   Purpose-built for progressing in life, achieving goals, and facilitating action
-   Optimized for thought-to-action efficiency
-   Solution for "lack of memory permanence" in humans

## Technical Stack

-   iOS-first using bleeding-edge versions of Expo
-   API routes and simple site with Next.js 15
-   Raycast Extension for internal prototyping and testing
-   Turborepo for monolithic management
-   Upstash KV as initial database, migration to Drizzle & Planetscale MySQL when necessary
-   Clerk for authentication
-   PNPM as package manager
-   T3 Env for environment variables
-   shadcn/ui component library with TailwindCSS
-   PostHog for product analytics & AI observability
-   Zod 4 for runtime validation

## Design Elements

-   Hoefler Text as primary typeface
-   Lock Screen widget for displaying relevant thoughts or statistics
-   Lock Screen control for quick access to chat/voice input

## Development Approach

-   Start with structuring and tool configuration
-   Initialize Turborepo, Expo, Next, and Raycast Extension
-   First features: chat with basic thread storage, auth, and CRON notification tools
-   Segment releases in internal development roadmap
