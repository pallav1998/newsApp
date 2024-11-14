import Image from "next/image";
import React from "react";
import styles from "./catagory.module.css";
import Link from "next/link";

export default async function page({ params }) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${params.category}&apiKey=${process.env.NEWS_SECRET_KEY}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <div className="m-auto w-fit">
      {data.articles.map((items, index) => (
        <NewsCard
          key={`${items.title}-${index}`}
          imageUrl={items.urlToImage}
          title={items.title}
          sourceName={items.source.name}
          publishedAt={items.publishedAt}
          author={items.author}
          description={items.description}
          content={items.content}
          newsUrl={items.url}
        />
      ))}
    </div>
  );
}

function NewsCard({
  imageUrl,
  title,
  sourceName,
  publishedAt,
  author,
  description,
  content,
  newsUrl,
}) {
  const date = new Date(publishedAt);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleString("en-US", options);

  return (
    <div className={styles.cardDiv}>
      <Image
        alt="product image"
        src={
          imageUrl ??
          "https://www.hollywoodreporter.com/wp-content/uploads/2024/11/GettyImages-2181440731-H-2024.jpg?w=1296&h=730&crop=1"
        }
        width={272}
        height={272}
        objectFit="fit-content"
        className={styles.imageDiv}
      />

      <div className={styles.discruption}>
        <div>
          <strong className="text-lg">{title}</strong>
          <p className="text-xs mb-2">
            <strong>short</strong> by {author} / {formattedDate}
          </p>

          <p className="font-sans mb-auto">
            {description} {content}
          </p>
        </div>

        <Link
          href={
            newsUrl ??
            "https://www.hollywoodreporter.com/wp-content/uploads/2024/11/GettyImages-1830908453-H-2024.jpg?w=1296&h=730&crop=1"
          }
          target="_blank"
          className="font-serif text-sm"
        >
          <strong>Read More at {sourceName}</strong>
        </Link>
      </div>
    </div>
  );
}
// 30faa77e5d544b6ea3640bb2d2d711e4
// https://newsapi.org/v2/top-headlines?category=sports&apiKey=30faa77e5d544b6ea3640bb2d2d711e4
