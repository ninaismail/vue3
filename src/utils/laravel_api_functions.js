export async function getProtfolioProjectss(){
    let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/portfolio-projects', {
        headers: {
            'Accept': 'application/json',
            'Cache-Control': 'max-age=3600', // Cache for 1 hour
          },
    })
    .then(res => {
      console.log("res", res)
      data = res.data;
    })
    .catch((error) => {
      console.log(error)
      data=[]
    })
  return data;
}
export async function getCollaborationProjects(){
    let data = []
    const axios = (await import("axios")).default;
    await axios.get('http://localhost:8000/api/v1/collaboration-projects', {
        headers: {
            'Accept': 'application/json',
            'Cache-Control': 'max-age=3600', // Cache for 1 hour
          },
    })
    .then(res => {
      console.log("res", res)
      data = res.data;
    })
    .catch((error) => {
      console.log(error)
      data=[]
    })
  return data;
}
export async function getHomePageBanner() {
  let data = []
  const axios = (await import("axios")).default;
  await axios.get('http://localhost:8000/api/v1/homepage-banner/featured', {
      headers: {
          'Accept': 'application/json',
          'Cache-Control': 'max-age=3600', // Cache for 1 hour
        },
  })
  .then(res => {
    console.log("res", res)
    data = res.data;
  })
  .catch((error) => {
    console.log(error)
    data=[]
  })
  return data;
}
export async function getPortfolioPageBanner() {
  let data = []
  const axios = (await import("axios")).default;
  await axios.get('http://localhost:8000/api/v1/portfolio-banner/featured', {
      headers: {
          'Accept': 'application/json',
          'Cache-Control': 'max-age=3600', // Cache for 1 hour
        },
  })
  .then(res => {
    console.log("res", res)
    data = res.data;
  })
  .catch((error) => {
    console.log(error)
    data=[]
  })
  return data;
}
export async function getCollaborationPageBanner() {
  let data = []
  const axios = (await import("axios")).default;
  await axios.get('http://localhost:8000/api/v1/collaboration-banner/featured', {
      headers: {
          'Accept': 'application/json',
          'Cache-Control': 'max-age=3600', // Cache for 1 hour
        },
  })
  .then(res => {
    console.log("res", res)
    data = res.data;
  })
  .catch((error) => {
    console.log(error)
    data=[]
  })
  return data;
}