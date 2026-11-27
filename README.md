# Korede Adene portfolio
Buildless HTML, CSS and JavaScript hosted on GitHub Pages. Each portfolio category has its own HTML document. styles.css supplies the shared base; crownline.css supplies the shared palette and responsive refinements. Category stylesheets follow the corresponding page. script.js handles navigation and email composition; residential.js handles the three image viewers. Native links and details elements retain the underlying images without JavaScript.

Serve a checkout with `python -m http.server 8000`. Open the home page and exercise the mobile menu, service anchors, project galleries and contact draft. For subdirectory testing, run the server from the checkout’s parent and visit the checkout folder. Never place client drawings or credentials in the repository without authorization. See _review for the launch audit and owner decisions.

For deployment, merge the reviewed branch into the configured GitHub Pages publishing branch, check the build **and deploy** jobs, and verify the resulting public pages. On failure, leave the existing deployment published. A commit on a review branch does not publish production.
