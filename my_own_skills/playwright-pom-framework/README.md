# Playwright POM Scaffolder

A powerful skill for AI assistants to generate full-scale Playwright testing frameworks from scratch.

## Overview

This skill enables an AI developer to quickly scaffold a professional Playwright automation project. Instead of writing individual test scripts, it builds a complete ecosystem including:
- **Project Structure**: Organized by Page Object Model roles.
- **TypeScript Support**: Full type safety and modern JS features.
- **Custom Reporting**: Pre-configured reporting for local and CI/CD use.
- **Best Practices**: Built-in adherence to official Playwright guidelines.

## Installation

Since this is part of your `my_own_skills` folder, you can use it by pointing your AI assistant to this directory.

If you are using Antigravity, it will automatically pick up this skill if you reference it or if the trigger phrases match.

## Usage

Trigger phrases include:
- "Create a playwright framework for [domain]"
- "Scaffold a playwright POM project"
- "Set up a full playwright automation project with custom reporters"

### Example Prompt

> "Create a playwright framework for `https://qbm.svkm.ac.in`. I want to automate the login process and verify the student dashboard. Use TypeScript and add a custom HTML reporter."

## Folder Structure of Generated Project

- `/pages`: Contains Page Object classes.
- `/tests`: Contains test specification files.
- `/utils`: Common utilities and helpers.
- `/reporters`: Custom reporter implementations.
- `playwright.config.ts`: Main project configuration.

## Best Practices

- Use **Locators** instead of selectors.
- Implement **Page Objects** to keep tests readable.
- Use **Fixtures** for sharing setup code across tests.
- Keep tests **Atomic** and **Independent**.
