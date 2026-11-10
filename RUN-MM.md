# Tornado — အသုံးပြုပုံ

ဒီ ZIP က frontend source အပြည့်အစုံပါ။ Backend မပါပါ။

Shop Admin မှာ user info / recorded IP / IP blacklist ပါဝင်သည်။ Login ဝင်ရာတွင် ဆိုင်ပိုင်ရှင် email ဖြင့် shop ကိုရှာပြီး TornadoServiceBot မှ OTP ယူပါ။

လက်ရှိ project ဖိုင်များပေါ်တွင် ထည့်သုံးနိုင်ပါသည်။ လက်ရှိ `.env.local` ကို ဆက်သုံးပါ။ အသစ်စသုံးပါက `.env.example` ကို `.env.local` အဖြစ် copy လုပ်ပါ။ Backend URLs တွင် `/api` မထည့်ပါနှင့်။

PowerShell:

```powershell
cd shopadmin_dashboard
npm install
npm run build
npm start
```

Local address: http://localhost:3001

ပထမဆုံးပေးထားသည့် Tornado-MultiShop-20261106-PATCHED-ONLY.zip မှ Main/Shop backend patch နှင့် တွဲသုံးပါ။ SQL လိုအပ်ပါက ယခုသီးသန့်ပေးထားသည့် schema SQL ကို shared MySQL database တွင် run ပါ။

Validation: ဒီ source ကို production build နှင့် TypeScript စစ်ပြီး အောင်ထားပါသည်။ Local browser OTP/session flow ကို fixture backend ဖြင့် စမ်းထားပါသည်။
