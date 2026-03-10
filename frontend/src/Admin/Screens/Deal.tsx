// import React from 'react'

import { Button } from "@mui/material";
import { useState } from "react"
import DealTable from "../Components/DealTable";
import DealCategoryTable from "../Components/DealCategoryTable";
import CreateDeal from "../Components/CreateDeal";

const tabs = [
  "Deals",
  "Category",
  "Create Deal"
]
const Deal = () => {
  const [activeTab, setActiveTab] = useState("Deals");
  return (
    <div>
      <div className="flex gap-3">
        {tabs.map((item) => <Button size="small" color="secondary" onClick={() => setActiveTab(item)} variant={activeTab == item ? "contained" : "outlined"}>
          <p>{item}</p>
        </Button>)}
      </div>
      <div className="mt-5">
        {activeTab == "Deals" ? <DealTable /> : activeTab == "Category" ? <DealCategoryTable /> :
          <div className="mt-20 lg:px-70">
            <CreateDeal />
          </div>}
      </div>
    </div>
  )
}

export default Deal
