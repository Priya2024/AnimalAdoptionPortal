# 🐾 Animal Adoption Portal – Salesforce Full Stack Project

This project is a real-time **Salesforce-based Animal Adoption Portal** built to simulate an online animal adoption process using **Lightning Web Components (LWC)**, **Aura Components**, **Apex**, **Flows**, and fully integrated with **GitHub Actions CI/CD** pipeline for automated deployment to Salesforce.

> 🔥 Ideal for showcasing Salesforce Admin + Developer + DevOps skills in a single project!

---

## 🎯 Project Objective

The goal of this project is to solve a common real-world problem:  
> **Managing animal adoption requests and tracking their approval process in a digital and automated way.**

---

## 🧠 Problem Statement

Animal shelters and NGOs often struggle with:
- Paper-based or manual processes for adoption.
- Delayed approvals and poor communication with adopters.
- Lack of real-time tracking of request status.

---

## ✅ Solution Provided

- A digital **Adoption Request Form** built using LWC.
- Real-time **status tracking** via an Aura Component.
- Automated **approval flows**, record creation, and email alerts using Salesforce Flows.
- Back-end logic via **Apex classes** for fetching/updating data.
- Seamless **GitHub to Salesforce CI/CD** deployment using GitHub Actions.

---

## 🛠️ Technologies Used

| Tool / Tech            | Purpose                                      |
|------------------------|----------------------------------------------|
| ⚡ Salesforce DX        | Project structure & source management        |
| 🧩 Lightning Web Components (LWC) | Front-end UI for adoption form       |
| 🌈 Aura Components      | Real-time status display of adoptions        |
| 🧠 Apex Classes         | Business logic for status tracking           |
| 🔄 Salesforce Flows     | Automation – email, approvals, updates       |
| 🧰 Salesforce CLI       | Command line deployment & SFDX commands      |
| 🔁 GitHub Actions       | CI/CD – automatic deployment on every push   |

---

## 🧱 Key Components & Their Roles

### 🔹 1. **LWC – Adoption Form**
- Captures adopter details, preferred animal, and comments.
- Validates input before submitting.
- Stores data in Salesforce as a custom object record.

### 🔹 2. **Aura Component – Animal Status Tracker**
- Visual representation of adoption request status.
- Uses `lightning:recordViewForm` and Apex controller.

### 🔹 3. **Apex Class – AnimalStatusController**
- Retrieves adoption status dynamically from custom object.
- Used by both Aura and LWC for data logic.

### 🔹 4. **Flow – Approval & Automation**
- Automatically sends email alerts to admin.
- Updates adoption status after manager approval.
- Can be customized for multi-step approvals.

---

## 🚀 GitHub Actions CI/CD Workflow

### 📂 Location: `.github/workflows/deploy.yml`

This file triggers CI/CD every time code is pushed to GitHub.

#### 🔄 Workflow Steps:
1. Checkout latest code
2. Install Salesforce CLI (`sfdx`)
3. Authenticate using auth URL or token
4. Deploy metadata using:
   ```bash
   sfdx force:source:deploy -p force-app/main/defaul
   
✅ Result:
Automatic deployment to Salesforce

Log visible under GitHub → Actions tab

🧪 Project Development Flow

1️⃣ Create new Salesforce DX project

2️⃣ Build LWC Component: adoptionForm

3️⃣ Create Apex Class: AnimalStatusController

4️⃣ Build Aura Component: animalStatusTracker

5️⃣ Set up custom objects & fields in Org

6️⃣ Design and configure approval Flows

7️⃣ Test components in Salesforce Org

8️⃣ Push project to GitHub

9️⃣ Configure GitHub Actions for CI/CD

🔟 Take screenshots & deploy final version

🖼️ Screenshots

Screenshot	Description

01_LWC_AdoptionForm.png	LWC component UI for adoption input

02_Aura_StatusTracker.png	Aura component showing live status

03_Flow_Automation.png	Salesforce flow automating the process

04_GitHub_CICD.png	GitHub Action showing successful deployment

05_CLI_Deploy.png	Salesforce CLI terminal deploy success.

📦 Project Directory Structure

AnimalAdoptionPortal/

├── force-app/

│   └── main/

│       └── default/

│           ├── lwc/


│           │      └── adoptionForm/

│           ├── aura/

│           │    └── animalStatusTracker/

│           ├── classes/ 

│           │   └── AnimalStatusController.cls

├── .github/

│   └── workflows/

│       └── deploy.yml

├── README.md


💻 How to Use or Reuse This Project

Fork or clone this repository.

Connect to your Salesforce Dev Org.

Run sfdx force:source:deploy -p force-app/main/default

Open the app in Salesforce → Add LWC & Aura components to a Lightning Page.

Trigger the flow with new record.

Monitor CI/CD in GitHub Actions tab.

📢 Author

👩‍💻 Priya Parmar

📬 Email: PriyaParmar628@gmail.com

🌐 GitHub: github.com/Priya2024

🔗 LinkedIn:www.linkedin.com/in/priya-parmar-4204a618a


