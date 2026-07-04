import { REVIEW_PATH } from "@/data/reviewPath";

export default function ReviewPath() {
  return (
    <div className="review-panel">
      <h3>مسار المراجعة الرسمي</h3>
      <p>
        عملية داخلية منضبطة من ثماني خطوات تنقل الطرف المراجع من الاطلاع إلى
        قرار موثق — لا التزام قبل اكتمال العناية المستقلة.
      </p>
      <ol className="review-steps">
        {REVIEW_PATH.map((s) => (
          <li key={s.step} className="review-step">
            <span className="review-step__num num">{s.step}</span>
            <div className="review-step__title">{s.titleAr}</div>
            <div className="review-step__desc">{s.descAr}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
