const getHomePage = async (res) => {
  return new Promise((resolve, reject) => {
    fetch('/api/post/', { method: 'GET' })
      .then(res => resolve(res.json()))
      .catch(res => reject(res))
  })
}

const register = async (res) => {
  return new Promise((resolve, reject) => {
    fetch('/api/post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        password: res.password
      })
    })
      .then(res => resolve(res.json()))
      .catch(res => reject(res))
  })
}

export { getHomePage, register }
