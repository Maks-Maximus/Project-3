const postItems = [
  {
    id: "1",
    author: "Authors name",
    title: "7 Practical CSS Tips",
    img: "https://i.pinimg.com/originals/56/ee/f3/56eef36c0572b4320dd5c579b3286051.jpg",
    description: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off."
  }, 
  {
    id: "2",
    author: "Authors name",
    title: "7 Practical CSS Tips",
    img: "https://t3.ftcdn.net/jpg/02/94/68/90/360_F_294689081_le5OstC6FzkWspsbZtwaMwZGefdB9jKl.jpg",
    description: "Recently, I have been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."
  },
  {
    id: "3",
    author: "Authors name",
    title: "7 Practical CSS Tips",
    img: "https://st.depositphotos.com/1005145/1254/i/450/depositphotos_12544386-stock-photo-guy-meditating-at-sunset.jpg",
    description: "Recently, I have been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks..."
  },
]

const article = `<div class="mt-5 d-flex justify-content-between m-5">
    <div class="me-5">
    <div id="postItems"></div>
  </div>`;

const articles = document.getElementById("articles")
const spinner = `<div id="spinner" class="spinner-border" role="status"></div>`


const loadPosts = () => {
  const promisePosts = new Promise((resolve, reject) => {
    articles.innerHTML = spinner
    setTimeout(() => resolve(postItems), 2000)
  })

  promisePosts.then((postItems) => {
    const spinnerId = document.getElementById('spinner')
    spinnerId.remove()

    postItems.map((post) => {
      let newArticle = article.replace(
        `<div id="postItems"></div>`, 
        `<div id="postItems">
          <p id="title">Author Name: ${post.author}</p>
          <a href="article.html">
          <p id="title">Title: ${post.title}</p>
          </a>
          <p id="description">Description: ${post.description}</p>
          <img class="w-25" src="${post.img}" alt="New image" />
        </div>`
      )
      
      articles.innerHTML += newArticle
    })
  }).catch((err) => {
    const spinnerId = document.getElementById('spinner')
    spinnerId.remove()
    const articlesId = document.getElementById("articles")

    const errorText = `
      <h3>Upload error</h3>
    `
    articlesId.innerHTML = errorText
  })
}

loadPosts()
