# Frontend Projects Collection

A collection of small, browser-based frontend projects built with plain HTML, CSS, and JavaScript. Each project is self-contained and can be opened directly in a browser or deployed as part of this repository with GitHub Pages.

Repository: [frontendpro](https://github.com/ashutoshbhatt8077/frontendpro)

## Live Projects

When GitHub Pages is enabled for the `main` branch, the projects are available at:

| Project | Description | Live link |
| --- | --- | --- |
| Markdown Previewer | Write Markdown and see the rendered result immediately. | [Open Markdown Previewer](https://ashutoshbhatt8077.github.io/frontendpro/mediam/markdown/) |
| Movie Search | Search TV shows through the TVMaze API and open show details. | [Open Movie Search](https://ashutoshbhatt8077.github.io/frontendpro/mediam/movie-search/) |
| Calculator | Perform basic arithmetic operations in a browser calculator. | [Open Calculator](https://ashutoshbhatt8077.github.io/frontendpro/normal/calculator/) |
| Digital Clock | Display the current time, date, day, and year with a dark-mode toggle. | [Open Digital Clock](https://ashutoshbhatt8077.github.io/frontendpro/normal/clock/) |
| Color Palette Generator | Generate random colors and copy individual hex values. | [Open Color Palette](https://ashutoshbhatt8077.github.io/frontendpro/normal/colorpallet/) |
| To-Do List | Add, complete, delete, and persist tasks in the browser. | [Open To-Do List](https://ashutoshbhatt8077.github.io/frontendpro/normal/todo/) |

The links work after GitHub Pages finishes publishing the repository. It can take a short time after the first deployment or a new push.

## Project Overview

### Markdown Previewer

Path: `mediam/markdown/`

The Markdown Previewer provides a two-panel editor:

- Type Markdown in the input panel.
- See the rendered HTML output update as you type.
- Use the `marked` library loaded from jsDelivr to parse Markdown.
- Use the page without a build tool or package installation.

Main files:

- `index.html`: page structure and CDN script reference.
- `style.css`: two-panel layout and visual styling.
- `js.js`: input listener and Markdown rendering logic.

### Movie Search

Path: `mediam/movie-search/`

The Movie Search project provides a live search interface for TVMaze shows:

- The initial page loads results for `marvel`.
- Search text is sent to the TVMaze search endpoint as the user types.
- Matching shows are displayed with their poster image and title.
- Selecting a result opens the TVMaze show page in a new browser tab.
- An empty result displays a `Movie Not Found.....` message.

Main files:

- `index.html`: search form and results container.
- `style.css`: search page and result-card styling.
- `js.js`: API requests, result rendering, and external links.

API endpoint used:

```text
https://api.tvmaze.com/search/shows?q=<search-term>
```

The browser must have network access for search results to load. The project does not require an API key.

### Calculator

Path: `normal/calculator/`

The Calculator project supports:

- Digits from `0` through `9`.
- Addition, subtraction, multiplication, and division.
- Clearing the current expression with `C`.
- Evaluating an expression with `=`.
- Displaying `Error` when the expression cannot be evaluated.

Main files:

- `index.html`: calculator controls and display.
- `style.css`: calculator layout and appearance.
- `scricpt.js`: button handling, clearing, and calculation logic.

### Digital Clock

Path: `normal/clock/`

The Digital Clock updates every second and shows:

- Current local time in 12-hour format.
- Weekday, month, day, and year.
- A button for toggling dark mode.
- A responsive clock-focused layout.

Main files:

- `index.html`: clock display and toggle button.
- `style.css`: clock presentation and dark-mode styles.
- `ja.js`: time/date formatting and one-second update interval.

### Color Palette Generator

Path: `normal/colorpallet/`

The Color Palette Generator creates a new random palette when `generate` is clicked:

- Generates 100 random hexadecimal color boxes.
- Changes the page background to a random color.
- Applies a random two-color gradient to the main container.
- Copies a color's hex value when its box is clicked.
- Shows a temporary confirmation message after copying.

Main files:

- `index.html`: palette container and generate button.
- `style.css`: palette layout and color-box styling.
- `js.js`: color generation, rendering, clipboard support, and notifications.

Clipboard access works in browsers that support the Clipboard API, usually in a secure context such as HTTPS or `localhost`.

### To-Do List

Path: `normal/todo/`

The To-Do List separates work into pending and completed sections:

- Add a task through the `Add Task` button and prompt.
- Mark a pending task as completed.
- Delete pending or completed tasks.
- Restore saved tasks after refreshing the page.
- Store task data in `localStorage` under the `tasks` key.

Main files:

- `index.html`: pending/completed sections and controls.
- `style.css`: list layout and visual styling.
- `scricpt.js`: task creation, movement, deletion, saving, and loading.

Tasks are saved separately in each browser profile. Clearing site data removes the saved list.

## Repository Structure

```text
frontendpro/
|-- mediam/
|   |-- markdown/
|   |   |-- index.html
|   |   |-- js.js
|   |   `-- style.css
|   `-- movie-search/
|       |-- index.html
|       |-- js.js
|       `-- style.css
|-- normal/
|   |-- calculator/
|   |   |-- index.html
|   |   |-- scricpt.js
|   |   `-- style.css
|   |-- clock/
|   |   |-- index.html
|   |   |-- ja.js
|   |   `-- style.css
|   |-- colorpallet/
|   |   |-- index.html
|   |   |-- js.js
|   |   `-- style.css
|   `-- todo/
|       |-- index.html
|       |-- scricpt.js
|       `-- style.css
`-- README.md
```

Every project has its own `index.html`, so the folders can be opened and deployed independently.

## Technologies Used

- HTML5 for document structure.
- CSS3 for layouts, colors, spacing, transitions, and responsive presentation.
- Modern browser JavaScript for interaction and DOM updates.
- [marked](https://github.com/markedjs/marked) via jsDelivr for Markdown parsing.
- [TVMaze API](https://www.tvmaze.com/api) for show-search data.
- `localStorage` for To-Do List persistence.
- Clipboard API for copying generated color values.
- GitHub Pages for static hosting.

## Run Locally

These projects do not require Node.js, npm, a framework, or a build process.

### Option 1: Open a project directly

Open any project's `index.html` file in a modern browser. For example:

```text
normal/calculator/index.html
```

### Option 2: Use a local static server

A local server is recommended for consistent browser behavior, especially for API and clipboard features. With Python installed, run this from the repository root:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500/mediam/markdown/
http://localhost:5500/mediam/movie-search/
http://localhost:5500/normal/calculator/
http://localhost:5500/normal/clock/
http://localhost:5500/normal/colorpallet/
http://localhost:5500/normal/todo/
```

In VS Code, the Live Server extension can also serve the repository. Open the required project's `index.html` and choose **Open with Live Server**.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. Open the repository's **Settings** page.
3. Select **Pages** in the sidebar.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder.
6. Click **Save**.
7. Wait for the Pages deployment to complete.

Because this is a collection of static projects, each project is reached through its folder path. For example:

```text
https://ashutoshbhatt8077.github.io/frontendpro/normal/todo/
```

Keep asset references relative to each project, such as `style.css` and `js.js`. Absolute paths beginning with `/` can point to the wrong location when a project is hosted below the repository name.

## Git Workflow

From the repository root:

```powershell
git status
git add .
git commit -m "Update frontend projects"
git push origin main
```

Before committing, review `git status` and `git diff` so that only intended changes are published.

## Browser Compatibility

Use a current version of Chrome, Edge, Firefox, or Safari. The projects use standard browser APIs, but the following features require browser support or appropriate permissions:

- Movie Search requires network access and a reachable TVMaze API.
- Color copying requires the Clipboard API and may require HTTPS or `localhost`.
- To-Do persistence requires browser storage to be enabled.
- Markdown rendering requires access to the jsDelivr CDN unless the `marked` library is hosted locally.

## Known Limitations

- The projects do not currently use a shared component system or build pipeline.
- Movie Search depends on a third-party API and does not include an offline fallback.
- The To-Do List stores data only in the current browser profile; it has no account or cloud synchronization.
- The Markdown Previewer loads the Markdown parser from a CDN.
- The calculator is intended for simple browser use and does not provide a full mathematical expression parser.

## Suggested Improvements

Possible next steps for the collection include:

- Add a root landing page linking to every project.
- Add keyboard support to the calculator and Markdown editor.
- Add loading and network-error states to Movie Search.
- Add task editing, filtering, and explicit status styling to the To-Do List.
- Add a copy-all button and named palette export to the Color Palette Generator.
- Move shared colors and typography into a consistent design system.
- Add automated browser tests for the main interactions.

## Author

Created by **Ashutosh Bhatt**.

## License

No license file is currently included in this repository. Add a license before allowing reuse or redistribution of the project code.