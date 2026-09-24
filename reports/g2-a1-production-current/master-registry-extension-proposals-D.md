# G2/A1 — MASTER registry extension proposals (OWNER D)

**Not merged into MASTER** until separate OWNER approval per language.

## BS (`bs`)

- **Candidate resource:** Institut za jezik / Rječnik bosanskoga jezika (online if published on izj.unsa.ba or gov.ba domain)
- **Institution / owner:** University of Sarajevo — Institute for Language (izj.unsa.ba); language policy: Bosnian Language Council
- **Authority evidence:** State/academic language institute listed in MASTER as norm authority; no stable public lemma→entry URL chain verified for automation.
- **Domain:** izj.unsa.ba (existing MASTER norm URL — entry deep-link not verified)
- **Entry lookup:** Homepage and institute pages fetch; no verified machine- or browser-validated dictionary entry URL pattern.
- **Constraints:** Public pages only; no CAPTCHA bypass; no unofficial Wiktionary substitute.
- **Why current MASTER is insufficient:** MASTER cites institute/norm site without a concrete, repeatable dictionary entry resource for SOURCE_ENTRY_VALIDATED.
- **JSON diff hint:** `scripts/lib/data/master-language-authority-sources-33.json` → `PRIMARY_DICTIONARY_URLS` — OWNER to approve adding explicit PRIMARY_DICTIONARY_* with entry URL template after manual verification
- **Status:** PROPOSAL_AWAITING_OWNER_APPROVAL

## SQ (`sq`)

- **Candidate resource:** Akademia e Shkencave — Fjalor i gjuhës shqipe (if hosted on akad.gov.al or dedicated lexicography subdomain)
- **Institution / owner:** Academy of Sciences of Albania (akad.gov.al)
- **Authority evidence:** MASTER lists akad.gov.al as authority; national academy — normative for Albanian.
- **Domain:** akad.gov.al (or future dedicated lexicography host under .gov.al)
- **Entry lookup:** HTTP fetch of homepage succeeds; no automated entry chain validated in G2/A1 browser pilots.
- **Constraints:** Public browser session only; stop on auth/CAPTCHA.
- **Why current MASTER is insufficient:** No PRIMARY_DICTIONARY entry URL with verified lookup in structured MASTER row.
- **JSON diff hint:** `scripts/lib/data/master-language-authority-sources-33.json` → `PRIMARY_DICTIONARY_AUTHORITY + PRIMARY_DICTIONARY_URLS` — Add academy dictionary product URL once OWNER confirms official entry search path
- **Status:** PROPOSAL_AWAITING_OWNER_APPROVAL

## SR (`sr`)

- **Candidate resource:** Matica srpska / SANU language institute — Rečnik srpskoga jezika (online edition if on maticasrpska.org.rs or isj.sanu.ac.rs)
- **Institution / owner:** Matica srpska; Institute for Serbian Language (SANU)
- **Authority evidence:** MASTER references SANU/Matica normative institutions for Serbian.
- **Domain:** maticasrpska.org.rs or isj.sanu.ac.rs
- **Entry lookup:** No verified public entry lookup without manual navigation proof in this PR.
- **Constraints:** Official domains only; no unofficial sr.wiktionary.
- **Why current MASTER is insufficient:** Norm URLs present; primary dictionary entry automation path not established.
- **JSON diff hint:** `scripts/lib/data/master-language-authority-sources-33.json` → `PRIMARY_DICTIONARY_URLS` — OWNER approves canonical online dictionary host + search/entry pattern
- **Status:** PROPOSAL_AWAITING_OWNER_APPROVAL

## MK (`mk`)

- **Candidate resource:** drmj.eu / IMJ (Institute for Macedonian Language) — only if normal public browser session reaches entry content
- **Institution / owner:** Institute for Macedonian Language (IMJ), North Macedonia
- **Authority evidence:** MASTER lists Macedonian language institute resources; drmj.eu attempted in browser pilot.
- **Domain:** drmj.eu (conditional — connection/availability observed in cloud pilot)
- **Entry lookup:** Browser pilot: net::ERR_CONNECTION_CLOSED on search URL in this environment; re-test required when site reachable.
- **Constraints:** Use only if public session works without bypass; otherwise remain blocked pending OWNER access decision.
- **Why current MASTER is insufficient:** If drmj.eu remains unreachable, MASTER needs an alternate IMJ-hosted official dictionary URL approved by OWNER.
- **JSON diff hint:** `scripts/lib/data/master-language-authority-sources-33.json` → `PRIMARY_DICTIONARY_URLS` — Replace or supplement drmj.eu with IMJ-official stable dictionary URL if pilot stays blocked
- **Status:** CONDITIONAL_ON_BROWSER_REACHABILITY
