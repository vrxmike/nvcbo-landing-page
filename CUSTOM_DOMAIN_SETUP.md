# Custom Domain Setup: ALIAS Record Configuration for NVCBO Landing Page

## Overview

**Project:** NVCBO Landing Page  
**GitHub Pages URL:** https://vrxmike.github.io/nvcbo-landing-page/  
**Target Custom Domain:** northernvisionke.org  
**Domain Registrar:** Namecheap  
**Setup Date:** October 13, 2025  

This documentation guides you through configuring a custom domain for your GitHub Pages site using ALIAS records on Namecheap.

---

## Understanding the Setup

### GitHub Pages Project Repository Structure
- **Repository:** `vrxmike/nvcbo-landing-page` (project repository)
- **Default URL:** `vrxmike.github.io/nvcbo-landing-page/`
- **User Account:** `vrxmike`
- **ALIAS Target:** `vrxmike.github.io.` (user site hostname)

### Why ALIAS Records?
ALIAS records allow apex domains (like `northernvisionke.org`) to point to hostnames instead of IP addresses, providing:
- Automatic IP resolution through GitHub's infrastructure
- Better reliability than hardcoded A records
- Support for GitHub's load balancing and CDN

---

## Prerequisites Checklist

### GitHub Repository Configuration
- [ ] **GitHub Pages Enabled**: Repository > Settings > Pages > Source = `Deploy from a branch` > Branch = `master` > Folder = `/ (root)`
- [ ] **Custom Domain Added**: Repository > Settings > Pages > Custom domain = `northernvisionke.org`
- [ ] **CNAME File Created**: GitHub automatically creates `CNAME` file in repository root
- [ ] **Site Accessibility**: Verify `vrxmike.github.io/nvcbo-landing-page` loads correctly

### Domain Prerequisites
- [ ] **Namecheap Account Access**: Login credentials for domain management
- [ ] **DNS Management Rights**: Ability to modify DNS records
- [ ] **Existing Records Backup**: Note current DNS configuration before changes

---

## Step-by-Step Implementation

### Step 1: Access Namecheap DNS Management

1. **Navigate to Domain Management**:
   - Go to [namecheap.com](https://www.namecheap.com)
   - Sign in to your account
   - Dashboard > Domain List
   - Click "Manage" next to `northernvisionke.org`

2. **Open Advanced DNS**:
   - In the left sidebar, select **Advanced DNS**
   - View current Host Records configuration

### Step 2: Remove Conflicting Records

**Important:** Clear existing A records to prevent conflicts

**Records to Remove:**
- All A records for `@` (apex domain)
- Any conflicting A records for `www`
- Old Cloudflare/Bubble IP addresses

**Example of records to delete:**
```
Type: A Record, Host: @, Value: 104.16.36.105
Type: A Record, Host: @, Value: 104.16.37.105
Type: A Record, Host: www, Value: [any old IPs]
```

**Action:**
- Click the trash/delete icon next to each conflicting record
- Click "Save All Changes" to apply deletions

### Step 3: Create ALIAS Record for Apex Domain

**Add New Record Configuration:**
- **Type**: `ALIAS` (select from dropdown menu)
- **Host**: `@` (targets the root domain northernvisionke.org)
- **Value**: `vrxmike.github.io.` (**CRITICAL:** Include the trailing dot `.`)
- **TTL**: `Automatic` or `3600` (1 hour)

**Why the trailing dot matters:**
- With dot: `vrxmike.github.io.` (fully qualified domain name)
- Without dot: Namecheap might append your domain → `vrxmike.github.io.northernvisionke.org` (breaks resolution)

### Step 4: Create CNAME Record for WWW Subdomain

**Add New Record Configuration:**
- **Type**: `CNAME Record`
- **Host**: `www`
- **Value**: `vrxmike.github.io.` (with trailing dot)
- **TTL**: `Automatic`

**Purpose:**
- Ensures both `northernvisionke.org` and `www.northernvisionke.org` work
- Provides consistent user experience

### Step 5: Save and Apply Changes

1. **Review Configuration**:
   ```
   Type        Host    Value
   ALIAS       @       vrxmike.github.io.
   CNAME       www     vrxmike.github.io.
   ```

2. **Save All Changes**:
   - Click the green "Save All Changes" button
   - Namecheap will show confirmation message

---

## Verification and Testing

### DNS Propagation Check

**Command Line Testing:**
```bash
# Check apex domain resolution
dig northernvisionke.org

# Check www subdomain resolution  
dig www.northernvisionke.org

# Expected results: Should resolve to GitHub Pages IPs
# (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
```

**Online Tools:**
- [whatsmydns.net](https://www.whatsmydns.net) - Global DNS propagation checker
- [dnschecker.org](https://dnschecker.org) - Alternative DNS verification

### GitHub Pages Verification

**Repository Settings Check:**
1. Go to Repository > Settings > Pages
2. Custom domain section should show:
   - ✅ Green checkmark: "DNS check successful"
   - Option to "Enforce HTTPS" (enable after DNS verification)

**Timeline Expectations:**
- **DNS Propagation**: 15 minutes to 2 hours (typically < 30 minutes)
- **SSL Certificate**: 1-2 hours after DNS verification
- **HTTPS Enforcement**: Available after SSL certificate issues

### Site Accessibility Testing

**Test URLs:**
```bash
# Both should load your NVCBO landing page
curl -I http://northernvisionke.org
curl -I http://www.northernvisionke.org

# After HTTPS is ready
curl -I https://northernvisionke.org
curl -I https://www.northernvisionke.org
```

**Browser Testing:**
- Open incognito/private browsing window
- Test both `northernvisionke.org` and `www.northernvisionke.org`
- Verify your NVCBO landing page loads correctly
- Check all assets (images, fonts, icons) display properly

---

## Troubleshooting Guide

### Common Issues and Solutions

| **Issue** | **Cause** | **Solution** |
|-----------|-----------|--------------|
| DNS not propagating | TTL too high or cache delay | Lower TTL to 300 seconds, wait 1 hour, flush local DNS cache |
| GitHub domain not verified | Missing/incorrect CNAME file | Check repository root for `CNAME` file containing `northernvisionke.org` |
| HTTPS not working | SSL certificate pending | Wait 1-2 hours after DNS verification; GitHub auto-issues Let's Encrypt certificates |
| Trailing dot error | FQDN not properly formatted | Edit ALIAS record value to include trailing dot: `vrxmike.github.io.` |
| Records locked/greyed out | Email forwarding or redirects enabled | Disable URL redirects in Domain settings before editing DNS |
| 404 errors on custom domain | Incorrect repository setup | Verify GitHub Pages source is set to correct branch and folder |

### DNS Troubleshooting Commands

```bash
# Check current DNS resolution
nslookup northernvisionke.org

# Check with specific DNS server
nslookup northernvisionke.org 8.8.8.8

# Detailed DNS query
dig northernvisionke.org +trace

# Check DNS propagation globally
# Use online tools: whatsmydns.net, dnschecker.org
```

### GitHub Pages Troubleshooting

**Repository Settings Verification:**
1. **Pages Configuration**:
   - Source: Deploy from a branch
   - Branch: `master`
   - Folder: `/ (root)`

2. **Custom Domain Status**:
   - Domain field shows: `northernvisionke.org`
   - Status shows: ✅ "DNS check successful"

3. **CNAME File Check**:
   ```bash
   # Verify CNAME file exists and has correct content
   cat CNAME
   # Should contain exactly: northernvisionke.org
   ```

---

## Final DNS Configuration

### Expected Namecheap Host Records
After successful setup, your DNS records should look like:

```
Type        Host    Value                   TTL
ALIAS       @       vrxmike.github.io.      Automatic
CNAME       www     vrxmike.github.io.      Automatic
TXT         @       [any existing SPF/verification records]
```

### GitHub Repository Files
Your repository should contain:
- `CNAME` file in root with content: `northernvisionke.org`
- All existing project files (`index.html`, `assets/`, etc.)

---

## Security and Performance

### HTTPS Configuration
1. **Enable HTTPS Enforcement**:
   - Repository > Settings > Pages
   - Check "Enforce HTTPS" (available after SSL certificate issues)
   - This redirects HTTP → HTTPS automatically

2. **SSL Certificate Details**:
   - **Provider**: Let's Encrypt (automatic)
   - **Renewal**: Automatic every 90 days
   - **Coverage**: Both apex and www subdomains

### Performance Considerations
- **CDN**: GitHub Pages includes CloudFlare CDN automatically
- **Caching**: Static assets cached globally
- **GZIP**: Automatic compression for CSS/JS/HTML

---

## Backup and Rollback

### Current Configuration Backup
Before making changes, document your current DNS settings:

```bash
# Save current DNS configuration
dig northernvisionke.org ANY > dns_backup_$(date +%Y%m%d).txt
```

### Rollback Procedure
If you need to revert to previous setup:

1. **Remove GitHub Domain**:
   - Repository > Settings > Pages > Custom domain > Clear field > Save
   - Delete `CNAME` file from repository

2. **Restore Previous DNS**:
   - Delete ALIAS and CNAME records for GitHub
   - Re-add previous A records or configuration
   - Save changes in Namecheap

---

## Project Integration

### File Locations
- **Repository Root**: `/home/vamp/REMOTE_NVCBO/nvcbo-landing-page/`
- **Main Page**: `index.html`
- **Assets**: `assets/` directory (images, CSS, JS, fonts)
- **Domain File**: `CNAME` (auto-generated by GitHub)

### Deployment Workflow
Your existing GitHub Actions workflow (`deploy-pages.yml`) will continue working:
- Push to `master` branch triggers deployment
- GitHub Pages serves content at custom domain
- No changes needed to existing deployment process

### Testing Integration
```bash
# Local development (unchanged)
python3 -m http.server 8080

# Production testing (after DNS setup)
curl -I https://northernvisionke.org
curl -I https://www.northernvisionke.org
```

---

## Success Metrics

### Verification Checklist
- [ ] DNS records properly configured in Namecheap
- [ ] GitHub Pages shows green checkmark for custom domain
- [ ] `northernvisionke.org` loads NVCBO landing page
- [ ] `www.northernvisionke.org` loads NVCBO landing page
- [ ] HTTPS enforcement enabled and working
- [ ] All assets (images, fonts, CSS) load correctly on custom domain
- [ ] No mixed content warnings in browser console

### Expected Timeline
- **DNS Changes**: Immediate in Namecheap interface
- **Propagation**: 15-30 minutes globally
- **GitHub Verification**: 5-15 minutes after DNS propagation
- **SSL Certificate**: 1-2 hours after GitHub verification
- **Full HTTPS**: Available after SSL certificate issues

---

## Related Documentation

- **`DEPLOYMENT_FIXES.md`** - Complete deployment history and troubleshooting
- **`WORKFLOW_OPTIMIZATION.md`** - GitHub Actions workflow configuration
- **`.github/copilot-instructions.md`** - AI agent guidance for the project
- **GitHub Pages Documentation**: [docs.github.com/pages](https://docs.github.com/en/pages)

---

**Status**: Documentation Created  
**Next Steps**: Follow the step-by-step guide above to configure your custom domain  
**Support**: Reference troubleshooting section for common issues  

*Documentation created: October 13, 2025*