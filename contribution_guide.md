# Contribution Guide

The guide outlines the standard commit message types and their usage to ensure a clear consistent, and automated-friendly Git history.

## Commit Message Structure
Each commit message should follow this structure:

```
<type>(<scope>): <short description>
[optional body: explain what and why, not how]
[optional footer: BREAKING CHANGE:, Close #issue, etc.] 
```

```
e.g.: git commit -m "revert: feat(auth): add user registration endpoint" -m "This revert commit abc1234 beacuse it introduced a critical bug." -m "Closes #87"
```

* **type** (Required): The type of change you're committing.
* **Scope** (optional): A small, description context for the change (e.g., auth, ui, api, docs, config, ...etc). Use camelCase. IF the change affects multiple scopes, you can use or omit it.
* **description** (required): A concise, imperative, persent-tense description of the change (max 50-72 characters). Do not end with a period.
* **optional body**: A longer description of the ocmmit. Use imperative, present tense. Explain why the change was made. What problem it solves, and any context that might be useful. Wrap lines at 72 characters.
* **optional footer**: Used for breawking changes, referencing issues, or other meta-information.
    * Breaking Changes: Start with **BREAKING CHANGES**: followed by a description of the change and justification.
    * Issue References: Use **Close #123, Fixes #456, Refs #789**.


## Common Commit Type
Here are the accepted commit types

1. **feat** (Features)
2. **fix** (Bug Fixes)
3. **docs** (Documents)
4. **style** (Code Style)
5. **refact** (Code Rafactoring)
6. **test** (Tests)
7. **chore** (Chore)
8. **build** (Build System)
9. **ci** (Continuous Integration)
10. **perf** (Performance Improvements)
11. **revert** (Reverts)

### Example of each above
1. **feat** (Features)
    * Definition: A new feature or enhancement. This signifies a change that adds new functionality or significantly improves existing functionality.
    * Example:
    ``` 
    feat(ui): implement dark mode toggle
     ```

2. **Fix** (Bug Fixes)
    * Definition: A bug fix. This type addresses a problem or defect in the codebase.
    * Impact on Versioning: Typically leads to a patch version increment (e.g., v1.0.0 -> v1.0.1).
    * Example:
    ```
    fix(auth): correct password reset token validation (Closes #123)
    ```

3. **docs** (Documents)
    * Definition: Changes to documentation only (e.g., README, JSDoc comments, inline comments, CONTRIBUTING guide).
    * Impact on Versioning: No direct impact on versioning.
    * Example:
    ```
    docs(api): clarify endpoint usage for /users
    ```

4. **style** (Code Style)
    * Definition: Changes that do not affect the meaning of the code (e.g., formatting, semicolons, whitespace, linting fixes).
    * Impact on Versioning: No direct impact on versioning.
    * Example:
    ```
    style(login): add missing semicolons
    ```

5. **refact** (Code Rafactoring)
    * Definition: A code change that neither fixes a bug nor adds a feature. This involves restructuring existing code without changing its external behavior.
    * Impact on Versioning: No direct impact on versioning, unless a BREAKING CHANGE is explicitly stated in the footer.
    * Example:
    ```
    refactor(utils): extract validation logic to new module
    ```

6. **test** (Tests)
    * Definition: Adding missing tests or correcting existing tests.
    * Impact on Versioning: No direct impact on versioning.
    * Example:
    ```
    test(auth): add unit tests for password reset flow
    ```

7. **chore** (Chore)
    * Definition: Routine tasks, maintenance, or changes to the build process or auxiliary tools and libraries. This covers anything that doesn't directly relate to user-facing features or bug fixes.
    * Impact on Versioning: No direct impact on versioning.
    * Example:
    ```
    chore(deps): update all dependencies
    ```

8. **build** (Build System)
    * Definition: Changes that affect the build system or external dependencies (e.g., webpack, babel, npm scripts, Dockerfile).
    * Example:
    ```
    build: update webpack configuration for code splitting
    ```

9. **ci** (Continuous Integration)
    * Definition: Changes to our CI configuration files and scripts (e.g., GitHub Actions, Azure Pipeline).
    * Example:
    ```
    ci: add linting step to CI pipeline
    ```

10. **perf** (Performance Improvements)
    * Definition: A code change that improves performance.
    * Example:
    ```
    perf(dashboard): load dashboard widgets concurrently
    ```


11. **revert** (Reverts)
    * Definition: Reverts a previous commit. The body should mention the SHA and original commit message.
    * Example:
    ```
    revert: feat(auth): add user registration endpoint
    ```



## General Guidelines for Committing:

* Commit Often, Commit Early: Smaller, focused commits are easier to review and revert.
* One Change Per Commit: Each commit should ideally address a single logical change. If you fix a bug and add a feature, split them into two commits.
* Be Specific: Your description should be clear enough that someone can understand the change without looking at the code.
* Imperative Mood: Use the imperative mood in the subject line (e.g., "add," "fix," "refact," not "added," "fixes," "refactoring").
* Avoid Punctuation at End: Do not end the subject line with a period.
* Line Length: Keep the subject line to around 50-72 characters. Body lines should wrap at 72 characters.
