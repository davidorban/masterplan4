# Master Plan 4 - LaTeX Version

This directory contains the LaTeX source files for the Master Plan 4 document.

## Directory Structure

```
latex/
├── MasterPlan4.tex       # Main LaTeX document
├── Makefile              # Build automation
├── sections/             # Individual chapters/sections
│   ├── 00-abstract.tex
│   ├── 01-introduction.tex
│   └── ...
├── figures/              # Figures and images
├── styles/               # Custom LaTeX styles
└── references.bib        # BibTeX references
```

## Building the Document

### Prerequisites

- A LaTeX distribution (TeX Live, MiKTeX, or MacTeX)
- `make` utility

### Building

1. Navigate to this directory:
   ```bash
   cd latex
   ```

2. Build the PDF:
   ```bash
   make
   ```
   This will create `MasterPlan4.pdf` in the latex directory.

3. For continuous building while editing:
   ```bash
   make watch
   ```
   (Requires `inotify-tools` on Linux or `fswatch` on macOS)

### Cleaning Up

- Remove temporary files:
  ```bash
  make clean
  ```

- Remove all generated files including the PDF:
  ```bash
  make cleanall
  ```

## Adding Content

1. **New Chapters**: Create a new `.tex` file in the `sections/` directory and add an `\input` command to the main document.

2. **Figures**: Place images in the `figures/` directory and include them using:
   ```latex
   \begin{figure}[ht]
       \centering
       \includegraphics[width=\textwidth]{figures/filename.png}
       \caption{Your caption}
       \label{fig:label}
   \end{figure}
   ```

3. **References**: Add BibTeX entries to `references.bib` and cite them using `\cite{key}`.

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
