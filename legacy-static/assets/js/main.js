/* =========================================================
   تركيب النافذة — ربط البيانات بالمكوّنات
   ========================================================= */

(function () {
  "use strict";

  const D = ELAN_DATA;
  const el = (id) => document.getElementById(id);

  /* ---------- الترويسة ---------- */
  el("meta-entity").textContent = D.meta.entity;
  el("meta-privacy").textContent = D.meta.privacyLabel;

  /* ---------- القسم الافتتاحي ---------- */
  el("hero-window-title").textContent = D.meta.windowTitle;
  el("hero-title").textContent = D.hero.title;
  el("hero-subtitle").textContent = D.hero.subtitle;
  el("hero-cards").innerHTML = D.hero.cards.map(HeroFinancialCard).join("");
  el("hero-note").textContent = D.hero.note;
  el("hero-status").textContent = D.meta.financialStatus;

  /* ---------- المشكلة ---------- */
  el("problem-heading").textContent = D.problem.heading;
  el("problem-intro").textContent = D.problem.intro;
  el("problem-list").innerHTML = D.problem.statements
    .map((s, i) => `<li class="statement reveal" style="transition-delay:${i * 60}ms"><span class="statement__index num">0${i + 1}</span><p>${s}</p></li>`)
    .join("");

  /* ---------- التعريف ---------- */
  el("definition-heading").textContent = D.definition.heading;
  el("definition-body").textContent = D.definition.body;
  el("definition-support").textContent = D.definition.support;

  /* ---------- الطبقات الخمس ---------- */
  el("layers-heading").textContent = D.layers.heading;
  el("layers-intro").textContent = D.layers.intro;
  el("layers-grid").innerHTML = D.layers.items.map(LayerCard).join("");

  /* ---------- استخدام رأس المال ---------- */
  const fundsTotal = D.useOfFunds.items.reduce((s, i) => s + i.amount, 0);
  el("funds-heading").textContent = D.useOfFunds.heading;
  el("funds-intro").textContent = D.useOfFunds.intro;
  el("funds-wheel").innerHTML = UseOfFundsWheel(
    D.useOfFunds.items,
    D.useOfFunds.totalValue,
    D.useOfFunds.totalUnit,
    D.useOfFunds.totalLabel
  );
  el("funds-grid").innerHTML = D.useOfFunds.items
    .map((i) => UseOfFundsCard(i, fundsTotal))
    .join("");
  el("funds-note").textContent = D.useOfFunds.note;

  /* ---------- قنوات الإيراد ---------- */
  el("revenue-heading").textContent = D.revenue.heading;
  el("revenue-intro").textContent = D.revenue.intro;
  el("revenue-grid").innerHTML = D.revenue.items
    .map((c) => RevenueChannelCard(c, D.revenue.statusLabel))
    .join("");

  /* ---------- الأفق الزمني ---------- */
  el("timeline-heading").textContent = D.timeline.heading;
  el("timeline-intro").textContent = D.timeline.intro;
  el("timeline-steps").innerHTML = D.timeline.steps.map(TimelineStep).join("");
  el("timeline-caution").textContent = D.timeline.caution;

  /* ---------- ما يحصل عليه المستثمر ---------- */
  el("receives-heading").textContent = D.receives.heading;
  el("receives-grid").innerHTML = D.receives.items
    .map((r, i) => `
      <article class="receive-card reveal" style="transition-delay:${i * 50}ms">
        <span class="receive-card__icon">${ELAN_ICONS.check}</span>
        <div>
          <h3>${r.title}</h3>
          <p>${r.desc}</p>
        </div>
      </article>`)
    .join("");

  /* ---------- ما لا تتضمنه النافذة ---------- */
  el("notreceives-heading").textContent = D.notReceives.heading;
  el("notreceives-intro").textContent = D.notReceives.intro;
  el("notreceives-list").innerHTML = D.notReceives.items
    .map((t) => `<li class="reveal"><span class="not-item__icon">${ELAN_ICONS.minus}</span>${t}</li>`)
    .join("");

  /* ---------- المخاطر والحوكمة ---------- */
  el("risks-heading").textContent = D.risks.heading;
  el("risks-intro").textContent = D.risks.intro;
  el("risks-grid").innerHTML = D.risks.items.map(RiskGovernanceCard).join("");

  /* ---------- طبقة التعمق المالي ---------- */
  el("deepdive-heading").textContent = D.deepDive.heading;
  el("deepdive-intro").textContent = D.deepDive.intro;
  el("deepdive-list").innerHTML = D.deepDive.modules
    .map((m) => DeepDiveAccordion(m, D.deepDive.lockNote))
    .join("");

  /* ---------- الخطوة التالية ---------- */
  el("cta-content").innerHTML = CTASection(D.cta);

  /* ---------- التذييل ---------- */
  el("footer-entity").textContent = D.meta.entity;
  el("footer-status").textContent = D.meta.financialStatus;

  /* ---------- كشف تدريجي هادئ عند التمرير ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => io.observe(t));
  }
})();
