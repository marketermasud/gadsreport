# Sample data (fictional)

All values in these files are invented for testing the importers.

- `google-ads-daily-export-sample.csv` — Daily Performance → Import CSV (Brightside demo client).
  It intentionally contains title rows, a "--" value, a duplicate row, an unknown campaign
  ("Search – Drain Cleaning"), a non-numeric value ("abc") and a Total row, so you can see
  validation, duplicate detection and conflict handling.
- `baseline-campaign-report-sample.csv` — Baseline Audit → Record audit → Import rows from CSV.
