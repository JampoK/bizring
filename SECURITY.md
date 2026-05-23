# Security Baseline

## Core Principles
1. **Server-side Security**: Sensitive operations and business logic are performed exclusively on the server.
2. **Least Privilege**: Users and API consumers are granted minimal permissions.
3. **Environment Security**: Secrets are never checked into version control.

## Configurations
- **CORS**: Strictly defined to allow only trusted origins.
- **CSRF**: Origin-based protection is enabled.
- **Cookies**: Set to `httpOnly` and `secure` (in production).
