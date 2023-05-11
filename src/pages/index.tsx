import Head from "next/head"
import { useState } from "react"
import { DateRangePicker } from "@tremor/react"
import { format } from "date-fns"

import {
  getCurrentMonth,
  getStartDateOfMonth,
  getTodayDate,
} from "@/utils/date"
import { dateFormatStr } from "@/utils/constants"

const currentMonthStr = getCurrentMonth()
const start = getStartDateOfMonth(currentMonthStr)
const end = getTodayDate()

export default function Home() {
  const [selectedDateObj, setSelectedDateObj] = useState({
    start,
    end,
    dropdown: "m",
  })

  return (
    <>
      <Head>
        <title>Pocketpal - Overview</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <main className={`h-full w-full`}>
        <div className="mb-2 flex flex-col justify-between sm:flex-row ">
          <h1 className="mb-2 mr-3 text-2xl font-extrabold text-black max-sm:mb-4 max-sm:ml-[45px]">
            Overview
          </h1>
          <div className="flex items-center font-medium">
            <div className="ranger-picker flex w-full items-center">
              <DateRangePicker
                defaultValue={[
                  new Date(selectedDateObj.start),
                  new Date(selectedDateObj.end),
                  selectedDateObj.dropdown,
                ]}
                onValueChange={(value) => {
                  const [startDate, endDate, dropdown] = value
                  setSelectedDateObj({
                    start: format(new Date(startDate!), dateFormatStr),
                    end: format(new Date(endDate!), dateFormatStr),
                    // @ts-ignore
                    dropdown,
                  })
                }}
                maxDate={new Date()}
                enableDropdown={true}
                placeholder="Select a date"
                enableYearPagination={true}
                className="mt-0 max-w-none"
                color="blue"
              />
            </div>
          </div>
        </div>
        <h2 className="mb-4 mt-8 text-black">Report</h2>
      </main>
    </>
  )
}
