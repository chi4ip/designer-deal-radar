
CREATE TABLE IF NOT EXISTS deals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT NOT NULL,
  item TEXT NOT NULL,
  price REAL NOT NULL,
  resale REAL DEFAULT 0,
  condition TEXT,
  url TEXT,
  notes TEXT,
  category TEXT,
  source TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS deals_created_at
ON deals(created_at);

CREATE INDEX IF NOT EXISTS deals_brand
ON deals(brand);
