'use client';

import { useState } from "react";
import { mockData } from "../data/activities";
import { statusToVariant, statusLabels, ActivityStatus } from "@/constants/status";
// import clsx from "clsx";
import Header from "@/components/Header/Header";
import Tag from "@/components/Tag/Tag";
import styles from "./page.module.css";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredData = mockData.filter((activity) => {
    const lowerSearch = search.toLowerCase();
    return (
      activity.subject.toLowerCase().includes(lowerSearch) ||
      activity.description.toLowerCase().includes(lowerSearch) ||
      activity.user.name.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className={styles.page}>
      <nav className={styles.sidebar}>
        {/* Sidebar content */}
      </nav>
      <main className={styles.main}>
        <Header />
        <section className={styles.filters}>
          <input
            type="text"
            placeholder="Rechercher une activité..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </section>
        <section className={styles.feedsWrapper}>
          <ul className={styles.feeds}>
            {filteredData.map((activity) => (
              <li key={activity.id} className={styles.feedItem}>
                <div>
                  <p className={styles.feedSubject}>{activity.subject}</p>
                  <p className={styles.feedDescription}>{activity.description}</p>
                </div>
                <div>
                  <p className={styles.feedName}>{activity.user.name}</p>
                  <p className={styles.feedDate}>{new Date(activity.createdAt).toLocaleDateString("en-EN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                  })}</p>
                </div>
                <div className={styles.feedTag}>
                  <Tag
                    label={statusLabels[activity.status as ActivityStatus]}
                    variant={statusToVariant[activity.status as ActivityStatus]}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
