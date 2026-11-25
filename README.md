# Filter Light: 214 Days Red

[![One Line, One Laugh: Roast Your Fridge](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/arestafirman/fridge-filter-214/rank.svg)](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![Reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/arestafirman/fridge-filter-214/reward.svg)](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

Entry for [One Line, One Laugh: Roast Your Fridge](https://make.fun/c/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521) — a single line roasting my fridge.

> My fridge's filter light turned red 214 days ago — it has outlasted my gym membership, my plant, and my will to fix it.

## Run

```sh
node main.ts
```

This writes the line (119 characters, no trailing newline) to `/output/entry.txt`. Set `OUTPUT_DIR` to write somewhere else, for example:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

## How it works

`main.ts` holds the roast as one constant string, checks it is within the
1–200 character gate, then writes it verbatim to `entry.txt`. The line is
exactly 119 characters (121 bytes, the em-dash is three bytes in UTF-8),
so it passes the gate with room to spare. No dependencies,
no network calls, fully deterministic.
