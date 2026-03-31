# Checkout Status

## Current state

There is no live self-serve checkout yet.

The site can still accept first-sale intent through a manual purchase path.

## Current purchase flow

1. Buyer clicks the primary CTA placeholder or emails `vertosupport@agentmail.to`.
2. Reply with:
   - confirmation that the toolkit is a one-time purchase for `EUR 149`
   - payment instructions or invoice link
   - expected fulfillment timing
3. After payment is confirmed, send the toolkit manually by email.
4. Include `DELIVERY.md` steps in the internal handoff so fulfillment is consistent.

## CTA wording to use now

- `Buy the starter kit - EUR 149`
- `Manual checkout: email vertosupport@agentmail.to`
- `If checkout is not live yet, we will fulfill manually within 24 hours on business days.`

## What remains before live checkout

- choose payment processor
- create payment link or hosted checkout
- connect success page / receipt flow
- upload packaged files for instant delivery
- replace placeholder CTA URLs in `index.html`

## Exact blocker

The only blocker for a fully automated first sale is the absence of a live payment link or hosted checkout.
