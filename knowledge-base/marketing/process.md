# Development Process

## Overview

Documentation of the development process for My Future Self (MFS), focusing on the technical implementation approach and project management.

## Project Structure

-   Monolithic management using Turborepo
-   Apps: iOS (Expo), API/site (Next.js), Extension (Raycast)
-   Knowledge base for documentation
-   Packages for shared code
-   Tooling directory for utilities

## Development Workflow

-   Start with structure and tool configuration
-   Initialize core frameworks and test builds
-   Follow incremental development approach
-   Build features in priority order
-   Document decisions and processes

## AI Collaboration

-   Raycast AI for project coordination and thinking
-   Cursor AI for building and implementation
-   AI agents with specific roles and instructions
-   Project-specific AI instructions in .cursor/rules
-   llms.txt compilation for AI context

## File Organization

-   Knowledge base with structured directories
-   Source files for original thoughts
-   No deletion of previous content, using archiving instead
-   Possible indexing system for references (5.1, a, 3, etc.)
-   Clear separation between AI-beneficial and marketing-only content

## Implementation Strategy

-   iOS-first approach with Expo
-   External payment and account creation to avoid Apple fees
-   Deployment on Vercel
-   Database evolution from Upstash KV to relational when needed
-   Simple initial features before complex capabilities
