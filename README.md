# Register, Login, Forget & Reset Password with Modular Express JS

## Add this Property in your VS Code -> "settings.json" File's Object
```bash
"javascript.preferences.importModuleSpecifierEnding": "js",
```

## [Create Gmail App Password](myaccount.google.com/apppasswords)

## If the Link doesn't work, copy paste the following URL
```
myaccount.google.com/apppasswords
```

## Clone the Github Repo
```bash
git clone https://github.com/risalshahed/mern-16-ostad.git
```

## Change to the Directory
```bash
cd mern-16-ostad
```

## Switch to the Branch
```bash
git switch module-18-reg-login-view
```

## Install & Run the Project

```bash
npm i
npm run dev
```

---

## Project Structure

```text
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middlewares/
│   └── authMiddleware.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── auth.js
│
├── utils/
│   └── sendEmail.js
│
├── .env
├── .gitignore
├── package.json
└── server.js