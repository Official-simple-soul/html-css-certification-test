const newsList = document.getElementById('news-list');

const newsData = [
  {
    title: 'Breaking News: The United States has declared war on Iran',
    description:
      'The United States has declared war on Iran, causing widespread tension and chaos in the Middle East.',
    image: 'https://example.com/breaking-news-iran-war-image.jpg',
    date: new Date('2022-01-01'),
  },
  {
    title: 'Latest Election Results: Democratic candidate wins the election',
    description:
      'The Democratic candidate received 60% of the vote, leading to a surge in support for their platform.',
    image:
      'https://example.com/latest-election-results-democratic-candidate-image.jpg',
    date: new Date('2022-01-02'),
  },
  {
    title: 'New Study Finds: The Effectiveness of COVID-19 vaccines',
    description:
      'A new study has found that the COVID-19 vaccines are effective in reducing the spread of the virus.',
    image: 'https://example.com/new-study-finds-covid-19-vaccines-image.jpg',
    date: new Date('2022-01-03'),
  },
  {
    title: 'Interview with Dr. Samuel Peterson: The Impact of AI on our lives',
    description:
      'Dr. Samuel Peterson discusses the potential impact of AI on our lives, such as job displacement and automation.',
    image:
      'https://example.com/interview-with-dr-samuel-peterson-impact-of-ai-image.jpg',
    date: new Date('2022-01-04'),
  },
];

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

const newsListArray = newsData.map((newsItem, index) => {
  return `
      <article class="newsCard">
        <div class="overflow-hidden newsCard__image-container">
          <img
            src="https://picsum.photos/500/38${index}"
            alt="${newsItem.title}"
            class="newsCard__image"
          />
        </div>
        <div class="cardContent--newsCard">
          <p class="date">${formatDate(newsItem.date)}</p>
          <h2 class="card-title">${newsItem.title}</h2>
          <p class="author">${newsItem.description}</p>
        </div>
      </article>
    `;
});

newsList.innerHTML = newsListArray.join('');
