// import React from 'react'

import { Button, Card, Divider } from "@mui/material"
import Transactions from "./Transactions"

const Payments = () => {
  return (
    <div className="space-y-5">
      <Card className="rounded-md space-y-4 p-5">
        <h1 className="text-gray-300 font-medium">Total Earnings</h1>
        <h1 className="text-md font-bold pb-1">₹1242</h1>
        <Divider />
        <p className="text-gray-300 font-medium pt-1">Last Paymnet: <span>₹0</span></p>
      </Card>
      <Button>
        Transaction
      </Button>
      <Transactions />
    </div>
  )
}

export default Payments
