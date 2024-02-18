const postItems = [
    {
      id: "1",
      author: "Authors name",
      title: "7 Practical CSS Tips",
      img: "https://i.pinimg.com/originals/56/ee/f3/56eef36c0572b4320dd5c579b3286051.jpg",
      description: "How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place. And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker. But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids."
    }, 
  ]
  
  const article = `<div class="mt-5 d-flex justify-content-between m-5">
      <div class="me-5">
      <div id="postItems"></div>
    </div>
  `
  
  const articles = document.getElementById("articles")
  const spinner = `<div id="spinner" class="spinner-border" role="status"></div>`
  
  
  const loadPosts = () => {
    const promisePosts = new Promise((resolve, reject) => {
      articles.innerHTML = spinner
      setTimeout(() => resolve(postItems), 500)
    })
  
    promisePosts.then((postItems) => {
      const spinnerId = document.getElementById('spinner')
      spinnerId.remove()
  
      postItems.map((post) => {
        let newArticle = article.replace(
          `<div id="postItems"></div>`, 
          `<div id="postItems">
            <p id="title">Author Name: ${post.author}</p>
            <p id="title">Title: ${post.title}</p>
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
  