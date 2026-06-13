# 06_FORM_AND_LEAD_SCORING.md

## Purpose

This document defines the free audit form, lead qualification logic, internal scoring, Slack notification summary, and automatic follow-up email.

This is not a technical implementation guide.

It defines what the form must ask and why.

## Form Positioning

The form is not a generic contact form.

It is the entry point for:

> Vexilian Klientu Noplūdes Audits

The owner should feel that the form is helping Vexilian understand where clients disappear.

## Form Promise

Use this framing near the form:

> Aizpildiet īsu pieteikumu. Mēs apskatīsim jūsu vietas situāciju, pieprasījumu kanālus un iespējamos noplūdes punktus. Ja redzēsim reālu potenciālu, sazināsimies WhatsApp vai pa telefonu.

## Form Length Rule

The form should be long enough to score quality, but not so long that serious owners quit.

Recommended maximum:

1. 8 to 12 visible questions
2. 1 consent checkbox
3. Hidden tracking fields

If the form feels too long, split into two visual groups:

1. Par jūsu vietu
2. Kur varētu pazust klienti

## Required Visible Fields

### 1. Vārds

Type:

Short text

Required:

Yes

Why it matters:

Needed for personal follow-up.

### 2. Uzņēmuma / vietas nosaukums

Type:

Short text

Required:

Yes

Why it matters:

Allows quick search and context before contacting.

### 3. Tālrunis

Type:

Phone

Required:

Yes

Why it matters:

User explicitly wants follow-up by WhatsApp or phone.

### 4. E-pasts

Type:

Email

Required:

Yes

Why it matters:

Needed for automatic confirmation email and fallback communication.

### 5. Vietas tips

Type:

Select

Required:

Yes

Options:

1. Viesu nams
2. Pirts / sauna komplekss
3. Pasākumu vieta
4. Brīvdienu māja / namiņi
5. Retreat / atpūtas vieta
6. Cits hospitality objekts
7. Neesmu pārliecināts

Why it matters:

Primary ICP fit.

### 6. Mājaslapas vai profila saite

Type:

URL or text

Required:

Recommended, but allow empty

Why it matters:

Vexilian needs to inspect current public path.

Accepted examples:

1. Website
2. Instagram
3. Booking page
4. Airbnb page
5. Facebook page

### 7. Kur šobrīd nāk pieprasījumi?

Type:

Multi-select

Required:

Yes

Options:

1. Instagram
2. Facebook
3. Booking.com
4. Airbnb
5. Telefona zvani
6. E-pasts
7. Mājaslapas forma
8. WhatsApp
9. Iepriekšējie klienti
10. Cits

Why it matters:

Detects number of incoming signals and channel fragmentation.

### 8. Kur, jūsuprāt, pazūd klienti?

Type:

Multi-select plus optional text

Required:

Yes

Options:

1. Cilvēki jautā, bet nerezervē
2. Atbildes kavējas
3. Nav skaidrs, kam rakstīt vēlreiz
4. Klusajos mēnešos ir par maz pieprasījumu
5. Booking/Airbnb dod redzamību, bet nav tiešo klientu
6. Nav skaidrs, kurš kanāls strādā
7. Nav pietiekami laba satura
8. Piedāvājums nav skaidrs
9. Nezinu
10. Cits

Why it matters:

Shows perceived leakage and pain intensity.

### 9. Kuri mēneši vai periodi ir vājākie?

Type:

Short text or multi-select months

Required:

Yes

Why it matters:

Off-season pain is a core commercial trigger.

Optional structure:

1. Janvāris
2. Februāris
3. Marts
4. Aprīlis
5. Maijs
6. Jūnijs
7. Jūlijs
8. Augusts
9. Septembris
10. Oktobris
11. Novembris
12. Decembris
13. Darba dienas
14. Svētdienas / pirmdienas
15. Starpsezona

### 10. Vai jums ir iepriekšējo klientu kontakti?

Type:

Select

Required:

Yes

Options:

1. Jā, sakārtoti
2. Jā, bet dažādās vietās
3. Daļēji
4. Nē
5. Nezinu

Why it matters:

Determines reactivation potential.

### 11. Vai vēlaties vairāk tiešo rezervāciju?

Type:

Select

Required:

Yes

Options:

1. Jā, tas ir svarīgi
2. Jā, bet nezinām, kā
3. Daļēji
4. Šobrīd pietiek ar Booking/Airbnb
5. Nezinu

Why it matters:

Tests whether the owner sees platform dependence as a problem.

### 12. Aptuvenā rezervācijas / pasākuma vērtība

Type:

Select

Required:

Optional but recommended for scoring

Options:

1. Zem €100
2. €100–€250
3. €250–€500
4. €500–€1,000
5. €1,000–€3,000
6. €3,000+
7. Grūti pateikt

Why it matters:

Determines commercial viability.

Do not make this feel invasive. Use “aptuvenā” and allow “grūti pateikt.”

### 13. Piekrišana saziņai

Type:

Checkbox

Required:

Yes

Copy:

> Piekrītu, ka Vexilian ar mani sazinās par klientu noplūdes auditu WhatsApp, telefoniski vai e-pastā.

Why it matters:

Required communication consent.

## Hidden Fields

Capture hidden fields if possible:

1. utm_source
2. utm_medium
3. utm_campaign
4. utm_content
5. utm_term
6. referrer
7. landing_page
8. submitted_at
9. device type if available
10. language

Purpose:

Supports future source-to-revenue analysis.

## Lead Scoring Framework

Score from 0 to 100.

### Property Type Score: 0–20

20 points:

1. Guest house
2. Event property
3. Pirts / sauna complex
4. Retreat
5. Premium countryside stay

10 points:

1. Brīvdienu māja / namiņi
2. Other hospitality object with direct booking potential

0 points:

1. Restaurant
2. Cafe
3. Bar
4. Generic low-ticket business
5. Casual Airbnb hobby host

### Channel Fragmentation Score: 0–15

15 points:

4 or more enquiry channels.

10 points:

2 to 3 enquiry channels.

5 points:

1 channel.

0 points:

No clear incoming enquiry channels.

### Leakage Pain Score: 0–20

20 points:

Owner identifies no follow-up, no visibility, weak months, and platform dependence.

15 points:

Owner identifies at least two major leakage problems.

8 points:

Owner identifies one leakage problem.

0 points:

Owner only wants a prettier website or is unclear.

### Off-Season Pain Score: 0–15

15 points:

Clear weak months or weekdays.

10 points:

Some seasonal concern.

5 points:

Minor concern.

0 points:

No off-season issue or not relevant.

### Commercial Value Score: 0–15

15 points:

Average booking / event value €1,000+.

12 points:

€500–€1,000.

8 points:

€250–€500.

4 points:

€100–€250.

0 points:

Below €100 or no meaningful commercial value.

### Reactivation Potential Score: 0–10

10 points:

Has previous customer contacts and wants more direct/repeat bookings.

7 points:

Has some contacts but scattered.

3 points:

No contacts, but wants direct bookings.

0 points:

No contacts and no interest in direct bookings.

### Urgency Score: 0–5

5 points:

Owner describes current pain as urgent.

3 points:

Owner describes problem but not urgent.

0 points:

No urgency.

## Lead Fit Categories

### High Fit: 75–100

Meaning:

Strong ICP fit. Contact quickly.

Recommended internal label:

> HIGH-FIT HOSPITALITY LEAD

Response priority:

Same day or within 24 hours.

### Medium Fit: 50–74

Meaning:

Potential fit. Needs manual review.

Recommended label:

> REVIEW-FIT HOSPITALITY LEAD

Response priority:

Within 48 hours.

### Low Fit: 0–49

Meaning:

Weak fit or likely not worth deep audit.

Recommended label:

> LOW-FIT OR UNCLEAR

Response priority:

Optional. Send polite qualification reply if needed.

## Disqualification Signals

Treat carefully if the lead says:

1. “Vajag tikai lētu mājaslapu”
2. “Mums nav svarīgi, no kurienes nāk klienti”
3. “Mums nav laika atbildēt klientiem”
4. “Mēs negribam neko mainīt”
5. “Mēs esam tikai Airbnb priekš hobija”
6. “Budžeta nav vispār”
7. “Vajag garantētus rezultātus”

These do not automatically reject, but lower fit.

## Slack Notification Summary

The Slack notification should be short and operational.

Template:

```text
New Vexilian Hospitality Audit Request

Fit score: {{score}} / 100
Fit category: {{category}}

Name: {{name}}
Place: {{company_name}}
Type: {{property_type}}
Phone: {{phone}}
Email: {{email}}
Link: {{website_url}}

Channels: {{enquiry_sources}}
Possible leakage: {{biggest_leak}}
Weak months: {{weak_months}}
Previous guest contacts: {{past_guest_contacts}}
Direct booking interest: {{direct_booking_interest}}
Estimated value: {{estimated_booking_value}}

UTM source: {{utm_source}}
UTM campaign: {{utm_campaign}}
Landing page: {{landing_page}}

Recommended next action: {{recommended_next_action}}
```

Recommended next action logic:

High fit:

> Call or WhatsApp today. Review public presence before contact.

Medium fit:

> Review manually. Check website/profile and decide follow-up angle.

Low fit:

> Send polite reply or hold unless capacity allows.

## Automatic Confirmation Email

Subject:

> Pieteikums saņemts — Vexilian klientu noplūdes audits

Body:

```text
Sveiki, {{name}}!

Paldies, pieteikums ir saņemts.

Mēs apskatīsim jūsu vietas situāciju, pieprasījumu kanālus un iespējamos punktus, kur cilvēki var pazust ceļā līdz rezervācijai.

Ja redzēsim, ka varam dot praktisku pienesumu, Vexilian komandas pārstāvis sazināsies ar jums WhatsApp vai telefoniski.

Ar cieņu,
Vexilian
```

Optional stronger version:

```text
Sveiki, {{name}}!

Paldies, pieteikums Vexilian klientu noplūdes auditam ir saņemts.

Tālāk apskatīsim:
1. no kurienes pie jums šobrīd nāk pieprasījumi;
2. kur cilvēki var pazust pirms rezervācijas;
3. vai ir redzams potenciāls vairāk tiešajām rezervācijām vai klusāku mēnešu aizpildei.

Ja situācija būs atbilstoša mūsu darbam, sazināsimies WhatsApp vai pa telefonu.

Ar cieņu,
Vexilian
```

## Thank-You Page Copy

Headline:

> Pieteikums saņemts.

Body:

> Mēs apskatīsim jūsu situāciju un sazināsimies WhatsApp vai pa telefonu, ja redzēsim, ka varam dot praktisku pienesumu.

Secondary note:

> Tikmēr varat pārdomāt: kuri mēneši jums parasti ir klusākie, un no kuriem kanāliem šobrīd nāk vērtīgākie pieprasījumi.

## Form UX Rules

1. Use plain Latvian.
2. Do not ask technical questions.
3. Do not ask for CRM details.
4. Do not make the owner feel judged.
5. Do not ask for exact revenue unless necessary.
6. Use “aptuveni” where asking about value.
7. Make WhatsApp/phone follow-up clear.
8. Keep the CTA diagnostic.
9. Show why the questions matter through section framing.
10. Make the form feel selective, not desperate.

## Form CTA Options

Primary:

> Pieteikt bezmaksas auditu

Alternative:

> Sākt klientu noplūdes auditu

Alternative:

> Nosūtīt situāciju Vexilian komandai

Recommended:

> Pieteikt bezmaksas auditu

## Final Form Acceptance Checklist

The form is ready only if:

1. It scores lead quality.
2. It captures off-season pain.
3. It captures enquiry channels.
4. It captures platform dependence.
5. It captures previous guest reactivation potential.
6. It captures commercial value softly.
7. It avoids technical questions.
8. It sets WhatsApp/phone expectation.
9. It supports internal prioritisation.
10. It feels like an audit, not a contact form.
