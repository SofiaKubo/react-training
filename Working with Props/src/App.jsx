import React from "react";
import "./index.css";

const cardData = [
  {
    title: "Мокка",
    description: "Развиваем финтех-продукт для международного рынка",
    date: "24 апреля 2024",
    imageUrl: "/img-1.jpeg",
    tags: ["#финтех", "#международный", "#рынок"],
    archived: false,
  },
  {
    title: "Деньги Вперед",
    description: "Фронтенд и бэкенд для сервиса выплат зарплат по запросу",
    date: "16 января 2024",
    imageUrl: "/img-2.jpeg",
    tags: ["#финансы", "#сервис", "#выплаты"],
    archived: false,
  },
  {
    title: "ResolHR",
    description: "Помогли HR-tech-стартапу с кастомизацией для VIP-клиентов",
    date: "10 октября 2023",
    imageUrl: "/img-3.jpeg",
    tags: ["#HR", "#кастомизация", "#VIP"],
    archived: true,
  },
  {
    title: "ActivePlatform",
    description: "Интеграция Adobe и развитие платформы комплексной подписки",
    date: "10 ноября 2022",
    imageUrl: "/img-4.jpeg",
    tags: ["#интеграция", "#платформа", "#подписка"],
    archived: false,
  },
  {
    title: "START",
    description: "Разработали платформу A/B тестов для стримингового сервиса",
    date: "22 сентября 2022",
    imageUrl: "/img-5.jpeg",
    tags: ["#A/B тесты", "#стриминг", "#платформа"],
    archived: false,
  },
  {
    title: "Mindbox",
    description:
      "Поддерживаем редизайн платформы автоматизированного маркетинга",
    date: "21 сентября 2022",
    imageUrl: "/img-6.jpeg",
    tags: ["#маркетинг", "#редизайн", "#автоматизация"],
    archived: false,
  },
];

export default function CardContainer() {
  return (
    <div className="card-container">
      {cardData.map((product) => (
        <Card key={product.title} productObj={product} />
      ))}
    </div>
  );
}

function Card(props) {
  return (
    <article className="card">
      <img
        className="card-image"
        src={props.productObj.imageUrl}
        alt={props.productObj.title}
      />
      <div className="card-content">
        <h3 className="card-title">{props.productObj.title}</h3>
        <p className="card-description">{props.productObj.description}</p>
        <time className="card-date">{props.productObj.date}</time>
        <ul className="card-tags">
          {props.productObj.tags.map((tag) => (
            <li key={tag}>
              <CardTag text={tag} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function CardTag(props) {
  return <span className="card-tag">{props.text}</span>;
}
