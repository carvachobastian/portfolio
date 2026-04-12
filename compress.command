#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  Portfolio Image Compressor
#  Double-click this file to run it.
#
#  Walks the Projects folder and compresses any image that
#  hasn't already been processed. Already-compressed images
#  are detected via a tag embedded during compression and are
#  skipped — safe to run as many times as you like.
# ─────────────────────────────────────────────────────────────

DIR="$(cd "$(dirname "$0")" && pwd)/Projects"
TAG="portfolio-compressed"

compressed=0
skipped=0
failed=0

echo ""
echo "  Scanning: $DIR"
echo ""

while IFS= read -r -d '' f; do
    # Check for the compression tag in the image comment field
    comment=$(identify -format "%c" "$f" 2>/dev/null)
    if echo "$comment" | grep -q "$TAG"; then
        skipped=$((skipped + 1))
        continue
    fi

    # Not yet compressed — process it
    if convert "$f" \
        -auto-orient \
        -resize "2000x2000>" \
        -depth 8 \
        -quality 82 \
        -strip \
        -set comment "$TAG" \
        +backup \
        "$f" 2>/dev/null; then
        compressed=$((compressed + 1))
        echo "  ✓  $(basename "$f")"
    else
        failed=$((failed + 1))
        echo "  ✗  $(basename "$f")  — failed (permission or format issue)"
    fi

done < <(find "$DIR" -type f \( \
    -iname "*.jpg" -o \
    -iname "*.jpeg" -o \
    -iname "*.png" \
\) -print0)

echo ""
echo "  ─────────────────────────────────────────"
echo "  Compressed : $compressed"
echo "  Skipped    : $skipped  (already done)"
echo "  Failed     : $failed"
echo "  ─────────────────────────────────────────"
echo ""

# Keep the terminal window open so you can read the output
read -p "  Press Enter to close..."
