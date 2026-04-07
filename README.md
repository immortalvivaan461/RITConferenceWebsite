# 🎓 ICAISA-2026 Conference Website

A modern, responsive conference website built using **HTML, CSS, and JavaScript** for ICAISA-2026 (International Conference on Artificial Intelligence and Smart Applications).

---

## 🚀 Features

* 🎨 Clean and modern UI/UX design
* 📱 Fully responsive (mobile, tablet, desktop)
* 🧩 Structured sections (Home, About, Committee, Tracks, Registration, Contact)
* 📝 Dynamic registration form
* 📊 Google Sheets integration (no backend required)

---

## 🧱 Project Structure

```
├── index.html
├── about.html
├── committee.html
├── committee.css
├── contact.html
├── registration.html
├──── style.css
├──── script.js
├── resource/
│   ├── images..
│   └── icons...
```

---

## 📌 Key Sections

* **Home** → Overview + Hero section
* **About** → Conference + Institute details
* **Committee** → Organized team structure
* **Tracks** → Conference themes
* **Registration** → Form submission
* **Contact** → Location & communication

---

## 📝 Registration Form Integration (Google Sheets)

This project uses **Google Apps Script** to directly store form data into Google Sheets.

---

### ⚙️ Step 1: Create Google Sheet

1. Open Google Sheets
2. Create a new sheet
3. Add columns:

```
Name | Email | Phone | Address | Track | Institution | Paper Title | Author | Type | Message
```

---

### ⚙️ Step 2: Open Apps Script

* Go to **Extensions → Apps Script**

---

### ⚙️ Step 3: Add Script

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var data = e.parameter;

  sheet.appendRow([
    data.fullName,
    data.email,
    data.phone,
    data.address,
    data.track,
    data.institution,
    data.paperTitle,
    data.author,
    data.type,
    data.message,
    new Date()
  ]);

  return ContentService
    .createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

---

### ⚙️ Step 4: Deploy Script

1. Click **Deploy → Manage Deployments**
2. Select:

   * Execute as: **Me**
   * Access: **Anyone**
3. Copy the **Web App URL**

---

### ⚙️ Step 5: Connect Form (JavaScript)

```registration page ---> <script>
const form = document.getElementById("registrationForm");
            const button = form.querySelector(".submit-btn");

            form.addEventListener("submit", e => {
                e.preventDefault();

                // Start loading
                button.classList.add("loading");
                button.disabled = true;
                //Update your link here ||
                fetch("YOUR_SCRIPT_URL_HERE", {
                    method: "POST",
                    body: new FormData(form)
                })
                    .then(res => {
                        alert("Success ✅");
                        form.reset();
                    })
                    .catch(err => {
                        console.log("Error:", err);
                        alert("Error ❌");
                    })
                    .finally(() => {
                        // Stop loading
                        button.classList.remove("loading");
                        button.disabled = false;
                    });
            });
```

---

## ⚠️ Important Notes

* Replace `YOUR_SCRIPT_URL_HERE` with your deployed script URL
* Ensure all form inputs have proper `name` attributes
* Google Sheet must have correct column order

---

## 💡 Future Improvements

* ✅ Form validation (error handling)
* ✅ Loading spinner on submit
* ✅ Email confirmation system
* ✅ Admin dashboard

---

## 👨‍💻 Developed By

* Website Developer: *Vivaan Saroj*
* Project: RIT ICAISA-2026 Conference Website

---

## 📄 License

This project is developed for academic and conference purposes.
