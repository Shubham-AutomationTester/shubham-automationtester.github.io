# JSON Data Demo Site

Static GitHub Pages site generated from `custom_data_English_en_with_boolean_types(2).json`.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all files and folders from this ZIP to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings > Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then click **Save**.
7. GitHub will publish the site at `https://<username>.github.io/<repository-name>/`.

## Included

- `index.html` - searchable cards containing all records.
- `records/*.html` - one crawlable detail page for every record.
- `data/custom_data.json` - original JSON data.
- `assets/styles.css` - responsive UI styling.
- `assets/app.js` - client-side search/privacy filter.
- `robots.txt` - allows crawling.
- `404.html` - GitHub Pages fallback.

All boolean values remain JSON booleans in the source data, while the HTML visibly renders them as `true` or `false` for QA validation.
