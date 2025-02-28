"use client";

import Box from "../../lib/components/box";
import Tabs from "../../lib/components/tabs";
import Profile from "../../lib/pages/settings/profile";

export default function SettingsPage() {
  return (
    <Box className="px-0 md:p-4">
      <Tabs
        tabs={[
          { label: "Edit Profile", render: () => <Profile /> },
          { label: "Notifications", render: () => <div>Notifications</div> },
        ]}
      />
    </Box>
  );
}
