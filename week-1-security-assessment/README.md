# Cybersecurity Internship – Week 1 Report

# Security Assessment of Web Application (JUICE SHOP)

## Student Information

- **Name:** Syed Muhammad Talal
- **Intern ID:** DHC-476
- **Organization:** Developer Hub Corporation

---

# Objective

The objective of this task was to perform a basic security assessment of a web application by identifying common vulnerabilities such as Cross-Site Scripting (XSS) and SQL Injection using manual tools.

---

# 1. Application Setup & Exploration

A mock vulnerable web application was set up locally using Node.js.

## Steps Performed

- Installed dependencies using `npm install`
- Started application using `npm start`
- Accessed application at: `http://localhost:3000`

## Explored Functionalities

- User Signup
- User Login
- Product and profile-related features

---

# Screen Outputs

## Home Page

![Home Page](screenshots/home-page.png)

## Registration / Signup Page

![Register](screenshots/register.png)

## User Login

![Login](screenshots/login.png)

---

## Observation

The application was successfully deployed and functional in a local environment.

---

# 2. Cross-Site Scripting (XSS) Testing

## Script Used

```html
<script>alert('XSS')</script>
```

## Testing Method

The script was entered into input fields such as username and signup forms.

## Result

- The application did not execute the script
- No pop-up alert appeared
- Instead, a system-generated challenge message appeared

## Conclusion

The application appears to have input sanitization or filtering mechanisms in place, preventing basic XSS execution.

## Alert Testing

![Alert](screenshots/alert.png)

---

# 3. SQL Injection Testing

## Payload Used

```sql
admin' OR '1'='1
```

## Testing Method

The payload was entered into both username and password fields on the login page.

## Result

- Login attempt failed
- Server returned `401 Unauthorized`

## Conclusion

The application is protected against basic SQL injection attacks, likely through parameterized queries or ORM-based validation.

---

# 4. Browser Developer Tools Analysis

## Tool Used

- Browser Developer Tools (Network Tab)

## Observations

- Login request endpoint: `/rest/user/login`
- Response code: `401 Unauthorized`
- Additional endpoint observed: `/rest/user/whoami`
- Response code: `304 Not Modified`
- No authentication tokens or sensitive data exposed

## Conclusion

The application correctly handles authentication and does not expose sensitive information through API responses.

## Authenticity Check

![Authentication Check](screenshots/authenticitychk.png)

---

# 5. OWASP ZAP Passive Scan

## Tool Used

- OWASP ZAP (Standard Mode – Passive Scanning)

## Method

- Application traffic captured through proxy
- Manual browsing performed
- Passive scan executed on captured requests

## ZAP Scan

![ZAP Scan](screenshots/zap.png)

---

# Key Findings

## Missing Security Headers

- Content Security Policy (CSP)
- X-Content-Type-Options
- Strict-Transport-Security

## Information Disclosure

- Server version information exposed
- Private IP disclosure

## Session Management Issue

- Session ID found in URL

## Additional Issues

- Cache-related warnings
- Timestamp disclosure

---

# Risk Level

- No High-risk vulnerabilities identified
- Mostly Low to Medium risk issues detected

---

# Alerts

![Alerts](screenshots/alert.png)

---

# Overall Conclusion

The application demonstrates a reasonable level of security against basic attack techniques such as XSS and SQL injection. However, several security misconfigurations and information disclosure issues were identified during passive scanning.

These findings highlight areas where security can be improved, particularly in implementing proper HTTP security headers and securing session management.

---

# Recommendations

- Implement strong Content Security Policy (CSP)
- Enable security headers such as:
  - X-Frame-Options
  - X-Content-Type-Options
  - Strict-Transport-Security
- Avoid exposing server and internal system information
- Improve session handling mechanisms (avoid session IDs in URLs)

---

# Report File

[Download Full Report](report/week1.pdf)
