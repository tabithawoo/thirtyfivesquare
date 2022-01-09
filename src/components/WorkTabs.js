import React, { useEffect, useState } from "react";
import { AppBar, Paper, Tab, Tabs } from "@mui/material";
import { WorkPanel } from "./";

export function WorkTabs({ tabs, panels, productions }) {
  const [value, setValue] = useState(1);
  const [workPanel, setWorkPanel] = useState(
    panels.find((w) => w.strapiId == "1")
  );
  const [panelProductions, setPanelProductions] = useState(
    productions.filter((p) => p.work.id == "1")
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setWorkPanel(panels.find((w) => w.strapiId == newValue));
    setPanelProductions(productions.filter((p) => p.work.id == newValue));
  };

  return (
    <Paper elevation={4} square>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "primary.light", color: "primary.main" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          variant="fullWidth"
        >
          {tabs.map((work, key) => {
            return <Tab label={work.title} value={work.strapiId} />;
          })}
        </Tabs>
      </AppBar>
      <WorkPanel work={workPanel} productions={panelProductions} />
    </Paper>
  );
}
