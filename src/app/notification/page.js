import React from "react";
import NotificationCard from "@/components/NotificationCard";
import PageNavigation from "@/components/PageNavigation";
import $http from "@/lib/api";

export default async function NotificationPage() {
  const { data: notifications } = await $http.get("/api/notification");
  return (
    <div>
      <PageNavigation title="Notification" />

      <ul>
        {notifications?.map((notification) => (
          <li key={notification?.id}>
            <NotificationCard
              type={notification?.type}
              status={notification?.status}
              viewed={notification?.viewed}
              title={notification?.title}
              description={
                <p
                  dangerouslySetInnerHTML={{ __html: notification.description }}
                ></p>
              }
              time={notification?.time}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
