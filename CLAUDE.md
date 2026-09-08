# Portfolio

A scrolling-timeline personal site. No build step, no framework. Live at
carvachobastian.com, deployed by Netlify automatically on push to `main`.

| File | Role |
|---|---|
| `index.html` | The whole site. CSS and JS inline. Reads `projects.js`. |
| `projects.js` | All content. The only file that changes when adding a project. |
| `Projects/<year>/<name>/` | Photographs, WebP only. |
| `add-entry.py` | Scaffolds a new entry from a folder of photos. |
| `check.py` | Validates `projects.js` against the tree. Run before pushing. |
| `server.py` | Local server with an upload endpoint. Only needed for the legacy form. |
| `new-entry.html` | Legacy form. Superseded, kept deliberately. See below. |

## Adding a project

This is the only supported path. Do not use `new-entry.html`.

1. Put the photographs in `Projects/<year>/<project-name>/`. Any format.
2. Say "add the <name> project from <year>" and talk through the story.
3. Claude runs `add-entry.py`, which converts every image to WebP at quality
   90 capped at 2000px, moves the originals to the Media tier, reads real
   dimensions to set `portrait`, and scaffolds the entry.
4. Claude writes the title, category and text with you, sets `pos` crops where
   a photo needs framing, and inserts the entry at the top of `PROJECTS`.
5. `python3 check.py` must print OK.
6. Preview, then push. Netlify deploys in under a minute.

Running it yourself, without Claude:

    python3 add-entry.py "Projects/2026/My Project"

That prints the entry to paste. Add `--insert` to write it in directly.

## Why the form is still here

`new-entry.html` is 1325 lines whose only job was emitting a snippet to paste
by hand, because there was no agent when it was written. It cannot convert
formats, read image dimensions, or choose a crop, which are the parts that
actually cost time. It is kept as a fallback, not as the workflow. `info.txt`
files are a third, abandoned convention: every folder that used one is
unpublished. Do not add more.

## Entry shape

    {
      id:      'project-slug',        // matches the folder name by convention
      year:    '2023',                // timeline dot
      yearTag: '2023 - 2024',         // displayed range
      title:   ['Line one',           // array entries are line breaks
                'line two'],
      cat:     'Audiovisual',
      thumbs:  [ ... ],               // max 3, the timeline card
      text:    [ 'para', 'para' ],    // the story
      gallery: [ ... ],               // detail view
    }

An image is either a path, or an object when it needs help:

    'Projects/2023/foo/a.webp'
    { src: '...b.webp', pos: '100% 180%' }    // object-position crop
    { src: '...c.webp', portrait: true }      // aspect handling

## Rules

- **WebP only.** Quality 90, 2000px long edge. `add-entry.py` handles it.
  A photograph saved as PNG is a bug: one such file was 9.4 MB and made up
  half the page weight until 2026-09-08.
- **Every file on disk must be referenced.** `check.py` reports orphans.
- **Match filename case exactly.** macOS and Netlify both resolve
  case-insensitively, so a mismatch works locally and on the live site but
  breaks the moment anything is served from a case-sensitive host. `check.py`
  catches it.
- **Originals are not kept in the repo.** They live at
  `~/Media/Photography/Portfolio/website-originals/`. Git history holds them
  too, which is why `.git` is roughly 1 GB against a 46 MB working tree.
- **No em dashes** in any copy on the site or in commit messages.

## Preview

`.claude/launch.json` defines a `portfolio` server on port 8080, bound to
loopback. Start it from the browser pane rather than running
`Start Server.command`. `launch.json` is read from the session root, so start
sessions inside this directory.

It runs `server.py --no-open` rather than the stdlib static server, because
`server.py` sends `Cache-Control: no-cache` for `.html` and `.js`. Without that
the browser serves a stale `projects.js` and edits appear not to work. Do not
swap it for `python3 -m http.server` for that reason.
