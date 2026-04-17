# philly.juandiazllc.com

Field ops dashboard for ground teams — dispatch, routing, live status. The first product under Juan Diaz LLC's US arm.

Shares the same Supabase project (`juandiazllc`) as the main site, so credentials issued at `juandiazllc.com/login` work here too.

## Local dev

```bash
npm install
cp .env.example .env.local   # fill in the shared Supabase keys
npm run dev                  # runs on :3001
```

## Status

Shipping — currently a landing + authed stub. Real dispatch surface lands after pilot.
