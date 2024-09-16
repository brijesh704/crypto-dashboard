import React from "react";

import DashboardLayout from "../../components/DashboardLayout";
import Portfolio from "./components/Portfolio";
import { Grid, GridItem } from "@chakra-ui/react";
import PriceSection from "./components/PriceSection";
import Transaction from "./components/Transaction";
import InfoCard from "./components/InfoCard";

function Dashboard({}) {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap="6"
        >
          <GridItem
            colSpan={{
              base: 1,
              xl: 2,
            }}
          >
            <Portfolio />
          </GridItem>
          <GridItem colSpan={1}>
            <PriceSection />
          </GridItem>
          <GridItem colSpan={1}>
            <Transaction />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              imgUrl="/dot_bg.svg"
              text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
              tagText="Loan"
              inverted={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
