.PHONY: all clean

# Main document name (without .tex)
DOCUMENT = MasterPlan4

# Build directory
BUILD_DIR = build

# LaTeX compiler
LATEX = pdflatex
LATEX_OPTS = -interaction=nonstopmode -output-directory=$(BUILD_DIR) -file-line-error
BIBTEX = bibtex

# Source files
TEX_SRC = $(wildcard *.tex) $(wildcard sections/*.tex) $(wildcard styles/*.sty)
BIB_SRC = $(wildcard *.bib)
FIGURES = $(wildcard figures/*)

# Output files
PDF = $(DOCUMENT).pdf

all: $(PDF)

$(PDF): $(TEX_SRC) $(BIB_SRC) $(FIGURES) | $(BUILD_DIR)
	@echo "Running $(LATEX) (first pass)..."
	@$(LATEX) $(LATEX_OPTS) $(DOCUMENT).tex > /dev/null || true
	@if [ -f $(BUILD_DIR)/$(DOCUMENT).aux ]; then \
		echo "Running $(BIBTEX)..."; \
		(cd $(BUILD_DIR) && $(BIBTEX) $(DOCUMENT).aux) > /dev/null || true; \
	fi
	@echo "Running $(LATEX) (second pass)..."
	@$(LATEX) $(LATEX_OPTS) $(DOCUMENT).tex > /dev/null || true
	@echo "Running $(LATEX) (final pass)..."
	@$(LATEX) $(LATEX_OPTS) $(DOCUMENT).tex > /dev/null || true
	@mv $(BUILD_DIR)/$(PDF) .
	@echo "$(PDF) built successfully!"

$(BUILD_DIR):
	@mkdir -p $(BUILD_DIR)

clean:
	@rm -rf $(BUILD_DIR) *.aux *.log *.out *.toc *.bbl *.blg *.lof *.lot *.lol *.bcf *.run.xml *.synctex.gz *.fls *.fdb_latexmk *.snm *.nav

cleanall: clean
	@rm -f $(PDF)

.PHONY: watch
watch:
	@echo "Watching for changes in .tex files..."
	@while inotifywait -q -e modify $(TEX_SRC); do \
		make all; \
	done
