# Checkout Status

> **Status:** Live Stripe checkout
> **Last Updated:** 2026-04-02

## Current State

The primary self-serve checkout is live:

- `https://buy.stripe.com/4gM9AV3W48px3Fa0oK24003`

The manual fallback remains available for invoicing or buyer issues:

- `vertosupport@agentmail.to`

## Current Purchase Flow

1. Buyer clicks the main CTA in `index.html`.
2. Buyer completes Stripe checkout for the one-time `EUR 149` purchase.
3. If Stripe is unavailable or invoicing is needed, buyer emails `vertosupport@agentmail.to`.
4. After payment is confirmed, fulfill manually by email within 24 hours on business days.

## Buyer-Facing Wording To Use

- `Buy the starter kit - EUR 149`
- `Secure Stripe checkout`
- `Need an invoice or help with checkout? Contact vertosupport@agentmail.to`
- `Manual fulfillment within 24 hours on business days after payment confirmation`

## Remaining Manual Steps

- confirm payment or support request
- send toolkit files by email
- include the plain-language disclaimer
- confirm receipt if the buyer reports any delivery issue

## Current Constraint

Checkout is live, but fulfillment is still manual rather than instant download automation.
