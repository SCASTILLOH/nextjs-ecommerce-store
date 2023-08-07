import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("85b3582f-dcf2-4fbe-a4b6-8cc1b0170cff");

  console.log(billboard);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
