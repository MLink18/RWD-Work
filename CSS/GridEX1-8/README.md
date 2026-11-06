# CSS Grid practice exercises

Eight hands-on exercises that follow the *Intro to CSS Grid* slide deck, from a first three-column grid to a full calculator keypad.

## How it's organised

```
grid-exercises/
├── index.html              ← start here: links to every exercise
├── shared/base.css         ← colours, fonts, instruction panel (don't edit)
├── 01-photo-gallery/
│   ├── index.html          ← task brief + the HTML to style
│   ├── style.css           ← COMPLETED solution, fully commented
│   └── target.png          ← what the finished exercise looks like
├── 02-blog-layout/
├── …
└── 08-calculator/
```

| # | Exercise | Concepts |
|---|----------|----------|
| 01 | Photo gallery | `display: grid`, `grid-template-columns`, `gap`, `justify-content` |
| 02 | Blog layout | `fr`, `repeat()`, fixed + flexible tracks |
| 03 | Magazine front page | `grid-column` / `grid-row` with line numbers, `-1`, auto-placement |
| 04 | Featured mosaic | `span`, `grid-auto-rows`, `grid-auto-flow: dense` |
| 05 | Page layout | `grid-area`, `grid-template-areas`, media queries |
| 06 | Responsive cards | `repeat(auto-fit, minmax())`, `auto-fill`, nested grids |
| 07 | Centring and alignment | `place-items`, `justify-content`, `justify-items`, `align-self` |
| 08 | Calculator (capstone) | everything above, together |

## How to use them

1. Open `index.html` in a browser (double-clicking it works, no server needed).
2.Work in the `style.css`.
3. Follow the tasks in the brief at the top of the page. All you need to write is layout CSS; `shared/base.css` handles colours and fonts.
4. Compare your page with `target.png`


