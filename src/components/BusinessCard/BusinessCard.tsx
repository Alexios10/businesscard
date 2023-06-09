import { BusinessCard } from "@prisma/client";
import { useSession } from "next-auth/react";
import type { FC } from "react";

interface BusinessCardProps {
  inputs?: {
    title: string;
    website: string;
  };
  card?: BusinessCard | null | undefined;
}

const BusinessCard: FC<BusinessCardProps> = ({ inputs, card }) => {
  const { data: sessionData } = useSession();

  const front = card
    ? "http://localhost:3000/api/og" +
      "?username=" +
      card.name +
      "&title=" +
      card.title +
      "&imgSrc=" +
      card.imgSrc
    : inputs &&
      "http://localhost:3000/api/og" +
        "?username=" +
        sessionData?.user?.name +
        "&title=" +
        inputs.title +
        "&imgSrc=" +
        sessionData?.user?.image;

  return (
    <div className="card">
      <div className="card-back">
        <div className="line-numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <code>
          <span className="variable">const </span>
          <span className="function">aboutMe </span>
          <span className="operator">= </span>
          <span>{"{"}</span>
          <div className="indent">
            <span className="property">name</span>
            <span className="operator">: </span>
            <span className="string">
              &lsquo;{card ? card.name : sessionData?.user?.name}&lsquo;
            </span>
            <span>,</span>
          </div>
          <div className="indent">
            <span className="property">title</span>
            <span className="operator">: </span>
            <span className="string">
              &lsquo;{card ? card.title : inputs?.title}&lsquo;
            </span>
            <span>,</span>
          </div>
          <div className="indent">
            <span className="property">contact</span>
            <span className="operator">: </span>
            <span>{"{"}</span>
            <div className="indent">
              <span className="property">email</span>
              <span className="operator">: </span>
              <span className="string">
                &lsquo;{card ? card.email : sessionData?.user?.email}&lsquo;
              </span>
              <span>,</span>
            </div>
            <div className="indent">
              <span className="property">website</span>
              <span className="operator">:</span>
              <span className="string">
                &lsquo;{card ? card.website : inputs?.website}&lsquo;
              </span>
            </div>
            <span>{"}"}</span>
          </div>
          <span>{"}"}</span>
        </code>
      </div>
      <div className="card-front">
        <img className="h-[15rem] w-[30rem]" src={front} />
      </div>
    </div>
  );
};

export default BusinessCard;
