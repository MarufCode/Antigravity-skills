# Test Case Generator Skill

Turn any feature description into a professional, robust test suite in seconds.

## Overview

This skill is designed for QA Engineers who need to ensure deep testing coverage. It goes beyond simple "if then" scenarios to generate a comprehensive matrix of test cases, covering:
- **Positive Scenarios**: The standard user journey.
- **Negative Scenarios**: Input validation, error handling, and security bypass attempts.
- **Testing Methods**: Smoke, Sanity, Regression, Boundary, and Integration testing.

## Key Features

- **Full Attribute List**: Every test case includes ID, Priority, Steps, and Expected Results.
- **Broad Coverage**: Automatically suggests tests for UI, API, and Data integrity.
- **Import Ready**: Outputs in high-quality Markdown tables that can be easily copied to Jira, GitHub, or Excel.

## How to Trigger

- "Generate test cases for a Shopping Cart"
- "Create positive and negative test scenarios for a Password Reset feature"
- "Brainstorm edge cases for a File Upload component"

## Sample Output Format

| Case ID | Description | Priority | Test Type | Pre-conditions | Test Steps | Expected Result |
|:---|:---|:---|:---|:---|:---|:---|
| TC_01 | Valid user login | P0 | Functional | User is on login page | 1. Enter valid email<br>2. Enter valid password<br>3. Click Login | User redirected to Dashboard |
| TC_02 | Invalid password attempt | P1 | Security | User is on login page | 1. Enter valid email<br>2. Enter wrong password<br>3. Click Login | "Invalid credentials" error message displayed |

## Installation

This skill is part of your local `my_own_skills/` directory. Simply point your AI assistant here to unlock advanced test generation.
