import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d5e44d5126054be2b52caf370abee57b"
        );

        if (!response.ok) {
          const errorMessage = `${response.status} - ${response.statusText}`;
          throw new Error(`Network response was not ok: ${errorMessage}`);
        }

        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          setNews(data.articles[0]);
        } else {
          console.error('No articles found in the response:', data);
        }
      } catch (error) {
        console.error('Error fetching news:', error.message);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    setTime(strTime);

    const yyyy = currentDate.getFullYear();
    let mm = currentDate.getMonth() + 1; // Months start at 0!
    let dd = currentDate.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = `${dd}-${mm}-${yyyy}`;
    setDate(formattedToday);
  }, []); // Empty dependency array to run only once

  return (
    <div
      style={{
        height: "90vh",
        width: "30vw",
        position: "relative",
        borderRadius: "12px",
        padding: "6px",
      }}
    >
      {news.urlToImage ? (
  <img
    src={news.urlToImage}
    style={{ height: "60vh", borderRadius: "12px", width: "30vw" }}
    alt="News"
  />
) : (
  <div style={{ height: "60vh", background: "#ccc", borderRadius: "12px" }}>
    No Image Available
  </div>
)}
      <div
        style={{
          height: "25vh",
          borderRadius: "12px",
          width: "30vw",
          background: "white",
          fontSize: "1.5rem",
          padding: "6px",
        }}
      >
        {news.description}
      </div>
      <div
        style={{
          position: "absolute",
          width: "30vw",
          height: "30vh",
          background: "rgba(0, 0, 0, 0.74)",
          top: "31vh",
          padding: "24px",
          boxSizing: "border-box",
        }}
      >
        <p style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>
          {news.title}
        </p>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {date}
        </span>
        <span
          style={{ color: "white", fontSize: "1.3rem", marginRight: "10px" }}
        >
          {time}
        </span>
      </div>
    </div>
  );
};

export default News;
