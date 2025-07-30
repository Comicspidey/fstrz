'use client';

import { useCallback, useMemo, useState } from "react";
import { mockData } from "../data/activities";
import { statusToVariant, statusLabels, ActivityStatus } from "@/constants/status";
import Header from "@/components/Header/Header";
import Tag from "@/components/Tag/Tag";
import styles from "./page.module.css";
import { Combobox } from "@/components/shadcn/Combobox/combobox";
import { Input } from "@/components/SearchInput/SearchInput";
import { MultiSelect } from "@/components/shadcn/Multiselect/multiselect";
import { Button } from "@/components/Button/Button";
import { RotateCcw } from "lucide-react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<ActivityStatus | "">("");

  const subjects = useMemo(() => {
    return [...new Set(mockData.map(a => a.subject))].sort();
  }, []);

  const statuses = useMemo(() => {
    return [...new Set(mockData.map(a => a.status))].sort();
  }, []);

  const hasSearch = search.trim() !== "";
  const hasSelectedUser = selectedUser !== "";
  const hasSelectedSubjects = selectedSubjects.length > 0;
  const hasSelectedStatus = selectedStatus !== "";
  const hasActiveFilters = hasSearch || hasSelectedUser || hasSelectedSubjects || hasSelectedStatus;

  const resetFilters = useCallback(() => {
    setSearch("");
    setSelectedUser("");
    setSelectedSubjects([]);
    setSelectedStatus("");
  }, []);

  const filteredData = useMemo(() => {
  const lowerSearch = search.toLowerCase();
    return mockData.filter((activity) => {
      const matchesSearch =
        activity.subject.toLowerCase().includes(lowerSearch) ||
        activity.description.toLowerCase().includes(lowerSearch);
      const matchesUser = !selectedUser || activity.user.name === selectedUser;
      const matchesSubject = selectedSubjects.length === 0 || selectedSubjects.includes(activity.subject);
      const matchesStatus = !selectedStatus || activity.status === selectedStatus;
      return matchesSearch && matchesUser && matchesSubject && matchesStatus;
    });
  }, [search, selectedUser, selectedSubjects, selectedStatus]);

  const allUsers = useMemo(() => {
    return [...new Set(mockData.map(a => a.user.name))].sort();
  }, []);

  return (
    <div className={styles.page}>
      <nav className={styles.sidebar}>
        {/* Sidebar content */}
      </nav>
      <main className={styles.main}>
        <Header />

        <section className={styles.filters}>
          <div className={styles.filters__wrapper}>
            <MultiSelect
              options={subjects.map((subject) => ({
                label: `${subject} (${filteredData.filter(a => a.subject === subject).length})`,
                value: subject,
              }))}
              selected={selectedSubjects}
              onChange={setSelectedSubjects}
              label="All subjects"
              placeholder="Search"
              className={styles.filters__multiselect}
            />

            <Combobox
              label="All users"
              placeholder="Search a user"
              users={allUsers}
              selected={selectedUser}
              onSelect={setSelectedUser}
              getLabel={(user) => `${user} (${filteredData.filter(a => a.user.name === user).length})`}
              className={styles.filters__combobox}
            />

            <Combobox
              label="All statuses"
              placeholder="Select a status"
              users={statuses}
              selected={selectedStatus}
              onSelect={(value) => setSelectedStatus(value as ActivityStatus)}
              getLabel={(status) => `${statusLabels[status as ActivityStatus]} (${filteredData.filter(a => a.status === status).length})`}
              className={styles.filters__combobox}
            />
          </div>

          <Input
            placeholder="Search an activity..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.filters__input}
            ariaLabel="Search a subject or description"
          />
        </section>

        <section className={styles.activityFeed}>
          {filteredData.length > 0 && (
            <header className={styles.activityFeed__header}>
              <div className={styles.activityFeed__headerWrapper}>
                <div>{filteredData.length} result{filteredData.length !== 1 ? "s" : ""} found</div>
                <div>
                  <div className={styles.activityFeed__activeFilters}>
                    {hasSearch && (
                      <Button variant="isTag" label={search} onClick={() => setSearch("")} />
                    )}

                    {hasSelectedUser && (
                      <Button variant="isTag" label={selectedUser} onClick={() => setSelectedUser("")} />
                    )}

                    {hasSelectedStatus && (
                      <Button variant="isTag" label={statusLabels[selectedStatus as ActivityStatus]} onClick={() => setSelectedStatus("")} />
                    )}

                    {selectedSubjects.map((subject) => (
                      <Button
                        key={subject}
                        variant="isTag"
                        label={subject}
                        onClick={() =>
                          setSelectedSubjects((prev) => prev.filter((s) => s !== subject))
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
              {hasActiveFilters && (
                <Button
                  variant="isLink"
                  label="Reset all filters"
                  onClick={resetFilters}
                  iconLeft={<RotateCcw />}
                />
              )}
            </header>
          )}
          <ul className={styles.activityFeedList}>
            {filteredData.map((activity) => (
              <li key={activity.id} className={styles.activityFeedList__item}>
                <div>
                  <p className={styles.activityFeedList__subject}>{activity.subject}</p>
                  <p className={styles.activityFeedList__description}>{activity.description}</p>
                </div>
                <div>
                  <p className={styles.activityFeedList__name}>{activity.user.name}</p>
                  <p className={styles.activityFeedList__date}>
                    {new Date(activity.createdAt).toLocaleDateString("en-EN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit"
                    })}
                  </p>
                </div>
                <div className={styles.activityFeedList__tag}>
                  <Tag
                    label={statusLabels[activity.status as ActivityStatus]}
                    variant={statusToVariant[activity.status as ActivityStatus]}
                  />
                </div>
              </li>
            ))}
            {filteredData.length === 0 && (
              <li className={styles.activityFeedList__noResults}>
                <p>No results found. Try adjusting your filters or reset them below.</p>
                <Button
                  label="Reset filters"
                  onClick={resetFilters}
                  iconLeft={<RotateCcw />}
                />
              </li>
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}
