import { useState } from "react"
import Head from "next/head"
import { Tab } from "@headlessui/react"

const Cashflow = () => {
  const tabStyle =
    "ui-selected:bg-white ui-selected:text-black text-slate-400 py-1 px-4 rounded-md focus:outline-none"
  return (
    <>
      <Head>
        <title>Pocketpal - Cashflows</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <main className={`h-full w-full bg-white`}>
        <Tab.Group>
          <div className="mb-2 flex flex-col justify-between sm:flex-row ">
            <h1 className="mb-2 mr-3 text-2xl font-extrabold text-black max-sm:mb-4 max-sm:ml-[45px] ">
              Cashflows
            </h1>

            <div className="flex items-center font-medium">
              <div className="ranger-picker flex w-full items-center">
                <Tab.List className="bg-slate-200 rounded-md p-1">
                  <Tab className={`${tabStyle}`}>Income</Tab>
                  <Tab className={`${tabStyle}`}>Expenses</Tab>
                  <Tab className={`${tabStyle}`}>Subsciptions</Tab>
                </Tab.List>
              </div>
            </div>
          </div>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
    </>
  )
}

export default Cashflow
