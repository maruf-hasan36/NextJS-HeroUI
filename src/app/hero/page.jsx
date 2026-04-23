import { Button, ButtonRoot } from "@heroui/react";
import React from "react";

const HeroPage = () => {
  return (
    <div>
      <h1>Hero Page </h1>
      <div className="flex gap-6">
        <Button variant="primary">Save</Button>
        <Button variant="secondary"> Hey</Button>
      </div>
    </div>
  );
};

export default HeroPage;
