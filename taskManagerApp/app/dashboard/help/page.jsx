"use client";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "./help.module.css"; // Assuming you have CSS modules set up

export default function Help() {
  const [open, setOpen] = useState({});

  const toggleDropdown = (key) => {
    setOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Help Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Help Page</h1>
        
        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading} onClick={() => toggleDropdown("Application")}>
            Full Application
          </h2>
          {open["Application"] && (
            <ul>
              <li>In the homepage, you see the news page and the dashboard that shows selections in the application</li>
              <li> The dashboard shows the following selections: News, Calendar, My Task, Blogs, and Settings</li>
              <li>Click on the selection to navigate to the page</li>
            </ul>
          )}
        </div>
        
        
        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading} onClick={() => toggleDropdown("news")}>
            News and Updates
          </h2>
          {open["news"] && (
            <ul>
              <li>News page is used to see new announcements and events going on in the Senior Home</li>
            </ul>
          )}
        </div>

        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading} onClick={() => toggleDropdown("calendar")}>
            Calendar
          </h2>
          {open["calendar"] && (
            <ul>
              <li>Calendar layout can be showed in Today, Day, Week, Month, or Agenda format</li>
              <li>When a task is added, the Calendar is updated and you can see the new task and the date</li>
              <li>You can click on the task to view the title of that task, time duration, and the location</li>
              <li>This calendar is a view only calendar meaning only admin can edit the calendar, for students its view only</li>
            </ul>
          )}
        </div>        

        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading} onClick={() => toggleDropdown("myTask")}>
            My Task
          </h2>
          {open["myTask"] && (
            <ul>
              <li>Navigate to My Tasks page to add a task or view recently added tasks</li>
              <li>To add a task do the following</li>
              <li>Click on the add task button on the right side of the page</li>
              <li>Fill in the information requested</li>
              <li>Click on the add task button</li>
            </ul>
          )}
        </div>

        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading} onClick={() => toggleDropdown("blogs")}>
            Blogs
          </h2>
          {open["blogs"] && (
            <ul>
              <li>Navigate to Blogs on the left of the navbar</li>
              <li>Adding a blog will help the admin see interactive events happening at the senior home.</li>
              <li>To add a blog fill in the information requested such as the title, blog description, and a photo of the event you want to share!</li>
              <li>Click on create blog post</li>
              <li>Blog is created and it is previewed on the page after clicking save</li>
            </ul>
          )}
        </div>

        <div className={styles.settingsBlock}>
          <h2 className={styles.subheading} onClick={() => toggleDropdown("settings")}>
            Settings
          </h2>
          {open["settings"] && (
            <ul>
              <li>Settings is only used to preview how your profile looks for you</li>
              <li>If you need anything changed in the settings please contact an Administrator</li>
            </ul>
          )}
        </div>
      </main>

      <div className={styles.contactContainerFullWidth}>
        <h2 className={styles.subheading}>Contact Us</h2>
        <div className={styles.contactSection}>
          <div className={styles.contactField}>
            <img src="https://cdn-icons-png.freepik.com/512/6948/6948614.png" alt="Address" className={styles.icon} />
            <p>123 Main Street, City, Country</p>
          </div>
          <div className={styles.contactField}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png" alt="Phone" className={styles.icon} />
            <p>123-456-7890</p>
          </div>
          <div className={styles.contactField}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-email-17-83578.png" alt="Email" className={styles.icon} />
            <p>info@seniorhome.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
