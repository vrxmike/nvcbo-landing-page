# Git Branches Manual for NVCBO Landing Page Project

## 📋 Project Overview

**Repository:** `nvcbo-landing-page`  
**Owner:** `vrxmike`  
**Primary URL:** https://github.com/vrxmike/nvcbo-landing-page  
**Live Site:** https://vrxmike.github.io/nvcbo-landing-page/  
**Created:** October 15, 2025  

---

## 🌳 Branch Structure & Strategy

### Current Active Branches

#### 1. `master` (Production Branch) 🚀
- **Purpose:** Main production branch with stable, tested code
- **Auto-Deploy:** GitHub Pages deployment triggers on every push
- **Protection:** Should be protected from direct pushes in production
- **Last Commit:** `63456d9` - "Add comprehensive custom domain setup documentation"

**When to use:**
```bash
# Only for final, tested changes ready for production
git checkout master
git merge feature/tested-feature
git push origin master  # Triggers live deployment
```

#### 2. `documentation-updates` (Development Branch) 📚
- **Purpose:** Contains comprehensive WordPress and website expansion documentation
- **Status:** 4,031 lines of documentation across 5 files
- **Files Added:**
  - `PHASE3_ADVANCED_TECHNOLOGIES.md`
  - `WEBSITE_EXPANSION_STRATEGY.md`
  - `WORDPRESS_IMPLEMENTATION_PLAN.md`
  - `WORDPRESS_INTEGRATION_STRATEGY.md`
  - `WORDPRESS_VS_ALTERNATIVES_ANALYSIS.md`

**Working with this branch:**
```bash
git checkout documentation-updates
# Continue documentation work
git add new-docs.md
git commit -m "docs: Add implementation guidelines"
git push origin documentation-updates
```

#### 3. `gh-pages-staging` (Staging Branch) 🧪
- **Purpose:** Testing environment for changes before production
- **Use Case:** Preview changes without affecting live site
- **Workflow:** Feature → Staging → Master

#### 4. `copilot/update-asset-paths-index-html` (Legacy Branch) ⚠️
- **Status:** Under evaluation for deletion
- **Purpose:** Asset path fixes (likely superseded by manual fixes)
- **Recommendation:** Delete after confirming changes are in master

### Deleted Branches (Recently Cleaned Up) ✅

#### `copilot/add-gh-actions-for-assets` ❌
- **Deleted:** October 15, 2025
- **Reason:** Changes were merged into master via PR #3
- **Command Used:** `git push origin --delete copilot/add-gh-actions-for-assets`

#### `copilot/update-pages-deployment-workflow` ❌
- **Deleted:** October 15, 2025
- **Reason:** Superseded by manual workflow optimizations
- **Command Used:** `git push origin --delete copilot/update-pages-deployment-workflow`

---

## 🎯 Understanding Remote HEAD

### What is `remotes/origin/HEAD -> origin/master`?

**Definition:** A symbolic reference pointing to the default branch on GitHub

**Verification Commands:**
```bash
# Check what remote HEAD points to
git symbolic-ref refs/remotes/origin/HEAD
# Output: refs/remotes/origin/master

# Verify remote HEAD configuration
git ls-remote --symref origin HEAD
# Output: ref: refs/heads/master  HEAD

# Both master and HEAD point to same commit
git rev-parse refs/remotes/origin/HEAD
git rev-parse refs/remotes/origin/master
# Both output: 63456d9a071278214be247dffa745ca927954d48
```

**Why This Matters:**
1. **New Contributors:** Automatically start on `master` when cloning
2. **Default Operations:** `git pull origin` uses `master` by default
3. **GitHub Pages:** Deploys from the default branch (`master`)
4. **Repository Management:** Clear entry point for collaborators

### Managing Remote HEAD
```bash
# Change default branch (if needed)
git remote set-head origin documentation-updates

# Reset to GitHub's default setting
git remote set-head origin -a

# Remove remote HEAD reference
git remote set-head origin -d
```

---

## 👥 Collaboration Workflow

### For New Contributors

**Initial Setup:**
```bash
# Clone repository (automatically checks out master)
git clone https://github.com/vrxmike/nvcbo-landing-page.git
cd nvcbo-landing-page

# Verify you're on master and up-to-date
git branch -v
git pull origin master
```

**Feature Development Workflow:**
```bash
# Start from latest master
git checkout master
git pull origin master

# Create feature branch
git checkout -b feature/donation-form
# or: git checkout -b fix/mobile-responsiveness
# or: git checkout -b docs/wordpress-setup

# Work on feature
echo "new content" >> newfile.md
git add .
git commit -m "feat: Add donation form to homepage"

# Push feature branch
git push origin feature/donation-form

# Create Pull Request on GitHub
# After approval, merge to master
```

### Branch Naming Conventions

**Recommended Patterns:**
```bash
feature/description     # New features
fix/description        # Bug fixes
docs/description       # Documentation updates
refactor/description   # Code refactoring
style/description      # UI/style changes
chore/description      # Maintenance tasks

# Examples for NVCBO:
feature/volunteer-registration
fix/mobile-navigation
docs/deployment-guide
refactor/css-organization
style/orange-theme-enhancement
chore/dependency-updates
```

### Safe Deployment Strategy

**Development Flow:**
```
Local Development
       ↓
Feature Branch (origin/feature/name)
       ↓
gh-pages-staging (optional testing)
       ↓
master (production deployment)
       ↓
GitHub Pages (live site)
```

**Commands:**
```bash
# Safe development
git checkout -b feature/new-feature
# ... work and test locally ...
git push origin feature/new-feature

# Optional staging test
git checkout gh-pages-staging
git merge feature/new-feature
git push origin gh-pages-staging
# Test on staging URL

# Production deployment
git checkout master
git merge feature/new-feature
git push origin master  # 🚨 TRIGGERS LIVE DEPLOYMENT
```

---

## 🗑️ Branch Management & Cleanup

### When to Delete Branches

**✅ SAFE to Delete:**
- Merged feature branches (changes in master)
- Superseded branches (better solution implemented)
- Failed experiments or proof-of-concepts
- Old branches (>3 months with no activity)

**⚠️ CONSIDER Before Deleting:**
- Active development branches
- Branches with unmerged valuable work
- Staging/testing branches in use

**❌ NEVER Delete:**
- `master` (production branch)
- Active feature branches
- Branches with unique, unmerged work

### Deletion Commands

**Delete Remote Branch:**
```bash
# Safe deletion (recommended)
git push origin --delete branch-name

# Alternative syntax
git push origin :branch-name
```

**Delete Local Branch:**
```bash
# Safe deletion (prevents deleting unmerged work)
git branch -d branch-name

# Force deletion (use with caution)
git branch -D branch-name
```

**Cleanup Local References:**
```bash
# Remove local references to deleted remote branches
git remote prune origin

# See what would be pruned (dry run)
git remote prune origin --dry-run
```

### NVCBO Cleanup History

**October 15, 2025 Cleanup:**
```bash
# Deleted superseded copilot branches
git push origin --delete copilot/add-gh-actions-for-assets
git push origin --delete copilot/update-pages-deployment-workflow

# Cleaned up local references
git remote prune origin

# Result: Cleaner branch structure focused on active development
```

---

## 📊 Branch Status Monitoring

### Useful Commands

**Check All Branches:**
```bash
# List all branches (local and remote)
git branch -a

# Show branch relationships
git show-branch --all

# Detailed remote information
git remote show origin
```

**Compare Branches:**
```bash
# See commits in feature branch not in master
git log master..feature/branch-name

# See files changed between branches
git diff master..feature/branch-name --name-only

# Find common ancestor
git merge-base master feature/branch-name
```

**Branch Status:**
```bash
# Show tracking relationships
git branch -vv

# Check if branch is merged
git branch --merged master
git branch --no-merged master
```

### Current Status Check (October 15, 2025)

**Active Remote Branches:**
```
origin/HEAD -> origin/master (default)
origin/master (production)
origin/documentation-updates (current work)
origin/gh-pages-staging (staging)
origin/copilot/update-asset-paths-index-html (evaluation pending)
```

**Local Branches:**
```
* master (tracking origin/master)
  documentation-updates (tracking origin/documentation-updates)
```

---

## 🛡️ Best Practices & Safety

### Production Safety

**Protected Branch Settings (Recommended on GitHub):**
- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators in restrictions

**Pre-Deploy Checklist:**
```bash
# Before pushing to master:
1. Test locally: npm test (if applicable)
2. Check build: ensure no errors
3. Verify assets: images, fonts load correctly
4. Mobile test: responsive design works
5. Performance: page load speed acceptable
```

### Development Safety

**Always Work in Feature Branches:**
```bash
# DON'T do this (direct work on master):
git checkout master
git add .
git commit -m "quick fix"
git push origin master  # 🚨 IMMEDIATE DEPLOYMENT

# DO this instead:
git checkout -b fix/quick-issue
git add .
git commit -m "fix: resolve quick issue"
git push origin fix/quick-issue
# Create PR, review, then merge
```

**Emergency Rollback:**
```bash
# If bad code reaches master:
git checkout master
git revert HEAD  # Creates new commit that undoes last change
git push origin master  # Deploys the fix

# For multiple commits:
git revert HEAD~3..HEAD  # Reverts last 3 commits
```

### Commit Message Standards

**Format:**
```
type(scope): description

body (optional)

footer (optional)
```

**Examples for NVCBO:**
```bash
feat(donations): add PayPal integration
fix(mobile): resolve navigation menu overlap
docs(setup): add WordPress installation guide
style(theme): implement orange color scheme
refactor(css): reorganize stylesheet structure
chore(deps): update Bootstrap to v5.3.6
```

---

## 🚀 Advanced Workflows

### Hotfix Workflow

**For Critical Production Issues:**
```bash
# Create hotfix from master
git checkout master
git checkout -b hotfix/critical-security-fix

# Make minimal fix
git add security-patch.js
git commit -m "fix: patch security vulnerability"

# Deploy immediately
git checkout master
git merge hotfix/critical-security-fix
git push origin master  # 🚨 EMERGENCY DEPLOYMENT

# Clean up
git push origin hotfix/critical-security-fix
git branch -d hotfix/critical-security-fix
```

### Release Workflow (Future)

**When NVCBO Grows:**
```bash
# Create release branch
git checkout -b release/v2.0.0

# Finalize release
git commit -m "chore: bump version to 2.0.0"

# Merge to master and tag
git checkout master
git merge release/v2.0.0
git tag -a v2.0.0 -m "Release version 2.0.0"
git push origin master --tags
```

### Documentation Sync Workflow

**For Documentation Updates:**
```bash
# Work in docs branch
git checkout documentation-updates
git add new-documentation.md
git commit -m "docs: add WordPress migration guide"
git push origin documentation-updates

# When ready to publish docs to live site:
git checkout master
git merge documentation-updates
git push origin master  # Publishes docs to live site
```

---

## 🔧 Troubleshooting

### Common Issues & Solutions

**Issue: "Branch not found"**
```bash
# Refresh remote references
git fetch origin

# List available branches
git branch -r
```

**Issue: "Cannot delete current branch"**
```bash
# Switch to different branch first
git checkout master
git branch -d feature/completed-feature
```

**Issue: "Remote branch already deleted"**
```bash
# Clean up local references
git remote prune origin
git fetch --prune
```

**Issue: "Merge conflict"**
```bash
# Resolve conflicts manually, then:
git add resolved-file.js
git commit -m "resolve: merge conflict in feature integration"
```

### Emergency Procedures

**If Master is Broken:**
```bash
# Option 1: Revert last commit
git revert HEAD
git push origin master

# Option 2: Reset to last good commit (dangerous!)
git reset --hard good-commit-hash
git push origin master --force-with-lease
```

**If Wrong Branch Deployed:**
```bash
# Quick rollback to previous working state
git checkout master
git reset --hard HEAD~1  # Go back one commit
git push origin master --force-with-lease
```

---

## 📈 Future Considerations

### As NVCBO Grows

**Multi-Environment Strategy:**
```
development → testing → staging → production
     ↓           ↓         ↓          ↓
   dev-branch   test     staging    master
```

**Team Scaling:**
- Feature branch per developer
- Release branches for version control
- Automated testing on all PRs
- Code review requirements

**Integration with WordPress Migration:**
```bash
# When migrating to WordPress:
git checkout -b wordpress-migration
# Develop WordPress version
# Test extensively
# Deploy to staging first
# Finally merge to master for live deployment
```

### Automation Opportunities

**GitHub Actions Integration:**
- Automated testing on PR creation
- Automatic deployment to staging
- Performance monitoring
- Security scanning

**Branch Protection Rules:**
- Require passing tests before merge
- Require review from NVCBO team members
- Automatic deletion of merged branches

---

## 📚 Quick Reference

### Essential Commands
```bash
# Branch Management
git branch -a                    # List all branches
git checkout -b new-branch       # Create and switch to branch
git push origin branch-name      # Push branch to remote
git push origin --delete branch  # Delete remote branch

# Collaboration
git fetch origin                 # Get latest remote changes
git pull origin master          # Update local master
git merge feature-branch        # Merge feature to current branch
git remote prune origin         # Clean up deleted remote refs

# Safety Checks
git status                      # Check working directory status
git log --oneline -5           # See recent commits
git diff master..feature       # Compare branches
git merge-base master feature  # Find common ancestor
```

### Branch Status Quick Check
```bash
# Run this weekly to maintain clean repository:
git branch --merged master | grep -v master  # Show merged branches (safe to delete)
git branch --no-merged master                # Show unmerged branches (review needed)
git remote show origin                       # Check remote branch status
```

---

## 📞 Support & Resources

### Documentation Files in Repository
- `README.md` - Project overview and setup
- `DEPLOYMENT_FIXES.md` - Historical deployment issues and solutions
- `QUICK_FIX_SUMMARY.md` - Common fixes and troubleshooting
- `WORKFLOW_OPTIMIZATION.md` - GitHub Actions optimization
- `CUSTOM_DOMAIN_SETUP.md` - Domain configuration guide

### External Resources
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [NVCBO Project Issues](https://github.com/vrxmike/nvcbo-landing-page/issues)

### Emergency Contacts
- **Repository Owner:** vrxmike
- **GitHub Support:** For platform-related issues
- **NVCBO Technical Team:** For project-specific questions

---

**Manual Version:** 1.0  
**Last Updated:** October 15, 2025  
**Next Review:** November 15, 2025  

*This manual reflects the current state of the NVCBO landing page project and should be updated as the project evolves toward a full WordPress implementation.*