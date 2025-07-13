# Development Workflow

## Branching Strategy
| **Branch** | **Purpose** | **Naming Convention**|
|------------|-------------|---------------------|
| main       | Production-ready, only merged from dev | NA|
| dev        | Integration/QA branch, which features are merged | NA|
| feature/*  | Short-lived dev work (will be deleted after merging into ```dev```)   | feature/[task number]-[task name] e.g.: feature/32-add-login-button|
| fix/*      | Fix bugs. Always merge into ```dev``` | fix/[task name] e.g.: fix/44-wrong-get-user-query |
|docs        | Relevent docs of project | NA
## Development Workflow

1. Branch workflow
    ```
    main <- dev <- feature/xyz
    main <- dev <- fix/xyz
    ```

2. Developer cretaes **feature/xyz** or **fix/xyz** from dev
    * Feature branches should be small and atomic -- focused on a single, well-defined change for easier review and integration, Example of atomic branches: 
    * | **Good Branch Example** | **Why It's Atomic and Well Defined** |
      |-------------------------|--------------------------------------|
      |feature/44-add-login-button| Add only a login button UI component|
      |feature/22-add-login-validation|Add just the validation logic for the login form|
      |fix/32-payment-crash-on-submit|Fix a specific in payment submission logic|


3. Deveoper works locally and opens a **PR (Pull Request)** into dev
    * PR triggers CI pipeline
    * PR must be approved (code review policy)

4. After QA passes, A maintainer merges ```dev->main``` via PR
    * Tag production version (e.g., v1.2.9)

