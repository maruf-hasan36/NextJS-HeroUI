"use client";
import React from "react";
import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";

const TaskCard = ({ task }) => {
  const { title, description, status, priority } = task;
  return (
    <div className="border-2 rounded-2xl">
      <Card variant="transparent" className="">
        <CircleDollar
          aria-label="Dollar sign icon"
          className="text-primary size-6"
          role="img"
        />
        <h1>{priority}</h1>
        <Card.Header>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Card.Header>
        <Card.Footer>
          <Link
            aria-label="Go to Acme Creator Hub (opens in new tab)"
            href="https://heroui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {status}
            <Link.Icon aria-hidden="true" />
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TaskCard;
