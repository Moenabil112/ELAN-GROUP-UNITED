/* =========================================================
   مكوّنات العرض — دوال بناء قابلة لإعادة الاستخدام
   HeroFinancialCard / LayerCard / UseOfFundsCard /
   RevenueChannelCard / TimelineStep / RiskGovernanceCard /
   DeepDiveAccordion / CTASection
   ========================================================= */

/* أيقونات خطية مجردة — بلا رموز تقنية أو مستقبلية */
const ELAN_ICONS = {
  strata: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 16c6-4 12 4 18 0s12-4 18 0"/><path d="M6 26c6-4 12 4 18 0s12-4 18 0"/><path d="M6 36c6-4 12 4 18 0s12-4 18 0"/></svg>',
  shield: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M24 6l14 5v11c0 9-6 16-14 20-8-4-14-11-14-20V11l14-5z"/><path d="M17 24l5 5 9-10"/></svg>',
  field:  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="4"/><path d="M24 6v8M24 34v8M6 24h8M34 24h8"/><circle cx="24" cy="24" r="15" stroke-dasharray="3 5"/></svg>',
  growth: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 40h32"/><path d="M12 34v-8M22 34V16M32 34V22M40 34V10"/></svg>',
  impact: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="16"/><path d="M24 8c-6 8-6 24 0 32M24 8c6 8 6 24 0 32M9 20h30M9 28h30"/></svg>',
  lock:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="10" width="14" height="10" rx="1.5"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
  check:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12.5l5 5L20 7"/></svg>',
  minus:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>'
};

/* بطاقة مالية رئيسية — Hero */
function HeroFinancialCard(card) {
  return `
    <div class="hero-card reveal">
      <div class="hero-card__value"><span class="num">${card.value}</span><span class="hero-card__unit">${card.unit}</span></div>
      <p class="hero-card__label">${card.label}</p>
    </div>`;
}

/* بطاقة طبقة تشغيلية */
function LayerCard(layer) {
  return `
    <article class="layer-card reveal">
      <div class="layer-card__head">
        <span class="layer-card__icon">${ELAN_ICONS[layer.icon] || ""}</span>
        <span class="layer-card__num num">${layer.num}</span>
      </div>
      <h3 class="layer-card__title">${layer.title}</h3>
      <p class="layer-card__desc">${layer.desc}</p>
      <p class="layer-card__value"><span>قيمة المستثمر</span>${layer.value}</p>
    </article>`;
}

/* بطاقة مركز إنفاق */
function UseOfFundsCard(item, total) {
  const pct = Math.round((item.amount / total) * 100);
  return `
    <article class="fund-card reveal">
      <div class="fund-card__top">
        <span class="fund-card__dot" style="background:${item.color}"></span>
        <span class="fund-card__amount"><span class="num">${item.amount}</span> مليون ريال</span>
        <span class="fund-card__pct num">${pct}%</span>
      </div>
      <h3 class="fund-card__title">${item.title}</h3>
      <p class="fund-card__desc">${item.desc}</p>
      <div class="fund-card__bar"><span style="width:${pct}%;background:${item.color}"></span></div>
    </article>`;
}

/* العجلة المالية — رسم دائري بتدرّج مخروطي */
function UseOfFundsWheel(items, totalValue, totalUnit, totalLabel) {
  const total = items.reduce((s, i) => s + i.amount, 0);
  let acc = 0;
  const stops = items.map(i => {
    const from = (acc / total) * 360;
    acc += i.amount;
    const to = (acc / total) * 360;
    return `${i.color} ${from.toFixed(1)}deg ${to.toFixed(1)}deg`;
  }).join(", ");
  return `
    <div class="fund-wheel reveal" role="img" aria-label="توزيع رأس المال البالغ 100 مليون ريال على ستة مراكز إنفاق">
      <div class="fund-wheel__ring" style="background:conic-gradient(from -90deg, ${stops})">
        <div class="fund-wheel__center">
          <span class="fund-wheel__total num">${totalValue}</span>
          <span class="fund-wheel__unit">${totalUnit}</span>
          <span class="fund-wheel__label">${totalLabel}</span>
        </div>
      </div>
    </div>`;
}

/* بطاقة قناة إيراد */
function RevenueChannelCard(ch, statusLabel) {
  return `
    <article class="rev-card reveal">
      <div class="rev-card__type">${ch.type}</div>
      <h3 class="rev-card__title">${ch.title}</h3>
      <dl class="rev-card__rows">
        <div><dt>ما الذي يدفع مقابله العميل؟</dt><dd>${ch.pays}</dd></div>
        <div><dt>لماذا تهم هذه القناة؟</dt><dd>${ch.why}</dd></div>
      </dl>
      <p class="rev-card__status"><span class="rev-card__status-dot"></span>${statusLabel}</p>
    </article>`;
}

/* خطوة زمنية */
function TimelineStep(step, index) {
  return `
    <li class="tl-step reveal" style="transition-delay:${index * 70}ms">
      <div class="tl-step__marker"><span></span></div>
      <div class="tl-step__period"><span class="num">${step.period}</span> ${step.periodUnit}</div>
      <h3 class="tl-step__title">${step.title}</h3>
      <p class="tl-step__desc">${step.desc}</p>
    </li>`;
}

/* بطاقة خطر واستجابة حوكمية */
function RiskGovernanceCard(item) {
  return `
    <article class="risk-card reveal">
      <h3 class="risk-card__title">${item.risk}</h3>
      <p class="risk-card__desc">${item.desc}</p>
      <div class="risk-card__response">
        <span class="risk-card__response-label">الاستجابة الحوكمية</span>
        <p>${item.response}</p>
      </div>
    </article>`;
}

/* وحدة تعمق مالي قابلة للتوسيع */
function DeepDiveAccordion(mod, lockNote) {
  return `
    <details class="dd-item reveal">
      <summary>
        <span class="dd-item__icon">${ELAN_ICONS.lock}</span>
        <span class="dd-item__title">${mod.title}</span>
        <span class="dd-item__chevron" aria-hidden="true"></span>
      </summary>
      <div class="dd-item__body">
        <p>${mod.desc}</p>
        <p class="dd-item__lock-note">${lockNote}</p>
      </div>
    </details>`;
}

/* لوحة الدعوة للإجراء */
function CTASection(cta) {
  const buttons = cta.buttons.map(b =>
    `<a href="#" class="btn ${b.primary ? "btn--primary" : "btn--ghost"}" role="button">${b.label}</a>`
  ).join("");
  return `
    <h2 class="section__heading">${cta.heading}</h2>
    <p class="section__intro">${cta.intro}</p>
    <div class="cta__buttons reveal">${buttons}</div>
    <p class="cta__disclaimer reveal">${cta.disclaimer}</p>`;
}
