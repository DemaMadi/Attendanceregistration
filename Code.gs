function doPost(e) {
  var p = e.parameter;
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) {
    sh.appendRow(['الوقت','الاسم','الجنس','العمر','العمل','الجهة','العنوان','أرقام الاتصال','البريد الإلكتروني','وجود إعاقة','رب أسرة لشخص ذي إعاقة']);
    sh.setRightToLeft(true);
  }
  sh.appendRow([new Date(), p.name, p.gender, p.age, p.job, p.party, p.addr, "'" + (p.phone || ''), p.email, p.dis, p.head]);
  return ContentService.createTextOutput('ok');
}
