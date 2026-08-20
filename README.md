# ORDINAL / Working Study 01

A standalone fictional concept website exploring an artisan mechanical timepiece through an original, scroll-driven exploded assembly.

`ORDINAL` is a provisional working name. This project does not represent a real company, maker, product, provenance, certification, price, customer, or commercial offer.

## Local development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run check-types
npm run lint
npm run build
```

The production container serves the locally validated, committed `dist/` directory through nginx. Run `npm run build` before a deployment commit. This keeps the production image independent of registry access during deployment.

The site deliberately contains no forms, analytics, commerce, external product links, or real-world business claims.
