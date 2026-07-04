# VERCEL_FIX — إصلاح خطأ «No Output Directory named "public"»

## الخطأ

```
No Output Directory named "public" found after the Build completed.
```

## السبب

مشروع Vercel أُنشئ أيام النسخة السكونية القديمة (HTML/CSS/JS)، فبقيت إعداداته تتوقع مجلد مخرجات ثابتاً اسمه `public` بعد البناء. المستودع الآن تطبيق **Next.js** قياسي يبني إلى `.next`، فلا يوجد — ولا يجب أن يوجد — مجلد مخرجات باسم `public`.

## الإصلاح داخل المستودع (مطبق)

1. **`vercel.json`** يثبّت إطار العمل ويتجاوز الإعداد القديم في اللوحة:

   ```json
   {
     "$schema": "https://openapi.vercel.sh/vercel.json",
     "framework": "nextjs",
     "buildCommand": "npm run build",
     "installCommand": "npm install"
   }
   ```

   لا يتضمن `outputDirectory` إطلاقاً — النشر القياسي لـ Next.js لا يحتاجه.

2. **`package.json`** يحتوي أوامر Next.js القياسية: `dev` / `build` / `start` (+ `lint` و`typecheck`).

3. **`next.config.ts`** قياسي وبسيط — لا `distDir: "public"` ولا `output: "export"`.

## الإعداد الصحيح في لوحة Vercel

إذا كانت إعدادات المشروع في اللوحة مضبوطة يدوياً، فتأكد من (Settings → Build and Deployment):

| الإعداد | القيمة الصحيحة |
|---|---|
| Framework Preset | **Next.js** |
| Build Command | `npm run build` (أو اتركه للافتراضي) |
| Output Directory | **اتركه فارغاً** — أزل أي Override يشير إلى `public` |
| Install Command | `npm install` (أو الافتراضي) |

## ملاحظة عن مجلد `public`

في Next.js، مجلد `public/` (إن وُجد) مخصص للأصول الثابتة فقط — صور، أيقونات، خطوط — ويُخدم من الجذر. **ليس** مجلد مخرجات البناء ولا يجوز ضبطه كذلك. لا يحتوي هذا المشروع حالياً على أصول ثابتة، لذا لا يوجد المجلد أصلاً؛ إن أضيفت أصول لاحقاً فأنشئه بشكل طبيعي دون تغيير أي إعداد نشر.

## التحقق

```bash
npm install
npm run build   # يمر دون أخطاء — كل الصفحات تُولّد سكونياً داخل .next
```
