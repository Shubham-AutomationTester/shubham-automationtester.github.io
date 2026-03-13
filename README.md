# Crawler Demo Site

This is a simple demo website used to test crawler functionality.

## Features

- Static website hosted using GitHub Pages
- Contains a **multi-value field**
- Multi-value data exposed using:
  - HTML meta tags
  - JSON-LD structured data
  - visible HTML content

## Test Scenario

Crawler configuration example:

Field name: multi_value
Field type: multi_value
Transformation: Covert uppercase
## Expected Result

Source values:


red widget
blue widget
green widget
crawler testing


After transformation in search index:


RED WIDGET
BLUE WIDGET
GREEN WIDGET
CRAWLER TESTING


## GitHub Pages URL

Once deployed:


https://YOUR-USERNAME.github.io/crawler-demo-site/


Use the page URL as the crawler seed URL.
