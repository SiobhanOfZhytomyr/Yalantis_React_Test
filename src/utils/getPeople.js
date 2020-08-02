
const URL = "https://yalantis-react-school-api.yalantis.com/api/task0/users"

export const getUsers = async (url=URL) => {
    const res = await (await fetch(url)).json()
    return res.map(({id, firstName, lastName, dob}) => ({
      id,
      firstName,
      lastName,
      mob: parseInt(dob.split("-")[1], 10),
    }))
  }