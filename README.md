# Student Task Manager

A clean, responsive web application built as part of a Git collaboration and web development lab. This project manages student tasks locally with a sleek user interface and real-time search capabilities.

## 🚀 Features

- *Task Creation*: Add tasks with a custom title and optional description via an intuitive input form.
- *Dynamic Search*: Instantly filter through your task list in real-time as you type in the search bar.
- *Responsive Design*: Clean layout that adapts smoothly across mobile and desktop screens.
- *Git Workflow Integration*: Maintained through collaborative branching, issue tracking, version tagging (v1.0.0), and pull requests.

---

## 📂 Project Structure & File Explanations

### 1. index.html (Markup Structure)
The entry point of the application containing the semantic HTML layout:
- *Search Container*: Houses the real-time search input (#search-input) for filtering tasks[cite: 3].
- *Task Form*: Form element (#task-form) capturing user inputs for the task title (#task-title) and description (#task-desc).
- *Task List (#task-list)*: An unordered list container dynamically populated with newly added tasks via JavaScript.

### 2. style.css (Visual Styling & Layout)
Provides a modern card-based aesthetic using a centered flexbox layout:
- *Global Resets*: Applies consistent box-sizing and typography (Segoe UI) across all elements[cite: 3].
- *Container Styling*: Implements a white card layout with soft shadows and rounded corners for a clean UI.
- *Form & Input States*: Styled text inputs, textareas, and buttons with interactive focus outlines and smooth hover transitions.
- *Responsive Layout*: Uses CSS media queries (max-width: 600px) to adjust padding and margins seamlessly on smaller mobile screens[cite: 3].

### 3. script.js (Core Application Logic)
Handles event-driven DOM manipulation and interactivity:
- *Task Addition Handler*: Listens for form submissions, prevents default page reloading, validates task input, and dynamically generates list elements (<li>) containing the task title and description.
- *Search Filter Logic*: Attaches an input event listener to the search bar that converts search inputs and task text to lowercase, dynamically toggling visibility (display: none or '') for matching records.

---

## 🛠️ Getting Started & Usage

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/tehreemsanaullah/Student-Task-Manager.git](https://github.com/tehreemsanaullah/Student-Task-Manager.git)
