# Repository Security Best Practices

Even if your repository is private, keeping an exposed API key in your Git history remains a major security risk.

---

### Why an Exposed Key in a Private Repo Is Still Dangerous

* **Supply Chain & Team Risk:** Anyone granted read access to the repository (e.g., future collaborators, contractors, or continuous integration/deployment tools like GitHub Actions or Vercel) can inspect the commit history and retrieve that secret key.
* **Third-Party Service Leaks:** If a developer's local machine or GitHub account is ever compromised, or if a third-party app or integration with repository access gets breached, all historical secrets inside the repo become accessible.
* **Accidental Public Release:** It is extremely common for private repositories to eventually be made public, open-sourced, or pushed to a secondary public remote. When that happens, web scrapers immediately scan the entire history and extract every key ever committed.
* **Appwrite Key Invalidation:** Once Appwrite or security scanners detect that a key pattern was committed to source control (even in a private repository), it is standard practice to treat that credential as compromised and revoke it immediately.

---

### What You Should Do

1. **Revoke the Old Key:** Log in to your Appwrite Console, navigate to **Project Settings** $\rightarrow$ **API Keys**, and revoke/delete the key ending in `...dd368`.
2. **Generate a New Key:** Create a fresh API key with only the necessary scopes.
3. **Use `.env` and `.gitignore`:** Save the new key in your local environment files (e.g., `adminsite/.env` or `publicsite/.env.local`) and ensure that the `.env*` pattern is listed in your `.gitignore` file so it is never committed to our remote repository.
