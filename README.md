# خطوات التشغيل

## 1) جدول Google (مكان حفظ الأسماء)
1. افتح sheets.new وسمّه "كشف حضور سلفيت".
2. من القائمة: الإضافات (Extensions) ← Apps Script.
3. امسح الكود الموجود والصق محتوى ملف `Code.gs` ثم احفظ.
4. اضغط نشر (Deploy) ← نشر جديد (New deployment) ← النوع: تطبيق ويب (Web app).
   - Execute as: Me
   - Who has access: Anyone
5. وافق على الصلاحيات، ثم انسخ رابط Web app (ينتهي بـ /exec).

## 2) ضع الرابط في الصفحة
افتح `index.html` وبدّل `PUT_YOUR_APPS_SCRIPT_URL_HERE` بالرابط الذي نسخته.

## 3) الرفع على GitHub
1. أنشئ مستودع جديد (Public) على github.com.
2. ارفع ملف `index.html` (Add file ← Upload files).
3. Settings ← Pages ← Source: Deploy from a branch ← Branch: main / root ← Save.
4. بعد دقيقة يصبح الرابط: https://USERNAME.github.io/REPO/

## 4) تنزيل الأسماء
افتح الجدول ← ملف (File) ← تنزيل (Download) ← Microsoft Excel (.xlsx).

ملاحظة: كل من لديه رابط الصفحة يستطيع التسجيل دون حساب. لو عدّلت كود Apps Script لاحقاً يجب عمل "نشر جديد" ليأخذ التعديل.
